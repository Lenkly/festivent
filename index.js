require('dotenv').config();
const path = require('path');

const fs = require('fs');
const jwt = require('jsonwebtoken');

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const userdb = JSON.parse(fs.readFileSync('db.json', 'UTF-8'));

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

const port = process.env.PORT || 3001;

server.post(
  '/api/uploads',
  upload.single('avatar'),
  async (request, response) => {
    try {
      const dataUriFile = toDataUri(request.file);
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

const SECRET_KEY = '123456789';
const expiresIn = '1h';

function createToken(payload) {
  return jwt.sign(payload, SECRET_KEY, { expiresIn });
}

function verifyToken(token) {
  return jwt.verify(token, SECRET_KEY, (err, decode) =>
    decode !== undefined ? decode : err
  );
}

function isAuthenticated({ email, password }) {
  return (
    userdb.users.findIndex(
      (user) => user.userEmail === email && user.userPassword === password
    ) !== -1
  );
}

server.post('/auth/login', (req, res) => {
  const { email, password } = req.body;
  if (isAuthenticated({ email, password }) === false) {
    const status = 401;
    const message = 'Incorrect email or password';
    res.status(status).json({ status, message });
    return;
  }
  const access_token = createToken({ email, password });
  res.status(200).json({ access_token });
});

server.use(/^(?!\/auth).*$/, (req, res, next) => {
  if (
    req.headers.authorization === undefined ||
    req.headers.authorization.split(' ')[0] !== 'Bearer'
  ) {
    const status = 401;
    const message = 'Bad authorization header';
    res.status(status).json({ status, message });
    return;
  }
  try {
    verifyToken(req.headers.authorization.split(' ')[1]);
    next();
  } catch (err) {
    const status = 401;
    const message = 'Error: access_token not valid';
    res.status(status).json({ status, message });
  }
});
