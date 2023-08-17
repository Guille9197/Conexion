const express = require('express');
const Controller = require('../Controladores/Citas_Controlador'); //Cambiar Ruta al Controlador correspondiente
const Citas_Rutas = express.Router();

//Importación del Controlador
const objController = new Controller()

// === EndPoints ===

Citas_Rutas.post('/agregando-cita', objController.agregar_cita)
Citas_Rutas.get('/consultando-cita/:id_cita', objController.consultar_cita)
Citas_Rutas.put('/modificando-cita', objController.modificar_cita)
Citas_Rutas.delete('/eliminando-cita/:id_cita', objController.eliminar_cita)

//Agregar más rutas....

// === Fin Endpoints ===

module.exports = Citas_Rutas;

