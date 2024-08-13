// JavaScript to pull lists of pokemon by type

// Wait for DOM to be fully loaded
$(document).ready(function() {
    const params = new URLSearchParams(window.location.search);
    let type = params.get('type');

    console.log(`This should be the pokemon type: ${type}.`);

    const regex = /([^-]*){1}-/;
    const match = type.match(regex);
    let typeInput = match[1];
    // const upperType = capWordUtil(type, " ");

    // Pull data from source
    function getPokemon(typeInput) {
        $.ajax({
            // API Entry Point
            url: `https://pokeapi.co/api/v2/type/${typeInput}`,
            method: "GET",
            dataType: "json",
            success: function(data) {
                // Traverse through the parsed data
                const pokemonList = data.pokemon.map(p => p.pokemon.name);
                // Call function that displays results
                displayResults(pokemonList);
            },
            error: function() {
                console.log("Get Pokemon Error");
            }
        });
    }

    function displayResults(pokemonList) {
        const resultsDiv = $(".pokemon-list-container");
        // Make sure it's empty
        resultsDiv.empty();
        // If there is data...
        if (pokemonList.length > 0) {
            // For each pokemon found
            pokemonList.forEach(pokemon => {
                // Create a name in HTML
                const pokemonName = `
                <div class="my-2">
                    ${pokemon}
                </div>
                `;
                // Append as a new object to HTML
                resultsDiv.append(pokemonName);
            })
        } else {
            resultsDiv.append("<div>No Pokemon of That Type!</div>");
        }
    }

    getPokemon(typeInput);
});