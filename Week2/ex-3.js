var mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword',
    database: 'research',
    multipleStatements: true
});

const authorMentorJoin = ` SELECT author.author_name as 'Author',mentor.author_name as 'Mentor' FROM authors AS author
inner join authors as mentor on author.mentor_id=mentor.author_id;`;
const authorPaperJoin = ` SELECT a.*,rp.paper_title FROM authors as a
LEFT JOIN authors_papers as ap on a.author_id=ap.author_id
LEFT JOIN research_papers as rp on rp.paper_id=ap.paper_id;`;

connection.connect();
connection.query(authorMentorJoin, function (error,results) {
    if (error) throw error;
    console.log('Query executed');
    console.table(results);
});
connection.query(authorPaperJoin, function (error,results) {
    if (error) throw error;
    console.log('Query executed');
    console.table(results);
});

connection.end();



