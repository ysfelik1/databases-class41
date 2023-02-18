const fs = require('fs');
const csv = require('csv-parser');

const myObject = {};

fs.createReadStream('path/to/your/csv/file.csv')
  .pipe(csv())
  .on('data', (data) => {
    const key = data.column1;
    const value = data.column2;
    myObject[key] = value;
  })
  .on('end', () => {
    console.log(myObject); // This will output an object with key-value pairs based on the CSV data
  });