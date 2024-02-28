#!/usr/bin/node
const http = require('http');
const fs = require('fs');

function countStudents(path, res) {
  const promise = new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, d) => {
      if (err) {
        reject(Error('Cannot load the database'));
        return;
      }
      const data = d.split('\n');
      const departs = {};
      let num = 0;
      data.forEach((row) => {
        const cols = row.split(',');
        if (cols.length === 4) {
          const dep = cols[3];
          const name = cols[0];
          if (departs[dep] === undefined) {
            departs[dep] = [name];
          } else {
            departs[dep].push(name);
          }
          num += 1;
        }
      });
      delete departs.field;
      num -= 1;
      res.write(`Number of students: ${num}\n`);
      let len = Object.keys(departs).length;
      for (const [key, value] of Object.entries(departs)) {
        let cont = `Number of students in ${key}: ${value.length}. List: ${value.join(', ')}`;
        if (len !== 1) {
          cont += '\n';
        }
        len -= 1;
        res.write(cont);
      }
      resolve();
    });
  });
  return promise;
}

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(process.argv[2], res).then(() => {
      res.end();
    }).catch((err) => {
      res.end(err.message);
    });
  }
});

app.listen(1245);
module.exports = app;
