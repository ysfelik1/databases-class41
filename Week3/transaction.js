var mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword',
    database: 'transactions',
    multipleStatements: true
});

const transferAmount  = `START TRANSACTION;
UPDATE account
SET balance=balance-1000
WHERE account_number=101;
UPDATE account
SET balance=balance+1000
WHERE account_number=102 ;
INSERT INTO  account_changes (account_number,amount,changed_date,remark)
values(102,1000,'2023-02-13','e-bike payment');
INSERT INTO  account_changes (account_number,amount,changed_date,remark)
values(101,-1000,'2023-02-13','e-bike payment');
COMMIT;`;

connection.connect();
connection.query(transferAmount, function (error) {
    if (error) throw error;
    console.log('Transfer succeed');
});


connection.end();