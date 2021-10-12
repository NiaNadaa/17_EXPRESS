const express = require("express");
const app = express();

let funciones = require("./modulos"); //contiene random() y array

app.get("/",function(req,res){
    let num = funciones.random();
    funciones.array[num]=funciones.array[num]+1;
    res.send(funciones.array)
})

app.get("/borrar/:numero",function(req,res){
    let num = req.params.numero;
    funciones.array[num]=0;
    res.send(funciones.array) 
})

app.listen(3007);