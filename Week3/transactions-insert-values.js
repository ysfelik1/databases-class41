var mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword',
    database: 'transactions',
    multipleStatements: true
});

const insertAccountValues = `INSERT INTO  account (balance)
values(2000);
INSERT INTO  account (balance)
values(2000);
INSERT INTO  account (balance)
values(2000);`;
const insertAccountChangesValues = `INSERT INTO  account_changes (account_number,amount,changed_date,remark)
values(102,500,'2023-02-13','first payment');
INSERT INTO  account_changes (account_number,amount,changed_date,remark)
values(101,-500,'2023-02-13','first payment');`;

connection.connect();
connection.query(insertAccountValues, function (error) {
    if (error) throw error;
    console.log('Values inserted');
});
connection.query(insertAccountChangesValues, function (error) {
    if (error) throw error;
    console.log('Values inserted');
});

connection.end();