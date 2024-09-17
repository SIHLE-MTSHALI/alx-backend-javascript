#!/usr/bin/node
const express = require('express');
const fs = require('fs');

const app = express();

function countStudents(res, path) {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Cannot load the database');
    } else {
      let lines = data.split('\n').filter((line) => line.trim() !== '');
      lines = lines.slice(1);
      let responseText = `This is the list of our students\n`;
      responseText += `Number of students: ${lines.length}\n`;

      const fields = {};
      for (const line of lines) {
        const [firstname, lastname, age, field] = line.split(',');
        if (field) {
          if (!fields[field]) fields[field] = [];
          fields[field].push(firstname);
        }
      }
      for (const [field, students] of Object.entries(fields)) {
        responseText += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
      }
      res.send(responseText.trim());
    }
  });
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const db = process.argv[2];
  countStudents(res, db);
});

app.listen(1245);

module.exports = app;
