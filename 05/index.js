const express = require("express");
const app = express();

let objeto = {
    nombre: "Cristina",
    apellidos: "Algar",
    edad: 32
};
// CAMBIAR NOMBRE
app.get("/nombre/:nombre", function(req,res){
    objeto.nombre=req.params.nombre
    res.send(`<p>${objeto.nombre}</p>
    <p>${objeto.apellidos}</p>
    <p>${objeto.edad}</p>
    `)
})
//CAMBIAR APELLIDO
app.get("/apellidos/:apellidos", function(req,res){
    objeto.apellidos=req.params.apellidos
    res.send(`<p>${objeto.nombre}</p>
    <p>${objeto.apellidos}</p>
    <p>${objeto.edad}</p>
    `)
})
//CAMBIAR EDAD
app.get("/edad/:edad", function(req,res){
    objeto.edad=req.params.edad
    res.send(`<p>${objeto.nombre}</p>
    <p>${objeto.apellidos}</p>
    <p>${objeto.edad}</p>
    `)
})

app.listen(3005);