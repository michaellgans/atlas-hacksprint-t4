import mongoose from 'mongoose';

const pokemonSchema = new mongoose.Schema({
  _id : Number,
  pokeName: String,
  pokeType1: String,
  pokeType2: String,
  pokeSprite: String
});

const Pokemon = mongoose.model('Pokemon', pokemonSchema);
export default Pokemon;

