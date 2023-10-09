


const express = require('express');
const router = express.Router();
const User = require('../model/model')
const bcrypt = require('bcrypt');




router.post('/register', async (req, res) => {
  try {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hashedPassword });
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      // El usuario ya existe, maneja este caso
      res.status(400).json({ error: 'El email ya está registrado' });
      return;
    } else{
      await user.save();
      res.status(201).json({ message: 'Usuario registrado exitosamente' });
    }
    



  } catch (error) {
    console.error('Error al registrar el usuario:', error);
    res.status(500).json({ error: 'Error al registrar el usuario' });
  }
});
  module.exports = router;