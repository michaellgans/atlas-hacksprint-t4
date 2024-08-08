import { promises as fs } from 'fs';
import fetch from 'node-fetch';

const typeObjectArray = [];

async function pullDataFromAPIById(id) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/type/${id}`);

    if (!response.ok) {
        throw new Error;
    }

    const data = await response.json();

    const regexPokeId = /(\d{1,5})\W{1}$/;
    const pokeForType = data.pokemon;
    const pokeFilteredList = [];

    pokeForType.forEach((pokemon) => {
      const url = pokemon.pokemon.url;
      const match = url.match(regexPokeId);
      console.log(match);
      const pokeId = parseInt(match[1]);
      if (pokeId <= 151) {
        pokeFilteredList.push(pokemon.pokemon.name);
      }
    })

    const typeObject = {
      name: data.name,
      pokemonList: pokeFilteredList,
      doubleTo: data.damage_relations.double_damage_to.map(calc => calc.name),
      doubleFrom: data.damage_relations.double_damage_from.map(calc => calc.name),
      halfTo: data.damage_relations.half_damage_to.map(calc => calc.name),
      halfFrom: data.damage_relations.half_damage_from.map(calc => calc.name),
      zeroTo: data.damage_relations.no_damage_to.map(calc => calc.name),
      zeroFrom: data.damage_relations.no_damage_from.map(calc => calc.name)
    };

    return typeObject;

} catch (err) {
    console.error(err);
}
}

async function extractTypeData() {
  for (let typeId = 1; typeId < 19; typeId++) {
    const newTypeObject = await pullDataFromAPIById(typeId)
    typeObjectArray.push(newTypeObject);
  }
  await fs.writeFile('./data/type.json', JSON.stringify(typeObjectArray, null, 2));
}

export default await extractTypeData();
