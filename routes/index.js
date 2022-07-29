var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
  });
});

router.post('/', async function (req, res, next) {
  // console.log(req.body);
  var nombre = req.body.nombre;
  var apellido = req.body.apellido;
  var email = req.body.email;
  var telefono = req.body.telefono;
  var mensaje = req.body.mensaje; 
  

  var obj = {
    to: 'leandrovaldez99@yahoo.com.ar',
    subject: 'contacto desde la pagina web',
    html: nombre + apellido + ", tel: " + telefono + ", email:" + email + " , se contacto a traves de la web y dejo el siguiente mensaje: " + mensaje + "."
  }

  var transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    }
}) // finaliza el transport


  var info = await transport.sendMail(obj);

  res.render('index', {
    message: 'Mensaje enviado correctamente',
  });

})

module.exports = router;
