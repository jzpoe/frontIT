

const mongoose = require('mongoose');
require("dotenv").config({ path: "./.env" });

const uri = process.env.URI

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

console.log("Connect a la base de datos...")









