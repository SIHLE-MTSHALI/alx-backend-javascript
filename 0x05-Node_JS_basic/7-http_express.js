const express = require('express');
const fs = require('fs');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const db = process.argv[2];
  res.write('This is the list of our students\n');

  fs.readFile(db, 'utf8', (err, data) => {
    if (err) {
      res.end('Cannot load the database');
    } else {
      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const students = lines.slice(1);
      res.write(`Number of students: ${students.length}\n`);

      const fields = {};
      for (const line of students) {
        const [firstname, lastname, age, field] = line.split(',');
        if (field) {
          if (!fields[field]) fields[field] = [];
          fields[field].push(firstname);
        }
      }
      for (const [field, group] of Object.entries(fields)) {
        res.write(`Number of students in ${field}: ${group.length}. List: ${group.join(', ')}\n`);
      }
      res.end();
    }
  });
});

app.listen(1245);

module.exports = app;
