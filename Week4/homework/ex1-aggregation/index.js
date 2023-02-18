import fs from 'fs';
import csvParser from 'csv-parser';

const dotenv = await import('dotenv');
dotenv.config();
import { MongoClient } from  'mongodb';

const results = [];

async function insertData(client) {
  getDataCSV();
  const myCollection = await client
    .db('databaseWeek4')
    .collection('populations')
    .insertMany(results);

  console.log(
    `${myCollection.insertedCount} document inserted in populations collection`
  );
}

async function getTotalPopulationByYear(country, client) {
  const pipeline = [
    {
      $match: { Country: country },
    },
    {
      $addFields: {
        M: { $toInt: "$M" },
        F: { $toInt: "$F" }
      }
    },
    {
      $group: {
        _id: '$Year',
        countPopulation: { $sum: { $add: ['$M', '$F'] } },
      },
    },
    {
      $sort: { _id: 1 },
    },
  ];
  const result = await client
    .db('databaseWeek4')
    .collection('populations')
    .aggregate(pipeline)
    .toArray();

  console.log(result);
}
 function getDataCSV() {

  fs.createReadStream('population_pyramid_1950-2022.csv')
    .pipe(csvParser())
    .on('data', (data) => {
      const { Country, Year, Age, M, F } = data;
      results.push({ Country, Year, Age, M, F });
    })
    .on('end', () => {
      console.log('CSV file has read');
    });
}

async function main() {
  if (process.env.MONGODB_URL == null) {
    throw Error(
      `You did not set up the environment variables correctly. Did you create a '.env' file and add a package to create it?`
    );
  }
  const client = new MongoClient(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  const session = client.startSession();
  try {
    
    await session.withTransaction(async () => {
      await insertData(client);
    
      await getTotalPopulationByYear('Netherlands', client);
    });
    
  } catch (err) {
    console.error(err);
  } finally {
    // Always close the connection at the end
    session.endSession();
    client.close();
  }
}

main();



