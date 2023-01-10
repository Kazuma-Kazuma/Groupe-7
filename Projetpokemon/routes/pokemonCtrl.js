const { Router } = require("express");
const { Pokemon } = require("../models");
const router = new Router();
const route_path = "/pokemonCtrl"; 


router.get(route_path, (req, res) => {
    res.send("Pokédex");
});

router.get(route_path + "/:id", async (req, res) => {
    
    const pokemon = await Pokemon.findByPk(parseInt(req.params.id));

    if (pokemon) {
        res.type('json').send(JSON.stringify(pokemon, null, 2) + '\n');
    } else {
        res.sendStatus(404);
    }
})


router.get(route_path + "s", async (req, res) => {
    const pokemons = await Pokemon.findAll();

    if (pokemons) {
        res.type('json').send(JSON.stringify(pokemons, null, 2) + '\n');
    } else {
        res.sendStatus(404);
    }
})
