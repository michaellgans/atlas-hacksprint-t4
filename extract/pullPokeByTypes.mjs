// Scripts to extract Pokemon Names by Type from the Pokeapi

import fetch from 'node-fetch'; // Doesn't support CJS after v3

// Extract pokemon by Type
async function getPokemonType(pokeType) {

    if (!pokeType) {
        console.log("No argument provided.")
        console.log("Syntax: node <fileName> <pokemonType>");
        return;
    }

    // Try to reach API entry point
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/type/${pokeType}`);
        if (!response.ok) {
            throw err;
        }
        // Parse data into a JSON
        const data = await response.json();
        // For each Pokemon, print the name.
        const pokemonNames = data.pokemon.map(p => p.pokemon.name);
        console.log(`${pokeType} Pokemon:`, pokemonNames);
    } catch (err) {
        console.error(err);
    }
}

const args = process.argv.slice(2);

const pokeType = args[0];

getPokemonType(pokeType);
