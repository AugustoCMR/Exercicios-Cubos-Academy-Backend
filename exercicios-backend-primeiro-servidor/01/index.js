const express = require("express");
const app = express();

let i = 0;

app.get("/", (req, res) => {

    const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
    res.send(`É a vez de ${jogadores[i]} jogar!`);

    i++;

     if(i > jogadores.length - 1) {
        i = 0;
     }

    
});

app.listen(3000);
