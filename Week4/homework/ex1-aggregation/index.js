import fs from 'fs';
import csvParser from 'csv-parser';

const dotenv = await import('dotenv');
dotenv.config();
import { MongoClient } from 'mongodb';

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
  const cursor = await client
    .db('databaseWeek4')
    .collection('populations')
    .aggregate(pipeline)
    .toArray();

  console.log(`Total population of ${country} per year;`);
  console.log(cursor);
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
async function getTotalPopulationOfContinents(year, age, client) {
  const pipelineContinents = [
    {
      $addFields: {
        M: { $toInt: "$M" },
        F: { $toInt: "$F" },
        TotalPopulation: { $add: [{ $toInt: "$M" }, { $toInt: "$F" }] }
      }
    },
    {
      $match: {
        Country: {
          $in: [
            'AFRICA',
            'ASIA',
            'EUROPE',
            'LATIN AMERICA AND THE CARIBBEAN',
            'NORTHERN AMERICA',
            'OCEANIA',
          ],
        },
        Year: year,
        Age: age
      }
    }
  ];

  const cursor = await client
    .db('databaseWeek4')
    .collection('populations')
    .aggregate(pipelineContinents)
    .toArray();
  console.log(`Information of each continent for year:${year} and age group:${age};`);
  console.log(cursor);

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
    // await insertData(client);

      await getTotalPopulationByYear('Netherlands', client);
      await getTotalPopulationOfContinents('2020', '100+', client)
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



