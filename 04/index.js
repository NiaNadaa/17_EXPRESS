const express = require("express");
const app = express();

let saludar = require("./index02");

app.get("/",function(req,res){
    res.send(saludar())
})

app.listen(3004);