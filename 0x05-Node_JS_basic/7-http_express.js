#!/usr/bin/node
const express = require('express');
const { countStudents } = require('./3-read_file_async');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  res.write('This is the list of our students\n');
  try {
    const data = await countStudents(process.argv[2]);
    res.end(data);
  } catch (error) {
    res.end(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

module.exports = app;
