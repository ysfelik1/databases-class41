var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'hyfuser',
  password: 'hyfpassword',
  database : 'new_world',
  multipleStatements: true
});

connection.connect();

const selectQueries=`SELECT Name FROM city WHERE Population>8000000; 
SELECT Name FROM Country WHERE Name LIKE '%land%'; 
SELECT Name,Population FROM city WHERE Population BETWEEN 500000 AND 1000000; 
SELECT Name FROM country WHERE continent='Europe'; 
SELECT Name,SurfaceArea FROM country ORDER BY SurfaceArea DESC;
SELECT Name FROM city WHERE CountryCode='NLD';
SELECT Population FROM city WHERE Name='Rotterdam';
SELECT Name,Population FROM country ORDER BY SurfaceArea DESC LIMIT 10;
SELECT Name,Population FROM city ORDER BY Population DESC LIMIT 10;
SELECT SUM(Population) as 'Population of the World' FROM country; `
 
connection.query(selectQueries, function (error, results, fields) {
  if (error) throw error;
  console.table('Queries completed');
});

connection.end();