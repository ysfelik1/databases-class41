const question1 = "1. What are the names of countries with population greater than 8 million?";
const query1 = "SELECT Name FROM country WHERE Population>8000000";

const question2 = "2. What are the names of countries that have “land” in their names?";
const query2 = "SELECT Name FROM Country WHERE Name LIKE '%land%'";

const question3 = "3. What are the names of the cities with population in between 500,000 and 1 million?";
const query3 = "SELECT Name,Population FROM city WHERE Population BETWEEN 500000 AND 1000000";

const question4 = "4. What's the name of all the countries on the continent ‘Europe’?";
const query4 = "SELECT Name FROM country WHERE continent='Europe'";

const question5 = "5. List all the countries in the descending order of their surface areas.";
const query5 = "SELECT Name,SurfaceArea FROM country ORDER BY SurfaceArea DESC";

const question6 = "6. What are the names of all the cities in the Netherlands?";
const query6 = "SELECT Name FROM city WHERE CountryCode='NLD'";

const question7 = "7. What is the population of Rotterdam?";
const query7 = "SELECT Population FROM city WHERE Name='Rotterdam'";

const question8 = "8. What's the top 10 countries by Surface Area?";
const query8 = "SELECT Name,SurfaceArea FROM country ORDER BY SurfaceArea DESC LIMIT 10";

const question9 = "9. What's the top 10 most populated cities?";
const query9 = "SELECT Name,Population FROM city ORDER BY Population DESC LIMIT 10";

const question10 = "10. What is the population number of the world?";
const query10 = "SELECT SUM(Population) as 'Population of the World' FROM country";

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword',
    database: 'new_world',
});

connection.connect();
connection.query(query1, function (error, results) {
    if (error) throw error;
    console.log(question1)
    console.table(results);
});
connection.query(query2, function (error, results) {
    if (error) throw error;
    console.log(question2)
    console.table(results);
});
connection.query(query3, function (error, results) {
    if (error) throw error;
    console.log(question3)
    console.table(results);
});
connection.query(query4, function (error, results) {
    if (error) throw error;
    console.log(question4)
    console.table(results);
});
connection.query(query5, function (error, results) {
    if (error) throw error;
    console.log(question5)
    console.table(results);
});
connection.query(query6, function (error, results) {
    if (error) throw error;
    console.log(question6)
    console.table(results);
});
connection.query(query7, function (error, results) {
    if (error) throw error;
    console.log(question7)
    console.table(results);
});
connection.query(query8, function (error, results) {
    if (error) throw error;
    console.log(question8)
    console.table(results);
});
connection.query(query9, function (error, results) {
    if (error) throw error;
    console.log(question9)
    console.table(results);
});
connection.query(query10, function (error, results) {
    if (error) throw error;
    console.log(question10)
    console.table(results);
});
connection.end();