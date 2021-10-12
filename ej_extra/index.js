const express = require("express");
const app = express();


let almacen = [
    {
        nombre: "fruteria",
        productos: [{
            prod: "fresas",
            precio: 1.2,
            stock: 200
        },
        {
            prod: "platanos",
            precio: 0.89,
            stock: 178
        },
        {
            prod: "aguacates",
            precio: 2.34,
            stock: 39
        }]
    },
    {
        nombre: "panaderia",
        productos: [{
            prod: "barra normal",
            precio: 0.45,
            stock: 300
        },
        {
            prod: "baguette",
            precio: 0.8,
            stock: 120
        },
        {
            prod: "pan de molde",
            precio: 1.23,
            stock: 120
        }]
    },
    {
        nombre: "pescaderia",
        productos: [{
            prod: "merluza",
            precio: 5.20,
            stock: 56
    },
    {
            prod: "boqueron",
            precio: 4.70,
            stock: 130
    },
    {
            prod: "rape",
            precio: 8.20,
            stock: 45
    }]
    },
    {
        nombre: "carniceria",
        productos: [{
            prod: "hamburguesa",
            precio: 2,
            stock: 150
    },
    {
        prod: "carrillera",
        precio: 3,
        stock: 98
    },
    {
        prod: "solomillo",
        precio: 6.70,
        stock: 144
    }],
    }
];


let cesta = "";

app.get("/inspeccionar/:dpto",function(req,res){
    let respuesta="";
    respuesta = req.params.dpto
    for(i=0;i<almacen.length;i++){
        if(almacen[i].nombre===respuesta){
            let show = "";
            show = almacen[i].productos //array fruteria p.e
            
            for(i=0;i<show.length;i++){
                let tabla = "";
                tabla += `
                <table>
                <tr>
                <td>${show[i].prod}</td>
                </tr>
                </table>
                ` 
            };
        }else{
            `<h2>La categoría que buscas no existe en el almacén</h2>`
        }
    }
    res.send(tabla)
    
})

app.listen(3008);