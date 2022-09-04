require('dotenv').config();
const path = require('path');

const fs = require('fs');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const userdb = JSON.parse(fs.readFileSync('db.json', 'UTF-8'));

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(jsonServer.defaults());

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
  return userdb.users.findIndex(
    (user) =>
      user.userEmail === email && (user.userPassword === password) !== -1
  );
}

//TODO this part needs to be checked again

//Register new User

server.post('/auth/register', (req, res) => {
  console.log('register endpoint called; request body:');
  console.log(req.body);
  const { email, password } = req.body;

  if (isAuthenticated({ email, password }) === true) {
    const status = 401;
    const message = 'Email and Password already exist';
    res.status(status).json({ status, message });
    return;
  }

  fs.readFile('./users.json', (err, data) => {
    if (err) {
      const status = 401;
      const message = err;
      res.status(status).json({ status, message });
      return;
    }

    // Get current users data
    const userData = JSON.parse(data.toString());

    const last_item_id = userData.users[userData.users.length - 1].id;

    //Add new user
    userData.users.push({
      id: last_item_id + 1,
      email: email,
      password: password,
    }); //add some data
    fs.writeFile('./users.json', JSON.stringify(data), (err, res) => {
      if (err) {
        const status = 401;
        const message = err;
        res.status(status).json({ status, message });
        return;
      }
    });
  });

  const access_token = createToken({ email, password });
  console.log('Access Token:' + access_token);
  res.status(200).json({ access_token });
});

// Login User

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

  let verifyTokenResult;
  try {
    verifyTokenResult = verifyToken(req.headers.authorization.split(' ')[1]);
    if (verifyTokenResult instanceof Error) {
      throw verifyTokenResult;
    }
    next();
  } catch (err) {
    const status = 401;
    const message = 'Error: access_token not valid';
    res.status(status).json({ status, message });
  }
});
