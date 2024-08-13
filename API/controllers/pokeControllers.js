// Controller for Pokemon Data
import Pokemon from '../../Utils/models/pokemon.js';
import mongoose from 'mongoose';
import pagination from '../../Utils/Helper_Functions/pagination.js';

class PokeController {
  // Route Methods for Accessing Pokemon Data
  static async getPokemon(req, res) {
    // Retrieves All Pokemon Objects
    const { page = 1, limit = 10 } = req.query;
    const pageData = pagination(page, limit);

    const pokemon = await Pokemon.find()
      .skip(pageData.skip)
      .limit(pageData.limit);
    res.status(200).send(pokemon);
  }

  static async getPokemonByName(req, res) {
    // Retrieves Pokemon Object by Name
    const name = req.params.name;
    const pokemon = await Pokemon.findOne({ pokeName: `${name}` });
    res.status(200).send(pokemon);
  }
}

export default PokeController;
