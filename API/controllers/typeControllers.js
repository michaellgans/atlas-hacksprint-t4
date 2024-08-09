// Controller for Type Data
import Type from '../../Utils/models/type.js';
import Pokemon from '../../Utils/models/pokemon.js';
import mongoose from 'mongoose';

class TypeController {
  // Route Methods for Accessing Type Data
  static async getTypes(req, res) {
    // Retrieves All Type Objects
  }

  static async getTypeByName(req, res) {
    // Retrieves Type Object by Name
  }

  static async getPokemonByType(req, res) {
    // Retrieves All Pokemon Objects of a Type
  }
}

export default TypeController;
