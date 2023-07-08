const express = require('express');
const app = express()

// === IMPORTACIÓN DE RUTAS ===
// Aquí se importan las rutas de la carpeta ./routes 

const authRouter = require('./Rutas/authRoutes');
const VentasRouter = require('./Rutas/Ventas_Rutas')
const Citas_Rutas = require('./Rutas/Citas_Rutas')
const Inventario_Rutas = require('./Rutas/Inventario_Rutas')
const VentasAutolavado_Rutas = require('./Rutas/VentasAutolavado_Rutas')
// === FIN IMPORTACIÓN DE RUTAS ===


app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// === RUTAS ===

// Aquí se definen las rutas del servidor

app.use(authRouter)
app.use(VentasRouter)
app.use(Citas_Rutas)
app.use(Inventario_Rutas)
app.use(VentasAutolavado_Rutas)
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