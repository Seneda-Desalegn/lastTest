const express = require('express');
// const sqlite3 = require('sqlite3');
// const bodyParser = require('body-parser');
// const cors = require('cors');

const app = express();
const port = 3000;

// app.use(cors()); 
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// const db = new sqlite3.Database('score_table.db');
// db.run('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT, score INTEGER)');
console.log("hello world welcome");
app.get('/', (req, res) => {
  res.send("hello world");
});


// app.post('/save-score', (req, res) => {
//   const name = req.body.username;
//   const score = req.body.score;

//   console.log(`name: ${name}, score: ${score}`);

//   const insertQuery = 'INSERT INTO users (name, score) VALUES (?, ?)';
//   db.run(insertQuery, [name, score], (err) => {
//       if (err) {
//           res.status(500).send('Error saving user data');
//         } else {
//             res.send('Score and Username saved to the database.');
//         }
//     });
// });

// app.get('/getUserData', (req, res) => {
//   const query = 'SELECT * FROM users';
//   db.all(query, (err, rows) => {
//     if (err) {
//       res.status(500).send('Error fetching score table');
//     } else {
//       res.json(rows);
//     }
//   });
// });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


