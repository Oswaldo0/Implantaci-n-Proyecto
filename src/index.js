//En este archivo es donde nosotros arrancamos nuestra aplicación 
const express = require('express');

require('dotenv').config()

//Inicializaciones
const app = express();

//Ajustes del servidor
app.set('port', process.env.PORT || 4500);

//Configuracion de rutas
app.use(require('./routes')); //Node automaticamente busca el index.js del modulo

//Iniciar el servidor
app.listen(app.get('port'),() =>{
    console.log('Servidor iniciado en el puerto: ', app.get('port'));
})