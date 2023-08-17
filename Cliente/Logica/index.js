

let user = document.getElementById("user")
let password = document.getElementById("password")
let ingresar = document.getElementById("ingresar")
let registrarme = document.getElementById("registrarme")

ingresar.addEventListener("click",(e)=>{
    fetch(`http://localhost:5000/iniciando-sesion/${user.value}/${password.value}`)
    .then(rest=>rest.ok?rest.json():Promise.reject(rest))
    .then(json=>{
        console.log("Se conecto con el Servidor",json)
<<<<<<< HEAD
        location.href="/Cliente/Vistas/menu.html"
=======
        location.href="/Conexion/Cliente/Vistas/menu.html"
>>>>>>> 498fd835fd4f73e5d06cac7e3dfb1f92e7ad35df
    })
    .catch(error=>{
        console.log("Error con el Servidor")
    })
})

registrarme.addEventListener("click",(e)=>{
    location.href="/Conexion/Cliente/Vistas/registro.html"
})