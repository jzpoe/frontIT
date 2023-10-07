

const express = require('express')
const router = express.Router()
const nodemailer = require('nodemailer'); 

router.use(express.json());

router.post('/enviar/correo/',  (req, res)=>{

  const {nombre, correo, mensaje} = req.body
  
  
  const transporter = nodemailer.createTransporter({
    service :'Gmail',
    auth:{
        user: 'pmguez1287@gmail.com',
        pass: 'ellionpuma1987'
    }
  })


// Define el correo electrónico a enviar
const mailOptions ={
    from: 'pmguez1287@gmail.com',
    to:  correo,
    subject: 'Registro de ticket',
    text: `Nombre: ${nombre}\nCorreo: ${correo}\nMensaje: ${mensaje}`
}

  // Envía el correo electrónico

  transporter.sendMail(mailOptions,(error, info)=>{
    if (error) {
        console.error(error);
        res.status(500).send('Error al enviar el correo electrónico');
      } else {
        console.log('Correo electrónico enviado: ' + info.response);
        res.status(200).send('Correo electrónico enviado con éxito');
      }
  })

})

  module.exports = router;