const express = require('express');
const app     = require('../server');
const http    = require('http');

const server = http.createServer(app);

const port = process.env.APP_PORT || 3000;

server.listen(port);
server.on('listening', () => 
  console.log(`Server listening on port ${port}`)
);
