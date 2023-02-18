import fs from 'fs';
import csvParser from 'csv-parser';

const results = [];

fs.createReadStream('population_pyramid_1950-2022.csv')
  .pipe(csvParser())
  .on('data', (data) => {
    const { Country, Year, Age, M, F } = data;
    results.push({ Country, Year, Age, M, F });
  })
  .on('end', () => {
    console.log(results);
  });





