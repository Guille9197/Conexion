const express = require('express');
const Controller = require('../Controladores/Citas_Controlador'); //Cambiar Ruta al Controlador correspondiente
const Citas_Rutas = express.Router();

//Importación del Controlador
const objController = new Controller()

// === EndPoints ===

Citas_Rutas.post('/agregando-cita', objController.agregar_cita)
//nameRouter.get('/...', objController.fun2)
//nameRouter.put('/...', objController.fun1)
//nameRouter.delete('/...', objController.fun2)

//Agregar más rutas....

// === Fin Endpoints ===

module.exports = Citas_Rutas;

