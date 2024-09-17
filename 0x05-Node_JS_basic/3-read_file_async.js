#!/usr/bin/node
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
      } else {
        let lines = data.split('\n').filter((line) => line.trim() !== '');
        lines = lines.slice(1);
        console.log(`Number of students: ${lines.length}`);

        const fields = {};
        for (const line of lines) {
          const [firstname, lastname, age, field] = line.split(',');
          if (field) {
            if (!fields[field]) fields[field] = [];
            fields[field].push(firstname);
          }
        }
        for (const [field, students] of Object.entries(fields)) {
          console.log(
            `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`
          );
        }
        resolve();
      }
    });
  });
}

module.exports = countStudents;
