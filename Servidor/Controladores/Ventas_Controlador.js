//Importar modelo(s)

const Ventas_Modelo = require("../Modelos/Ventas_Modelo");

class Ventas_Controlador{

    constructor(){
        
    }

    //--Función Base--//
    obtener(req, res){
        const nameModel = new Ventas_Modelo()

        nameModel.obtener()
        .then(result =>{
            res.send({
                'status':true,
                'msg' : "",
                "rest":result
            })
        })
        .catch(err=>{
            console.error("Error al...", err);
            res.status(500).send({
                'status':false,
                'msg' : "Error al [...] Intento más Tarde"
            })
        })
    }    

    //Más funciones aquí...

}


module.exports = Ventas_Controlador;