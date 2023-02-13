var mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword',
    multipleStatements: true
});

const createTableAccount = `CREATE DATABASE IF NOT EXISTS Transactions;
USE Transactions;
CREATE TABLE  IF NOT EXISTS account(
    account_number INT AUTO_INCREMENT PRIMARY KEY,
    balance DECIMAL NOT NULL
    );
    ALTER TABLE account AUTO_INCREMENT=100;`;
const createTableAccountChanges = ` CREATE TABLE  IF NOT EXISTS account_changes(
    change_number INT AUTO_INCREMENT PRIMARY KEY,
    account_number INT NOT NULL ,
    amount DECIMAL NOT NULL,
    changed_date DATETIME NOT NULL,
    remark VARCHAR(100) NOT NULL,
    FOREIGN KEY (account_number) REFERENCES account(account_number)
    );`;

connection.connect();
connection.query(createTableAccount, function (error) {
    if (error) throw error;
    console.log('Table account created');
});
connection.query(createTableAccountChanges, function (error) {
    if (error) throw error;
    console.log('Table account_changes created');
});

connection.end();