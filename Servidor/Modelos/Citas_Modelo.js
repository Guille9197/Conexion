const connection = require("./conexion");

class Citas_Modelo{

    constructor(id_cita,id_usuario,tipoVehiculo,fecha,hora){
        this.id_cita = id_cita;
        this.id_usuario = id_usuario;
        this.tipoVehiculo = tipoVehiculo;
        this.fecha = fecha;
        this.hora = hora;

        //Más atributos aquí...
    }

    agregar_cita(){
        //Logica y Sentencia SQL para relizar x operación sobre los datos
        return new Promise((resolve, reject) => {
            let SentenciaSQL = `INSERT INTO citasautolavado(id_usuario,tipoVehiculo,fecha,hora) 
            VALUES (${parseInt(this.id_usuario)},"${this.tipoVehiculo}",'${this.fecha}','${this.hora}')`
            connection.query(`${SentenciaSQL}`, (err, rows) => {
                if (err || rows.length == 0) return reject(err)
                return resolve(rows)
            })
        })

    }

    consultar_cita(){
        //Logica y Sentencia SQL para relizar x operación sobre los datos
        return new Promise((resolve, reject) => {
            let SentenciaSQL = `SELECT * FROM citasautolavado WHERE id_cita = ${parseInt(this.id_cita)}`
            connection.query(`${SentenciaSQL}`, (err, rows) => {
                if (err || rows.length == 0) return reject(err)
                return resolve(rows)
            })
        })

    }

    modificar_cita(){
        //Logica y Sentencia SQL para relizar x operación sobre los datos
        return new Promise((resolve, reject) => {
            let SentenciaSQL = `UPDATE citasautolavado SET tipoVehiculo = "${this.tipoVehiculo}", 
            fecha = "${this.fecha}", hora = "${this.hora}" WHERE id_usuario = ${parseInt(this.id_usuario)}';`
            connection.query(`${SentenciaSQL}`, (err, rows) => {
                if (err || rows.length == 0) return reject(err)
                return resolve(rows)
            })
        })

    }



    //Más funciones aquí...(ESTOS SON DE EXPERIMENTO)------------------------------------------
    eliminar_cita(){
        //Logica y Sentencia SQL para relizar x operación sobre los datos
        return new Promise((resolve, reject) => {
            let SentenciaSQL = `DELETE FROM citasautolavado WHERE id_usuario = ${parseInt(this.id_usuario)} 
            AND tipoVehiculo = "${this.tipoVehiculo}" AND fecha = '${this.fecha}' AND hora = '${this.hora}';`
            connection.query(`${SentenciaSQL}`, (err, rows) => {
                if (err || rows.length == 0) return reject(err)
                return resolve(rows)
            })
        })



        
        

    }
    //-----------------------------------------------------------------------------------------

}




module.exports = Citas_Modelo;