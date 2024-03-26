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
    },
    //Eliminar un estudiante
    eliminarEstudiante: async(idestudiante) =>{
        try{
            const result = await pool.query('DELETE FROM estudiante WHERE idestudiante = ?'[idestudiante]);
            return result.affectedRows >0;
        }catch(error){
            console.error('Error al eliminar el registro', error);
        }
    },
    insertarEstudiante:async(idestudiante,nombre,apellido,email,idcarrera,usuario)=>{
        try{
            const result = await pool.query('INSERT INTO estudiantes(idestudiante, nombre,apellido,email,idcarrera,usuario) VALUES (?,?,?,?,?,?)');
            return result.affectedRows >0;
        }catch(error){
            console.error('Error al insertar los estudiantes', error);
        }
    },
    actulizarEstudiantes: async(idestudiante)=>{
        try{
            const result = await pool.query('UPDATE estudiantes SET nombre=?, apellido= ?, email= ?, idcarrera=?, usuario=? WHERE idestudiante= ?');
            return result.affectedRows >0;
        }catch(error){
            console.error('Error al actulizar los estudiantes',error);
        }
    }
}