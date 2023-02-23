var mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword',
    database: 'transactions',
    multipleStatements: true
});

const transferAmount = (senderAccountNumber, receiverAccountNumber, amount, date, remark) => {

    const transactionQuery = `START TRANSACTION;
UPDATE account
SET balance=balance-${amount}
WHERE account_number=${senderAccountNumber};
UPDATE account
SET balance=balance+${amount}
WHERE account_number=${receiverAccountNumber} ;
INSERT INTO  account_changes (account_number,amount,changed_date,remark)
values(${receiverAccountNumber},${amount},'${date}','${remark}');
INSERT INTO  account_changes (account_number,amount,changed_date,remark)
values(${senderAccountNumber},-${amount},'${date}','${remark}');
COMMIT;`;

    return transactionQuery;
}

const objectDate = new Date();
const day = objectDate.getDate();
const month = objectDate.getMonth();
const year = objectDate.getFullYear();


connection.connect();
connection.query(transferAmount(101, 102, 1000, `${year}-${month}-${day}`, `e-bike`), function (error) {
    if (error) throw error;
    console.log('Transfer succeed');
});


connection.end();