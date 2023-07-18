const historial = require('../Modelos/historialVentas.model')


const controller = [];

controller.getHistorial = async (req, res) =>{    
    historial.getVentas()
    .then(result => {
        for(let i=0; i < result.autolavado.length; i++){
            const fecha = result.autolavado[i].fecha;
            const dia = fecha.getDate();
            const mes = fecha.getMonth() + 1;
            const año = fecha.getFullYear();
            result.autolavado[i].fecha = `${dia.toString().padStart(2, '0')}/${mes.toString().padStart(2, '0')}/${año}`;
        }
        for(let i=0; i < result.tienda.length; i++){
            const fecha = result.tienda[i].fecha;
            const dia = fecha.getDate();
            const mes = fecha.getMonth() + 1;
            const año = fecha.getFullYear();
            result.tienda[i].fecha = `${dia.toString().padStart(2, '0')}/${mes.toString().padStart(2, '0')}/${año}`;
        }
        res.render('historial', {vacio: false,autolavado : result.autolavado, tienda: result.tienda});
    })
    .catch(error => {
        console.log("Rejected:", error);
    });    
};

controller.getVenta = async (req, res) =>{
    const id = req.params.id;
    historial.getVentaById(id)
    .then(result => {
        const fechaA = result.autolavado[0].fecha;
        const diaA = fechaA.getDate();
        const mesA = fechaA.getMonth() + 1;
        const añoA = fechaA.getFullYear();
        result.autolavado[0].fecha = `${diaA.toString().padStart(2, '0')}/${mesA.toString().padStart(2, '0')}/${añoA}`;
            
        const fecha = result.tienda[0].fecha;
        const dia = fecha.getDate();
        const mes = fecha.getMonth() + 1;
        const año = fecha.getFullYear();
        result.tienda[0].fecha = `${dia.toString().padStart(2, '0')}/${mes.toString().padStart(2, '0')}/${año}`;
        
        res.render('historial', {vacio: false,autolavado : result.autolavado, tienda: result.tienda});
    })
    .catch(error => {
        console.log("Rejected:", error);
        res.render('historial', {vacio: true,autolavado : null, tienda: null});
    });  
};

controller.eliminar = async (req, res) =>{
    const id = req.params.id;
    historial.dropRow(id)
    .then(result =>{
        res.redirect('/lajoya/historial');
    })
    .catch(error =>{
        console.log(error);
        res.redirect('/lajoya/historial');
    })
};

controller.eliminarAL = async (req, res) =>{
    const id = req.params.id;
    historial.deleteAutolavado(id)
    .then(result =>{
        res.redirect('/lajoya/historial');
    })
    .catch(error =>{
        console.log(error);
        res.redirect('/lajoya/historial');
    })
};

controller.eliminarTi = async (req, res) =>{
    const id = req.params.id;
    historial.deleteTienda(id)
    .then(result =>{
        res.redirect('/lajoya/historial');
    })
    .catch(error =>{
        console.log(error);
        res.redirect('/lajoya/historial');
    })
};

module.exports = controller;