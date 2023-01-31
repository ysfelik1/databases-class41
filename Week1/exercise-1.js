var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'hyfuser',
  password: 'hyfpassword',
  multipleStatements: true
});

connection.connect();
//creates database for each running
const createDatabase = `CREATE DATABASE IF NOT EXISTS meetup;use meetup;DROP TABLE IF EXISTS invitee;`
//creates invitee table and adds 5 row in it for each running
const tableInvitee = `CREATE TABLE invitee(invitee_no INT  PRIMARY KEY AUTO_INCREMENT,
  invitee_name CHAR(100) NOT NULL, invited_by INT NOT NULL );
  INSERT INTO invitee (invitee_name,invited_by)VALUES ('Yusuf ELIK',1); 
  INSERT INTO invitee(invitee_name, invited_by)VALUES ('Ali  ELIK',1); 
  INSERT INTO invitee( invitee_name,  invited_by)VALUES ('Scarlett JOHANSSON',1);  
   INSERT INTO   invitee ( invitee_name,  invited_by)VALUES ('Eva MENDEZ',1); 
   INSERT INTO   invitee ( invitee_name,  invited_by)VALUES ('Angelina JULIE',1);`
//creates room table and adds 5 row in it for each running
const tableRoom = `SET FOREIGN_KEY_CHECKS=0;
  DROP TABLE IF EXISTS room;
   SET FOREIGN_KEY_CHECKS=1;
  CREATE TABLE room  (
     room_no INT  PRIMARY KEY AUTO_INCREMENT,
     room_name   CHAR(100) NOT NULL,
     floor_number INT NOT NULL
     );
     INSERT INTO room(room_name,floor_number) VALUES('Room IBIZA',1);
     INSERT INTO room(room_name,floor_number) VALUES('Room IZMIR',2);
     INSERT INTO room(room_name,floor_number) VALUES('Room MIAMI',2);
     INSERT INTO room(room_name,floor_number) VALUES('Room SHARM',3);
     INSERT INTO room(room_name,floor_number) VALUES('Room SANTORINI',3);`
//creates meeting table and adds 5 row in it for each running
const tableMeeting = `SET FOREIGN_KEY_CHECKS=0;
    DROP TABLE IF EXISTS Meeting;
    SET FOREIGN_KEY_CHECKS=1;
 CREATE TABLE meeting   (
    meeting_no INT PRIMARY KEY AUTO_INCREMENT,
    meeting_title   CHAR(100) NOT NULL,
    starting_time DATETIME NOT NULL,
    ending_time DATETIME NOT NULL,
     room_no INT NOT NULL,
    FOREIGN KEY (room_no) REFERENCES room(room_no)
    );
 INSERT INTO meeting (meeting_title,starting_time,ending_time,room_no) VALUES('GLOBAL WARMING','2023-01-31 13:00:00','2023-01-31 16:00:00',1);
 INSERT INTO meeting (meeting_title,starting_time,ending_time,room_no) VALUES('ECONOMY','2023-02-01 13:00:00','2023-02-01 16:00:00',3);
 INSERT INTO meeting (meeting_title,starting_time,ending_time,room_no) VALUES('LEARNING METHODS','2023-11-11 10:00:00','2023-11-11 14:00:00',2);
 INSERT INTO meeting (meeting_title,starting_time,ending_time,room_no) VALUES('HISTORY','2023-11-30 13:00:00','2023-11-30 16:00:00',1);
 INSERT INTO meeting (meeting_title,starting_time,ending_time,room_no) VALUES('ART','2023-04-30 09:00:00','2023-04-30 11:00:00',4);
 `

connection.query(createDatabase, function (error, results, fields) {
  if (error) throw error;
  console.log('Queries completed');
});

connection.end();