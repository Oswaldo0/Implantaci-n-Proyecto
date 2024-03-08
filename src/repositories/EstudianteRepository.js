const pool = require('../config/databaseController');

module.exports = {

    //Consulta para obtener todos los estudiantes
    obtenerTodosLosEstudiantes: async() =>{
        try{
            const result = await pool.query('SELECT * FROM estudiantes');
            return result;
        }catch(error){
            console.error('OCURRIO UN PROBLEMA AL CONSULTAR LA LISTA DE ESTUDIANTES: ',error);
        }
    }
}