import mongoose from 'mongoose';

const typeSchema = new mongoose.Schema({
  name: String,
  pokemonList: [String],
  doubleTo: [String],
  doubleFrom: [String],
  halfTo: [String],
  halfFrom: [String],
  zeroTo: [String],
  zeroFrom: [String]
});

const Type = mongoose.model('Type', typeSchema);
export default Type;