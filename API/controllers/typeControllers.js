// Controller for Type Data
import Type from '../../Utils/models/type.js';
import Pokemon from '../../Utils/models/pokemon.js';
import mongoose from 'mongoose';

class TypeController {
  // Route Methods for Accessing Type Data
  static async getTypes(req, res) {
    // Retrieves All Type Objects
    const types = await Type.find();
    res.status(200).send(types);
  }

  static async getTypeByName(req, res) {
    // Retrieves Type Object by Name
    const name = req.params.name;
    const type = await Type.findOne({ name: `${name}` });
    res.status(200).send(type);
  }

  static async getPokemonByType(req, res) {
    // Retrieves All Pokemon Objects of a Type
    const type = req.params.type;
    const pokeType = await Type.findOne({ name: `${type}` });
    const pokemonArray = await Pokemon.find({ pokeName: { $in: pokeType.pokemonList } });
    res.status(200).send(pokemonArray);
  }
}

export default TypeController;
