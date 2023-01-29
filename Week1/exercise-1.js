var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'hyfuser',
  password : 'hyfpassword',
  database : 'userdb',
});

connection.connect();

connection.query('SELECT room_name as name from room', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[1].name );
});

connection.end();