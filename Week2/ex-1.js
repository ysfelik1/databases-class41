var mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword',
    database: 'research',
    multipleStatements: true
});

const createTableAuthors = `DROP TABLE  IF EXISTS authors;
  CREATE  TABLE authors (author_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
          author_name VARCHAR (50) NOT NULL,
          university VARCHAR (100),
          date_of_birth DATE,
          h_index INT,
          gender ENUM('Male','Female'))`;
const alterTableAuthors = ` ALTER TABLE authors ADD COLUMN mentor_id INT, ADD FOREIGN KEY (mentor_id) REFERENCES authors(author_id);`;

connection.connect();
connection.query(createTableAuthors, function (error) {
    if (error) throw error;
    console.log('Table created');
});
connection.query(alterTableAuthors, function (error) {
    if (error) throw error;
    console.log('New column added');
});

connection.end();




