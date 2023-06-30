class Ventas_Modelo{

    constructor(id_ventaTienda,id_usuario,fecha,articulo,cantidad,costo){
        this.id_ventaTienda = id_ventaTienda;
        this.id_usuario = id_usuario;
        this.fecha = fecha;
        this.articulo = articulo;
        this.cantidad = cantidad;
        this.costo = costo;

        //Más atributos aquí...
    }

    obtener(){

        console.log("Obtener Ventas")
        //Logica y Sentencia SQL para relizar x operación sobre los datos
        return new Promise((resolve, reject) => {
            let SentenciaSQL = `select * from ventastienda`
            connection.query(`${SentenciaSQL}`, (err, rows) => {
                if (err || rows.length == 0) return reject(err)
                return resolve(rows)
            })
        })

    }

    //Más funciones aquí...

}


module.exports = Ventas_Modelo;