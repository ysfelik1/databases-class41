var mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword',
    database: 'research',
    multipleStatements: true
});

const authorsPapersInsert = `INSERT INTO authors_papers(paper_id,author_id) VALUES(1,9);
INSERT INTO authors_papers(paper_id,author_id) VALUES(1,8);
INSERT INTO authors_papers(paper_id,author_id) VALUES(2,1);
INSERT INTO authors_papers(paper_id,author_id) VALUES(2,2);
INSERT INTO authors_papers(paper_id,author_id) VALUES(3,3);
INSERT INTO authors_papers(paper_id,author_id) VALUES(3,4);
INSERT INTO authors_papers(paper_id,author_id) VALUES(4,7);
INSERT INTO authors_papers(paper_id,author_id) VALUES(4,8);
INSERT INTO authors_papers(paper_id,author_id) VALUES(5,6);
INSERT INTO authors_papers(paper_id,author_id) VALUES(5,10);
INSERT INTO authors_papers(paper_id,author_id) VALUES(6,5);
INSERT INTO authors_papers(paper_id,author_id) VALUES(6,7);
INSERT INTO authors_papers(paper_id,author_id) VALUES(7,11);
INSERT INTO authors_papers(paper_id,author_id) VALUES(7,1);
INSERT INTO authors_papers(paper_id,author_id) VALUES(8,4);
INSERT INTO authors_papers(paper_id,author_id) VALUES(8,9);
INSERT INTO authors_papers(paper_id,author_id) VALUES(9,15);
INSERT INTO authors_papers(paper_id,author_id) VALUES(9,14);
INSERT INTO authors_papers(paper_id,author_id) VALUES(10,12);
INSERT INTO authors_papers(paper_id,author_id) VALUES(10,13);
INSERT INTO authors_papers(paper_id,author_id) VALUES(11,12);
INSERT INTO authors_papers(paper_id,author_id) VALUES(11,13);
INSERT INTO authors_papers(paper_id,author_id) VALUES(11,1);
INSERT INTO authors_papers(paper_id,author_id) VALUES(12,2);
INSERT INTO authors_papers(paper_id,author_id) VALUES(12,3);
INSERT INTO authors_papers(paper_id,author_id) VALUES(13,4);
INSERT INTO authors_papers(paper_id,author_id) VALUES(13,5);
INSERT INTO authors_papers(paper_id,author_id) VALUES(14,6);
INSERT INTO authors_papers(paper_id,author_id) VALUES(14,7);
INSERT INTO authors_papers(paper_id,author_id) VALUES(15,8);
INSERT INTO authors_papers(paper_id,author_id) VALUES(15,9);
INSERT INTO authors_papers(paper_id,author_id) VALUES(16,10);
INSERT INTO authors_papers(paper_id,author_id) VALUES(16,11);
INSERT INTO authors_papers(paper_id,author_id) VALUES(17,12);
INSERT INTO authors_papers(paper_id,author_id) VALUES(17,13);
INSERT INTO authors_papers(paper_id,author_id) VALUES(18,14);
INSERT INTO authors_papers(paper_id,author_id) VALUES(19,15);
INSERT INTO authors_papers(paper_id,author_id) VALUES(20,1);
INSERT INTO authors_papers(paper_id,author_id) VALUES(21,2);
INSERT INTO authors_papers(paper_id,author_id) VALUES(22,4);
INSERT INTO authors_papers(paper_id,author_id) VALUES(23,5);
INSERT INTO authors_papers(paper_id,author_id) VALUES(24,6);
INSERT INTO authors_papers(paper_id,author_id) VALUES(25,7);
INSERT INTO authors_papers(paper_id,author_id) VALUES(26,8);
INSERT INTO authors_papers(paper_id,author_id) VALUES(27,9);
INSERT INTO authors_papers(paper_id,author_id) VALUES(28,10);
INSERT INTO authors_papers(paper_id,author_id) VALUES(29,11);
INSERT INTO authors_papers(paper_id,author_id) VALUES(30,13);`;


const createTables = ` SET FOREIGN_KEY_CHECKS=0;  DROP TABLE  IF EXISTS research_Papers ;
CREATE  TABLE research_Papers  (paper_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        paper_title VARCHAR (150) NOT NULL,
        conference VARCHAR (150) NOT NULL,
        publish_date DATE NOT NULL);
        
        SET FOREIGN_KEY_CHECKS=0; DROP TABLE  IF EXISTS authors_Papers ;
CREATE  TABLE authors_Papers  (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        paper_id INT NOT NULL,
        author_id INT NOT NULL,
        FOREIGN KEY (author_id) REFERENCES authors (author_id),
      FOREIGN KEY (paper_id) REFERENCES research_Papers (paper_id));`;
