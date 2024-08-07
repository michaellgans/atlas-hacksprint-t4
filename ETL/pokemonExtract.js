import { promises as fs } from 'fs';
import fetch from 'node-fetch';

const pokemonObjectArray = [];

async function pullDataFromAPIById(id) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

    if (!response.ok) {
        throw err;
    }

    const data = await response.json();

    const pokeTypesArray = data.types;
    const types = [];
    pokeTypesArray.forEach((type) => {
      let pokeType1;
      let pokeType2;

      if (type.slot === 1) {
        pokeType1 = type.type.name;
        types.push(pokeType1);
      }

      if (type.slot === 2) {
        pokeType2 = type.type.name;
        types.push(pokeType2);
      }
    });

    const pokemonObject = {
      pokeId: id,
      pokeName: data.name,
      pokeType1: types[0],
      pokeType2: types[1] ? types[1] : null,
      pokeSprite: data.sprites.front_default
    };

    return pokemonObject;

} catch (err) {
    console.error(err);
}
}

async function extractPokemonData() {
  for (let pokemonId = 1; pokemonId < 152; pokemonId++) {
    const newPokemonObject = await pullDataFromAPIById(pokemonId)
    pokemonObjectArray.push(newPokemonObject);
  }
  await fs.writeFile('./data/pokemon.json', JSON.stringify(pokemonObjectArray, null, 2));
}

export default await extractPokemonData();



