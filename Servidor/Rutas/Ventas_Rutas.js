const express = require('express');
const Ventas_Controlador = require('../Controladores/Ventas_Controlador');
const VentasRouter = express.Router();

//Importación del Controlador
const objVentas_Controlador = new Ventas_Controlador()

// === Rutas para autenticación de usuarios (login, logout...) ===
VentasRouter.get('/obtener', objVentas_Controlador.obtener)
//VentasRouter.post('/agregar', Ventas_Controlador.login)
//VentasRouter.put('/actualizar', Ventas_Controlador.login)
//VentasRouter.delete('/eliminar', AuthController.login)


//Agregar más rutas....

// === Fin Rutas para autenticación de usuarios (login, logout...) ===

module.exports = VentasRouter;
