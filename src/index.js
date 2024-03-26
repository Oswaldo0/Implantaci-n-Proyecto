//En este archivo es donde nosotros arrancamos nuestra aplicación 
const express = require('express');
const morgan = require('morgan');
//Necesario para utilizar el motor de plantillas handlbars
const exphbs = require('express-handlebars'); 
const path = require('path');
require('dotenv').config()

//Inicializaciones
const app = express();

//Ajustes del servidor
app.set('port', process.env.PORT || 4500);

//Configuración de la ruta donde se encuentran las vistas
app.set('views', path.join(__dirname, 'views'));

app.engine('.hbs', exphbs.engine({
    //Configuración del layout principal
    defaultLayout: 'main',
    //Configura la ruta de los layouts
    layoutsDir:path.join(app.get('views'), 'layouts'),
    //Configura la extensión que tendrán los archivos Handlebars
    extname: '.hbs'
}));

//Configuración para ejecutar el motor de plantillas 
app.set('view engine', '.hbs');

//Configurando el middleware morgan para visualizar que esta llegando al servidor
app.use(morgan('dev'));

//Sirve para poder aceptar datos desde el formulario
app.use(express.urlencoded({extended:false}));

//Configuracion de rutas
app.use(require('./routes')); //Node automaticamente busca el index.js del modulo

//Configuración de rutas para estudiantes
app.use('/estudiantes',require('./routes/estudiantes'));

//Archivos públicos (acá se coloca todo el código al cual el navegador puede acceder)
app.use(express.static(path.join(__dirname,'public')));

//Iniciar el servidor
app.listen(app.get('port'),() =>{
    console.log('Servidor iniciado en el puerto: ', app.get('port'));
})