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
            let SentenciaSQL = `INSERT INTO citasautolavado(id_usuario,tipoVehiculo,fecha,hora) VALUES (${this.id_usuario},${this.tipoVehiculo},${this.fecha},${this.hora})`
            connection.query(`${SentenciaSQL}`, (err, rows) => {
                if (err || rows.length == 0) return reject(err)
                return resolve(rows)
            })
        })

    }

    //Más funciones aquí...

}


module.exports = Citas_Modelo;