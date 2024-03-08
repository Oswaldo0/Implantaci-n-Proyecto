const mysql = require('mysql2');
const {promisify} = require('util');
const {database} = require('./keys');
const {CONSTANTS} = require('../utils/utils');

//Se crea un pool de conexiones
const pool = mysql.createPool(database); 

//Iniciamos la conexion con la base de datos
pool.getConnection((error, conexion)=>{
    //Validamos su la conexion tiene algun tipo de error
    if(error){
        //Validando codigos de errores comunes
        switch(error.code){
            case CONSTANTS.PROTOCOL_CONNECTION_LOST:
                //Conexion con la base de datos perdida
                console.error('DATABASE CONNECTION WAS CLOSED');
                break;
            //Indica que existen demasiadas conexiones
            case CONSTANTS.ER_CON_COUNT_ERROR:
                console.error('DATABASE HAS TO MANY CONNECTIONS');
                break;
            //Indica que la conexion fue rechazada
            case CONSTANTS.ECONNREFUSED:
                console.error('DATABASE CONNECTION WAS REFUSED');
                break;
            //Indica que el acceso esta denegado
            case CONSTANTS.ER_ACCESS_DENIED_ERROR:
                console.error('ACCESS DENIED FOR USER');
                break;
            default:
                console.error('ERROR DE BASE DE DATOS NO ENCONTRADA');
                break;
        }
    }
    //Si la conexión es exitosa, imprimir un mensaje indicandolo
    if(conexion){
        console.log('CONEXION ESTABLECIDA CON LA BASE DE DATOS');
        conexion.release();
    }

    return;
});

//configuramos PROMISTY para permitir en cada consulta un async/await (promesas)
pool.query = promisify(pool.query);
module.exports = pool;