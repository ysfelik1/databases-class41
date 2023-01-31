var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'hyfuser',
  password : 'hyfpassword',
  database : 'meetup',
});

connection.connect();

const createDatabase=' DROP DATABASE IF EXISTS meetup; CREATE DATABASE meetup;'
const createTableInvitee=`DROP TABLE IF EXISTS invitee;
CREATE TABLE invitee (
   invitee_no INT  PRIMARY KEY AUTO_INCREMENT,
   invitee_name  CHAR(100) NOT NULL,
   invited_by INT NOT NULL
 ); `
 const insertInviteeData=` INSERT INTO   invitee ( invitee_name,  invited_by)VALUES ('Yusuf ELIK',1);
 INSERT INTO   invitee ( invitee_name,  invited_by)VALUES ('Ali  ELIK',1);
  INSERT INTO   invitee ( invitee_name,  invited_by)VALUES ('Scarlett JOHANSSON',1);
   INSERT INTO   invitee ( invitee_name,  invited_by)VALUES ('Eva MENDEZ',1);
    INSERT INTO   invitee ( invitee_name,  invited_by)VALUES ('Angelina JULIE',1);
  `

connection.query(createDatabase+createTableInvitee+insertInviteeData, function (error, results, fields) {
  if (error) throw error;
  console.log('Queries completed');
});

connection.end();