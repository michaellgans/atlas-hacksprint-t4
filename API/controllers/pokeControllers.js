// Controller for Pokemon Data
import Pokemon from '../../Utils/models/pokemon.js';
import mongoose from 'mongoose';

class PokeController {
  // Route Methods for Accessing Pokemon Data
  static async getPokemon(req, res) {
    // Retrieves All Pokemon Objects
    const pokemon = await Pokemon.find();
    res.status(200).send(pokemon);
  }

  static async getPokemonByName(req, res) {
    // Retrieves Pokemon Object by Name
    const name = req.params.name;
    const pokemon = await Pokemon.findOne({ pokeName: `${name}` });
    console.log(pokemon);
    console.log(name);
    res.status(200).send(pokemon);
  }
}

export default PokeController;
