var mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword',
    database: 'research',
    multipleStatements: true
});

const authorsData = require("./MyData/authors.json");
const researchPapersData = require("./MyData/research_papers.json");
const authorPapersData = require("./MyData/author_papers.json");


let authorsInsert = '';
let researchPapersInsert = '';
let authorsPapersInsert = '';

authorsData.forEach(author=>{
    authorsInsert+=`INSERT INTO authors(author_name,university,date_of_birth,h_index,gender,mentor_id) VALUES('${author.author_name}','${author.university}','${author.date_of_birth}',${author.h_index},'${author.gender}',${author.mentor_id});`
});

researchPapersData.forEach(researchPaper=>{
    researchPapersInsert+=`INSERT INTO research_papers(paper_title,conference,publish_date) VALUES('${researchPaper.paper_title}','${researchPaper.conference}','${researchPaper.publish_date}');`
});

authorPapersData.forEach(authorPaper=>{
    authorsPapersInsert+=`INSERT INTO authors_papers(paper_id,author_id) VALUES(${authorPaper.paper_id},${authorPaper.author_id});`
});

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

connection.connect();
connection.query(createTables, function (error) {
    if (error) throw error;
    console.log('Tables created');
});
connection.query(authorsInsert+researchPapersInsert+authorsPapersInsert, function (error) {
    if (error) throw error;
    console.log('New rows added');
});

connection.end();



