const express = require('express');
const app = express()

// === IMPORTACIÓN DE RUTAS ===
// Aquí se importan las rutas de la carpeta ./routes 

const authRouter = require('./Rutas/authRoutes');
const VentasRouter = require('./Rutas/Ventas_Rutas')
const Citas_Rutas = require('./Rutas/Citas_Rutas')
<<<<<<< HEAD
const InicioSesion_Rutas = require ('./Rutas/InicioSesion_Rutas')
=======
<<<<<<< HEAD

const Usuario_Rutas = require('./Rutas/Usuario_Rutas')
=======
const Inventario_Rutas = require('./Rutas/Inventario_Rutas')
const VentasAutolavado_Rutas = require('./Rutas/VentasAutolavado_Rutas')
>>>>>>> 6e71fba5470ed99a2fcc9518f0a1e7be66841ef5
>>>>>>> f34ef78cba35cb5d8a12a65e6c625cffadb61064
// === FIN IMPORTACIÓN DE RUTAS ===


app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// === RUTAS ===

// Aquí se definen las rutas del servidor

app.use(authRouter)
app.use(VentasRouter)
app.use(Citas_Rutas)
<<<<<<< HEAD
app.use(InicioSesion_Rutas)
=======
<<<<<<< HEAD

app.use(Usuario_Rutas)
=======
app.use(Inventario_Rutas)
app.use(VentasAutolavado_Rutas)
>>>>>>> 6e71fba5470ed99a2fcc9518f0a1e7be66841ef5
>>>>>>> f34ef78cba35cb5d8a12a65e6c625cffadb61064
// Otras rutas...

// === FIN DE RUTAS ===


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Error del servidor');
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});