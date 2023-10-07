const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = require('../register/register');
const User = require('../model/model')



router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      res.status(401).json({ error: 'Usuario no encontrado' });
      return;
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      res.status(401).json({ error: 'Contraseña incorrecta' });
      return;
    }
      
    

    const token = jwt.sign({ userId: user._id }, 'secreto', { expiresIn: '1h' });

    res.json({ 
      message: 'bienvenido',
      token });
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    res.status(500).json({ error: 'Error al iniciar sesión' });
  }
});


module.exports = router