const insertRows = `INSERT INTO research_papers(paper_title,conference,publish_date) VALUES('AI for Database management','Conference 1','2019-01-24');
INSERT INTO research_papers(paper_title,conference,publish_date) VALUES('Database management','Conference 1','2021-10-19');
INSERT INTO research_papers(paper_title,conference,publish_date) VALUES('AI Development','Conference 1','2019-01-24');
INSERT INTO research_papers(paper_title,conference,publish_date) VALUES('CC Development Tech','Conference 1','2019-01-24');
INSERT INTO research_papers(paper_title,conference,publish_date) VALUES('AA Development Tech','Conference 1','2019-01-24');
INSERT INTO research_papers(paper_title,conference,publish_date) VALUES('BB Development Tech','Conference 1','2021-10-19');
INSERT INTO research_papers(paper_title,conference,publish_date) VALUES('VV management Tech','Conference 1','2019-01-24');
INSERT INTO research_papers(paper_title,conference,publish_date) VALUES('YY Development Tech','Conference 1','2021-10-19');
INSERT INTO research_papers(paper_title,conference,publish_date) VALUES('TR Development Tech','Conference 1','2021-10-18');
INSERT INTO research_papers(paper_title,conference,publish_date) VALUES('NL Development Tech','Conference 1','2019-01-24');
INSERT INTO research_papers(paper_title,conference,publish_date) VALUES('KK Development Tech','Conference 1','2019-01-24');
INSERT INTO research_papers(paper_title,conference,publish_date) VALUES('PP Development Tech','Conference 1','2020-02-13');
INSERT INTO research_papers(paper_title,conference,publish_date) VALUES('DD Development Tech','Conference 1','2019-01-24');
INSERT INTO research_papers(paper_title,conference,publish_date) VALUES('MM Development Tech','Conference 1','2021-10-18');
INSERT INTO research_papers(paper_title,conference,publish_date) VALUES('NN Development Tech','Conference 1','2019-01-24');
INSERT INTO research_papers(paper_title,conference,publish_date) VALUES('ZX Development Tech','Conference 1','2019-01-24');
INSERT INTO research_papers(paper_title,conference,publish_date) VALUES('SDS Development Tech','Conference 1','2019-01-24');
INSERT INTO research_papers(paper_title,conference,publish_date) VALUES('SD Development Tech','Conference 1','2020-02-13');
INSERT INTO research_papers(paper_title,conference,publish_date) VALUES('QQ Tech','Conference 1','2020-02-13');
INSERT INTO research_papers(paper_title,conference,publish_date) VALUES('EE Development Tech','Conference 1','2019-01-24');
INSERT INTO research_papers(paper_title,conference,publish_date) VALUES('RR Development Tech','Conference 1','2020-02-13');
INSERT INTO research_papers(paper_title,conference,publish_date) VALUES('TT Development Tech','Conference 1','2020-02-13');
INSERT INTO research_papers(paper_title,conference,publish_date) VALUES('YY Development Tech','Conference 1','2019-01-24');
INSERT INTO research_papers(paper_title,conference,publish_date) VALUES('YYC Tech','Conference 1','2020-03-20');
INSERT INTO research_papers(paper_title,conference,publish_date) VALUES('OP Development Tech','Conference 1','2020-03-20');
INSERT INTO research_papers(paper_title,conference,publish_date) VALUES('XC management','Conference 1','2019-01-24');
INSERT INTO research_papers(paper_title,conference,publish_date) VALUES('BN Development Tech','Conference 1','2019-01-24');
INSERT INTO research_papers(paper_title,conference,publish_date) VALUES('LK Development Tech','Conference 1','2019-01-24');
INSERT INTO research_papers(paper_title,conference,publish_date) VALUES('AS management Tech','Conference 1','2020-03-20');
INSERT INTO research_papers(paper_title,conference,publish_date) VALUES('RB Development Tech','Conference 1','2019-01-24');

INSERT INTO authors(author_name,university,date_of_birth,h_index,gender,mentor_id) VALUES('Yusuf ELIK','YALE','1989-10-23',44,'Male',1);
INSERT INTO authors(author_name,university,date_of_birth,h_index,gender,mentor_id) VALUES('Ahmet ELIK','YALE','1989-10-23',40,'Male',1);
INSERT INTO authors(author_name,university,date_of_birth,h_index,gender,mentor_id) VALUES('Mehmet ELIK','MIT','1989-10-23',55,'Male',2);
INSERT INTO authors(author_name,university,date_of_birth,h_index,gender,mentor_id) VALUES('Mike STONE','YALE','1989-10-23',44,'Male',1);
INSERT INTO authors(author_name,university,date_of_birth,h_index,gender,mentor_id) VALUES('Ali SMITH','MIT','1989-10-23',30,'Male',3);
INSERT INTO authors(author_name,university,date_of_birth,h_index,gender,mentor_id) VALUES('Fero TAS','BOGAZICI','1989-10-23',54,'Male',1);
INSERT INTO authors(author_name,university,date_of_birth,h_index,gender,mentor_id) VALUES('Yusuf GOREN','YALE','1989-10-23',44,'Male',4);
INSERT INTO authors(author_name,university,date_of_birth,h_index,gender,mentor_id) VALUES('Ali GOREN','YALE','1989-10-23',44,'Male',5);
INSERT INTO authors(author_name,university,date_of_birth,h_index,gender,mentor_id) VALUES('Selim YAVUZ','STANFORD','1989-10-23',35,'Male',6);
INSERT INTO authors(author_name,university,date_of_birth,h_index,gender,mentor_id) VALUES('Fatima DUMAN','ODTU','1989-10-23',44,'Female',2);
INSERT INTO authors(author_name,university,date_of_birth,h_index,gender,mentor_id) VALUES('Keynes BASTIK','BOGAZICI','1989-10-23',35,'Male',5);
INSERT INTO authors(author_name,university,date_of_birth,h_index,gender,mentor_id) VALUES('JADE PEKANS','OXFORD','1989-10-23',44,'Female',8);
INSERT INTO authors(author_name,university,date_of_birth,h_index,gender,mentor_id) VALUES('Fils AKIN','YALE','1989-10-23',44,'Female',7);
INSERT INTO authors(author_name,university,date_of_birth,h_index,gender,mentor_id) VALUES('ADELA SUCU','YALE','1989-10-23',60,'Female',1);
INSERT INTO authors(author_name,university,date_of_birth,h_index,gender,mentor_id) VALUES('Pekin YOLCU','STANFORD','1989-10-23',50,'Female',2);`
    + authorsPapersInsert;

connection.connect();
connection.query(createTables, function (error) {
    if (error) throw error;
    console.log('Tables created');
});
connection.query(insertRows, function (error) {
    if (error) throw error;
    console.log('New rows added');
});

connection.end();



