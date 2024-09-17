#!/usr/bin/node
const http = require('http');
const fs = require('fs');

const app = http.createServer((req, res) => {
  const url = req.url;

  if (url === '/') {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello Holberton School!');
  } else if (url === '/students') {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('This is the list of our students\n');

    const db = process.argv[2];
    fs.readFile(db, 'utf8', (err, data) => {
      if (err) {
        res.end('Cannot load the database');
      } else {
        let lines = data.split('\n').filter((line) => line.trim() !== '');
        lines = lines.slice(1);
        res.write(`Number of students: ${lines.length}\n`);

        const fields = {};
        for (const line of lines) {
          const [firstname, lastname, age, field] = line.split(',');
          if (field) {
            if (!fields[field]) fields[field] = [];
            fields[field].push(firstname);
          }
        }
        for (const [field, students] of Object.entries(fields)) {
          res.write(
            `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`
          );
        }
        res.end();
      }
    });
  } else {
    res.writeHead(404);
    res.end();
  }
});

app.listen(1245);

module.exports = app;
