

const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
  
  nombre: {
    type: String,
    required: true
  },
  correo:{
    type: String,
    required: false
  },
  mensaje:{
    type: String,
    required: false
  }
});


const Correo = mongoose.model('Correo', correoSchema);
module.exports = Correo;