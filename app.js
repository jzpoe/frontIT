

const express = require('express');
const db = require('./src/mongoose/mongoose');
const port = process.env.PORT 
const login = require('./src/autenticate/auth');
const register = require('./src/register/register');
const item = require('./src/item/items')
const correo = require('./src/correo/correo')
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.use(login);
app.use(register);
app.use(item);
app.use(correo);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});