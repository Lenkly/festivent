const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(
  jsonServer.rewriter({
    '/api/*': '/$1',
  })
);
server.use(middlewares);
server.use(router);
server.listen(8080, () => {
  console.log('JSON Server is running');
});

// const express = require('express');
// const path = require('path');
// const server = express();
// const port = process.env.PORT || 8080;

// server.use(express.static(path.join(__dirname, 'client/build')));
// server.get('*', (require, response) => {
//   response.sendFile(path.join(__dirname, 'client/build/index.html'));
// });

// server.listen(port, () => {
//   console.log('Server is running');
// });
