// Script to extract all Pokemon Names from the Pokeapi

import fetch from 'node-fetch'; // Doesn't support CJS after v3

// Extract pokemon by Name
async function getPokemonNames() {
    // Try to reach API entry point
    try {
        // Manipulates the PokeAPI endpoint to change the limit from 20 to 1025
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=25`);
        if (!response.ok) {
            throw err;
        }
        // Parse data into a JSON
        const data = await response.json();
        // For each Pokemon, print the name.
        data.results.forEach(pokemon => {
            console.log(pokemon.name);
        });
    } catch (err) {
        console.error(err);
    }
}

getPokemonNames();
