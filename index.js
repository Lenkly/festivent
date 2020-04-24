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
server.listen(4000, () => {
  console.log('JSON Server is running');
});

// const express = require('express');
// const path = require('path');
// const app = express();
// const port = process.env.PORT || 8080;

// app.use(express.static(path.join(__dirname, 'client/build')));
// app.get('*', (require, response) => {
//   response.sendFile(path.join(__dirname, 'client/build/index.html'));
// });

// app.listen(port, () => {
//   console.log('Server is running');
// });
