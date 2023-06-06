const {listarPokemons, detalharPokemon} = require("utils-playground");

const listagemPokemons = async (req, res) => {

    try{
        const pokemons = await listarPokemons();
        res.status(200).send(pokemons.results);
    } catch(error) {
        res.status(500).send(`Ocorreu um erro: ${error.message}`);
    }

}

const detalhaPokemon = async (req, res) => {
    const { id } = req.params;

    const idNumber = Number(id)

    try {
        const pokemon = await detalharPokemon(idNumber);
        
        const mensagem = {
            id: pokemon.id,
            name: pokemon.name,
            height: pokemon.height,
            weight: pokemon.weight,
            base_experience: pokemon.base_experience,
            forms: pokemon.forms,
            abilities: pokemon.abilities,
            species: pokemon.species
        }

        res.status(200).send(mensagem);
    } catch(error) {
        res.status(500).send(`Ocorreu um erro: ${error.message}`);
    }

    
}

module.exports = {
    listagemPokemons,
    detalhaPokemon
}