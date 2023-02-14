const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "new_world",
  multipleStatements: true,
});

connection.connect();

function getPopulation(Country, name, code, cb) {
  // assuming that connection to the database is established and stored as conn
  connection.query(
    `SELECT Population FROM ${Country} WHERE Name = '${name}' and code = '${code}'`,
    function (err, result) {
      if (err) cb(err);
      if (result.length == 0) cb(new Error("Not found"));
      cb(null, result[0]);
    }
  );
}
//example of SQL-injection
getPopulation("city", "' OR 1=1;", " OR 1=1;", console.log);

function getPopulationNew(Country, name, code, cb) {
  // assuming that connection to the database is established and stored as conn
  connection.query(
    `SELECT Population FROM ? WHERE Name = ? and code = ?`,
    [Country, name, code],
    function (err, result) {
      if (err) cb(err);
      if (result.length == 0) cb(new Error("Not found"));
      cb(null, result[0]);
    }
  );
}
getPopulationNew("city", "' OR 1=1;", " OR 1=1;", console.log);
connection.end();