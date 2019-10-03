const express   = require('express');
const helmet    = require('helmet');
const mysql     = require('mysql');
const dotenv    = require('dotenv');

const config     = require('../config');
const server     = express();
const api        = require('../routes/api');

server.use(helmet());

const db = mysql.createConnection(config.db); 

db.connect( err => {
  if (err) return `Error: ${err}`;
  console.log('Database connection stablished');
});

db.end();

server.use('/api/', api);
