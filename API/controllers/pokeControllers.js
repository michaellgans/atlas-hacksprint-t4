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
  }
}

export default PokeController;
