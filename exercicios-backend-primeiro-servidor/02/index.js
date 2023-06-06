const express = require("express");
const app = express();
const port = 8000;

let minutos = 0;
let segundos = 0;
let cronometro;

app.get("/", (req, res) => {
  res.send(
    `Tempo atual do cronômetro: ${minutos.toString().padStart(
      2,
      "0"
    )} minutos e ${segundos.toString().padStart(2, "0")} segundos`
  );
});

app.get("/iniciar", (req, res) => {
  cronometro = setInterval(() => {
    segundos++;
    if (segundos === 60) {
      minutos++;
      segundos = 0;
    }
  }, 1000);
  res.send("Cronômetro iniciado!");
});

app.get("/pausar", (req,res) => {

    clearInterval(cronometro);

    res.send("Cronômetro pausado!");
});

app.get("/continuar", (req,res) => {

    cronometro = setInterval(() => {
        segundos++;
        if (segundos === 60) {
          minutos++;
          segundos = 0;
        }
      }, 1000);

    res.send("Cronômetro continuando!");
})

app.get("/zerar", (req,res) => {
    
    minutos = 0;
    segundos = 0;

    res.send("Cronômetro zerado!");
})

app.listen(port);
