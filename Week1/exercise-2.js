
const question1 = "1. What are the names of countries with population greater than 8 million?";
const query1 = "SELECT Name FROM city WHERE Population>8000000";

const question2= "2. What are the names of countries that have “land” in their names?";
const query2 = "SELECT Name FROM Country WHERE Name LIKE '%land%'";

const question3 = "3. What are the names of the cities with population in between 500,000 and 1 million?";
const query3 = "SELECT Name,Population FROM city WHERE Population BETWEEN 500000 AND 1000000";

const question4= "4. What's the name of all the countries on the continent ‘Europe’?";
const query4 = "SELECT Name FROM country WHERE continent='Europe'";

const question5 = "5. List all the countries in the descending order of their surface areas.";
const query5 = "SELECT Name,SurfaceArea FROM country ORDER BY SurfaceArea DESC";

const question6 = "6. What are the names of all the cities in the Netherlands?";
const query6 = "SELECT Name FROM city WHERE CountryCode='NLD'";

const question7 = "7. What is the population of Rotterdam?";
const query7 = "SELECT Population FROM city WHERE Name='Rotterdam'";

const question8 = "8. What's the top 10 countries by Surface Area?";
const query8 = "SELECT Name,Population FROM country ORDER BY SurfaceArea DESC LIMIT 10";

const question9 = "9. What's the top 10 most populated cities?";
const query9 = "SELECT Name,Population FROM city ORDER BY Population DESC LIMIT 10";

const question10 = "10. What is the population number of the world?";
const query10 = "SELECT SUM(Population) as 'Population of the World' FROM country";



const executeQuery = (selectQuery,question) => {
    var mysql = require('mysql');
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'hyfuser',
        password: 'hyfpassword',
        database: 'new_world',
    });

    connection.connect();
    connection.query(selectQuery, function (error, results, fields) {
        if (error) throw error;
        console.log(question)
        console.table(results);
    });
    connection.end();
}
executeQuery(query1,question1);
executeQuery(query2,question2);
executeQuery(query3,question3);
executeQuery(query4,question4);
executeQuery(query5,question5);
executeQuery(query6,question6);
executeQuery(query7,question7);
executeQuery(query8,question8);
executeQuery(query9,question9);
executeQuery(query10,question10);
