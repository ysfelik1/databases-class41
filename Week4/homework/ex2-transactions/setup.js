const dotenv = await import('dotenv');
dotenv.config();
import { MongoClient } from 'mongodb';

export async function createCollection(collectionData, collectionName) {

    if (process.env.MONGODB_URL == null) {
        throw Error(`Can not connect mongoDB. Check the connection statement.`);
    }

    const client = new MongoClient(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    try {
        await client.connect(); // Establish the connection before inserting data

        // Clean up the accounts collection\
        await client.connect();
        const database = client.db('databaseWeek4');
        const collection = database.collection(`${collectionName}`);

        const count = await collection.countDocuments();
        if (count != 0) {
            await collection.deleteMany({});
            console.log(`${count} document(s) deleted from ${collectionName} collection.`);
        }
        //fill the collection with given array.
        const result = await collection.insertMany(collectionData);

        console.log(
            `${result.insertedCount} document(s) inserted in ${collectionName} collection.`
        );
    } catch (error) {
        console.log(error);
    } finally {
        await client.close(); // Always close the connection when done
    }
}
