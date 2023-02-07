// All research papers and the number of authors that wrote that paper.
// Sum of the research papers published by all female authors.
// Average of the h-index of all authors per university.
// Sum of the research papers of the authors per university.
// Minimum and maximum of the h-index of all authors per university.
var mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword',
    database: 'research',
    multipleStatements: true
});

const authorNumber = `SELECT count(research_papers.paper_id) as 'Authors Number',research_papers.paper_title FROM authors_papers 
INNER JOIN authors on authors.author_id=authors_papers.author_id
INNER JOIN research_papers on research_papers.paper_id=authors_papers.paper_id
GROUP BY research_papers.paper_id;`;
const researchesFemaleAuthor = `SELECT count(authors_papers.paper_id) as 'Published by female authors' FROM authors_papers 
INNER JOIN authors on authors.author_id=authors_papers.author_id
where authors.gender='Female';`;
const averageHIndex = `SELECT AVG(h_index) as 'Average h-index',university FROM authors
GROUP BY university;`;
const paperPerUniversity = `SELECT count(authors_papers.paper_id) as 'Number of Paper ',university  FROM authors_papers 
INNER JOIN authors on authors.author_id=authors_papers.author_id
GROUP BY university;`;
const minMaxHIndex = `SELECT MIN(h_index) as 'Minimum h-index',MAX(h_index) as 'Maximum h-index',university FROM authors
GROUP BY university;`;

connection.connect();
connection.query(authorNumber, function (error,results) {
    if (error) throw error;
    console.log('All research papers and the number of authors that wrote that paper.');
    console.table(results);
});
connection.query(researchesFemaleAuthor, function (error,results) {
    if (error) throw error;
    console.log('Sum of the research papers published by all female authors.');
    console.table(results);
});
connection.query(averageHIndex, function (error,results) {
    if (error) throw error;
    console.log('Average of the h-index of all authors per university.');
    console.table(results);
});
connection.query(paperPerUniversity, function (error,results) {
    if (error) throw error;
    console.log('Sum of the research papers of the authors per university.');
    console.table(results);
});
connection.query(minMaxHIndex, function (error,results) {
    if (error) throw error;
    console.log('Minimum and maximum of the h-index of all authors per university.');
    console.table(results);
});

connection.end();



