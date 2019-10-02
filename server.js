const express   = require('express');
const helmet    = require('helmet');
const mysql     = require('mysql');

// const config     = require('./config');
const server     = express();
const api        = require('./routes/api');

server.use(helmet());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'db_sumat'
});

db.connect( err => {
  if (err) return `Error: ${err}`;
  console.log('Connection stablished');
})

server.use('/api/', api);

// server.listen(config.PORT, () => {
//   console.log(`...Starting server in ${config.NODE_ENV} mode...`);
  
//   // if (config.NODE_ENV === 'production') {
//   //   console.log("...Serving static files from 'frontend/build'...");
//   //   server.use(express.static('frontend/build'));
//   // }

//   console.log(`...Listening on port ${config.PORT}...`);
// });

server.listen(4000, () => console.log(`...Listening on port 4000...`))
