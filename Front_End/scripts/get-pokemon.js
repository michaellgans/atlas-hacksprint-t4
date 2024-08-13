// JavaScript to pull lists of pokemon by type

import capWordUtil from "../../Utils/Helper_Functions/capWordUtil.js";

// Wait for DOM to be fully loaded
$(document).ready(function() {
    const params = new URLSearchParams(window.location.search);
    let type = params.get('type');

    console.log(`This should be the pokemon type: ${type}.`);

    const regex = /([^-]*){1}-/;
    const match = type.match(regex);
    let typeInput = match[1];
    // const upperType = capWordUtil(type, " ");

    // Pull pokemon names
    function getPokemonNames(typeInput) {
        $.ajax({
            // API Entry Point
            // url: `https://pokeapi.co/api/v2/type/${typeInput}`,
            url: `http://localhost:5000/types/${typeInput}`,
            method: "GET",
            dataType: "json",
            success: function(data) {
                // Traverse through the parsed data
                const pokemonList = data.pokemonList;
                // Call function that gets info per pokemon name
                getPokemonInfo(pokemonList);
            },
            error: function() {
                console.log("Get Pokemon Error");
            }
        });
    }

    // Pull pokemon ids and sprites
    function getPokemonInfo(pokemonList) {
        pokemonList.forEach(pokemonName => {
            $.ajax({
                // API Entry Point
                // url: `https://pokeapi.co/api/v2/type/${typeInput}`,
                url: `http://http://localhost:5000/pokemon/${pokemonName}`,
                method: "GET",
                dataType: "json",
                success: function(data) {
                    const pokemonId = data._id;
                    const pokemonSprite = data.pokeSprite;
                    const type1 = pokeType1;
                    const type2 = pokeType2;
                },
                error: function() {
                    console.log("Get Pokemon Error");
                }
            });
        });
    }

    // function displayResults(pokemonList, pokemonData) {
    //     const resultsDiv = $(".pokemon-list-container");
    //     // Make sure it's empty
    //     resultsDiv.empty();
    //     // If there is data...
    //     if (pokemonList.length > 0) {
    //         // For each pokemon found
    //         pokemonList.forEach(pokemon => {
    //             // Create a name in HTML
    //             let upperCase = capWordUtil(pokemon, " ");
    //             getPokemonInfo(pokemon);
    //             const pokemonItem = `
    //             <div class="pokemon-item d-flex flex-row align-items-center">
    //                 <img
    //                     id="pokeball-sprite"
    //                     class="px-2"
    //                     src="../images/Bag_Poké_Ball_SV_Sprite.png"
    //                     alt="Open pokedex modal"
    //                     data-toggle="modal"
    //                     data-target="#pokedex1"
    //                 >
    //                 <text id="pokemon-id">#001</text>
    //                 <text id="pokemon-name">${upperCase}</text>
    //                 <!-- Modal -->
    //                 <div class="modal fade" id="pokedex1" tabindex="-1" role="dialog" aria-labelledby="Pokedex showing the pokemon that was clicked on." aria-hidden="true">
    //                     <div class="modal-dialog modal-dialog-centered" role="document">
    //                         <div class="modal-content">
    //                             <div class="modal-body d-flex justify-content-center">
    //                                 <div class="pokedex-screen d-flex flex-column">
    //                                     <div class="pokemon-name">${upperCase}</div>
    //                                     <div class="pokemon-id">#001</div>
    //                                     <div class="pokemon-sprite">
    //                                         <img
    //                                             id="sprite"
    //                                             src="../images/test-sprite.png"
    //                                             alt="Picture of ${upperCase}"
    //                                         >
    //                                     </div>
    //                                     <div class="types-container d-flex flex-row align-items-center">
    //                                         <div class="type1">
    //                                             <img
    //                                                 id=type1
    //                                                 src="../images/Poison_icon_SwSh.png"
    //                                                 alt="Poison Type Icon"
    //                                             >
    //                                         </div>
    //                                         <div class="type2">
    //                                             <img
    //                                                 id=type2
    //                                                 src="../images/Grass_icon_SwSh.png"
    //                                                 alt="Grass Type Icon"
    //                                             >
    //                                         </div>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //             `;
    //             // Append as a new object to HTML
    //             resultsDiv.append(pokemonItem);
    //         })
    //     } else {
    //         resultsDiv.append("<div>No Pokemon of That Type!</div>");
    //     }
    // }

    // getPokemonNames(typeInput);
});