const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
      } else {
        const lines = data.split('\n').filter((line) => line.trim() !== '');
        if (lines.length === 0) {
          reject(Error('Cannot load the database'));
        } else {
          const students = lines.slice(1);
          console.log(`Number of students: ${students.length}`);

          const fields = {};
          for (const line of students) {
            const [firstname, lastname, age, field] = line.split(',');
            if (field) {
              if (!fields[field]) fields[field] = [];
              fields[field].push(firstname);
            }
          }
          for (const [field, group] of Object.entries(fields)) {
            console.log(`Number of students in ${field}: ${group.length}. List: ${group.join(', ')}`);
          }
          resolve();
        }
      }
    });
  });
}

module.exports = countStudents;
