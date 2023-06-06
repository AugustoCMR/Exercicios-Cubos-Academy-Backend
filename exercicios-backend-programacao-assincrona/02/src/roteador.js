const express = require("express");
const router = express.Router();
const {listagemPokemons, detalhaPokemon} = require("./controladores/pokemon");

router.get("/pokemon", listagemPokemons);
router.get("/pokemon/:id", detalhaPokemon);

module.exports = router;