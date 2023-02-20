const dotenv = await import('dotenv');
dotenv.config();
import { MongoClient } from 'mongodb';
import {accountsData} from './data.js'

export async function createAccountDocument(accountsData) {


  if (process.env.MONGODB_URL == null) {
    throw Error(`Can not connect mongoDB. Check the connection statement.`);
  }

  const client = new MongoClient(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect(); // Establish the connection before inserting data

    const result = await client
      .db('databaseWeek4')
      .collection('accounts')
      .insertMany(accountsData);

    console.log(
      `${result.insertedCount} document(s) inserted in accounts collection`
    );
  } catch (error) {
    console.log(error);
  } finally {
    await client.close(); // Always close the connection when done
  }
}



createAccountDocument(accountsData);
