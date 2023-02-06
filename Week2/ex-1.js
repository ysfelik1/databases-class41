var mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword',
    database: 'research',
    multipleStatements: true
  });

  const createTableAuthors=`DROP TABLE  IF EXISTS authors;
  CREATE  TABLE authors (author_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
          author_name VARCHAR (50) NOT NULL,
          university VARCHAR (100),
          date_of_birth DATE,
          h_index INT,
          gender ENUM('Male','Female'))`;
  const executeQuery = (myQuery) => {

    connection.connect();
    connection.query(myQuery, function (error, results) {
        if (error) throw error;
        console.log(results);
    });
    connection.end();
  }

  executeQuery(createTableAuthors);


 