// Este archivo será utilizado para configurar todas las rutas principales del sistema

const express = require('express');
const router = express.Router();
const estudianteRepository = require('../repositories/EstudianteRepository');

//Configuracion de ruta inicial de la aplicacion
router.get('/', async(request, response) => {
    //Probando conexion con la base de datos
    const lstEstudiantes = await estudianteRepository.obtenerTodosLosEstudiantes();
    console.log('Listado: ', lstEstudiantes);
    response.send('Bienvenido')
});

module.exports = router;