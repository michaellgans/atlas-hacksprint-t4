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

    const typeObject = {
      name: data.name,
      pokemonList: data.pokemon.map(pokemon => pokemon.pokemon.name),
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
