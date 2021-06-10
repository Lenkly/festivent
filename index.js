require('dotenv').config();
const path = require('path');
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const cloudinary = require('cloudinary').v2;
const multer = require('multer');
const Datauri = require('datauri/parser');

const middlewares = jsonServer.defaults({
  static: path.join(__dirname, 'client/build'),
});

const upload = multer();

function toDataUri(file) {
  const dataUri = new Datauri();
  return dataUri.format(path.extname(file.originalname).toString(), file.buffer)
    .content;
}

const port = process.env.PORT || 8080;

server.post(
  '/api/uploads',
  upload.single('avatar'),
  async (request, response) => {
    try {
      const dataUriFile = toDataUri(request.file);
      console.log(dataUriFile);
      const result = await cloudinary.uploader.upload(dataUriFile);
      response.json(result);
    } catch (error) {
      console.log(error);
      response.status(500).send(error.message);
    }
  }
);

server.use(middlewares);
server.use('/api', router);
server.get('*', (require, response) => {
  response.sendFile(path.join(__dirname, 'client/build', '/index.html'));
});
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
