const express = require("express");
const app = express();

let array = ["Cris", "Antonio", "Alex", "Lola", "Jose"];

app.get("/personas", function (req, res) {
  let personas = "";
  for (i = 0; i < array.length; i++) {
    personas += `<li>${array[i]}</li>`;
  }

  res.send(personas);
});

app.get("/personas/:nombre", function (req, res) {
  let nombre = "";
  for (i = 0; i < array.length; i++) {
    if (req.params.nombre === array[i]) {
      nombre = `<h2>${array[i]}</h2>`;
      break;
    } else {
      nombre = `<h2>El nombre no es correcto</h2>`;
    }
  }
  res.send(nombre);
});

app.listen(3003);
