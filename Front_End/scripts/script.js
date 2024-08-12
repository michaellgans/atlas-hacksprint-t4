// JavaScript to load Dynamic Content

// Waiting for the DOM to be fully loaded
$(document).ready(function() {
    /* Listen for Enter */
    $(".form-control").on("keydown", function(event) {
        // If the "Enter" key is pressed
        if (event.keyCode === 13) {
            // Prevent what it normally does
            event.preventDefault();
            console.log("Enter Key Pressed");
    
            // Capture the user's input
            const searchInput = $(this).val();
            
            console.log(`User is searching: ${searchInput}.`);

            // Pass input to the API search and
            // account for capitals
            getPokemon(searchInput.toLowerCase());
        }
    });

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
        // Identify the object by class using jQuery
        const resultsDiv = $(".results");
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

    // Pulls type from PokeAPI based on User Click
    function getType(typeInput) {
        $.ajax({
            // API Entry Point
            url: `https://pokeapi.co/api/v2/type/${typeInput}`,
            method: "GET",
            dataType: "json",
            success: function(data) {

            },
            error: function() {
                console.log("Get Pokemon Error");
            }
        });
    }
});
