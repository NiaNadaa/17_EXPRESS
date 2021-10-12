const express = require("express");
const app = express();

let array = ["Edgardo", "Guille", "Jessica", "Neus", "Nuria", "Cristina", "Carlos", "Silvia"];

app.get("/add/:profesor",function(req,res){
    array.push(req.params.profesor);
    let respuesta = "";
    for(i=0;i<array.length;i++){
        respuesta += `<ul>${array[i]}</ul>`
    }
    res.send(respuesta)
})


app.listen(3006);