const express = require("express");

const app = express();


app.get("/",function(req,res){
    res.send("hola");    //esto es lo q hace en la respuesta. hace un get a "/" , raíz, y la respuesta es "hola"
    //puede ser res.send("<h1>Hola</h1>") <- o sea q accedes a DOM?
})
//parar y arrancar servidor cada vez q cambien algo. ctrl+c y node ej.js

app.get("/patata", function(req,res){
    res.send("estás en patata")
})
//podrías acceder a http://localhost:3000/patata

app.listen(3000);