// JavaScript to pull lists of pokemon by type

import capWordUtil from "../../Utils/Helper_Functions/capWordUtil.js";

// Wait for DOM to be fully loaded
$(document).ready(function() {
    let pageNumber = 1;

    // Listen for click
    $("#see-more").on("click", function() {
        console.log("see-more has been clicked");
        pageNumber ++;
        const populateList = $(".pokemon-results");
        populateList.empty();
        getPokemonInfo(pageNumber)

        setTimeout(function() {
            if (populateList.children().length === 0) {
                pageNumber = 1;
                getPokemonInfo(pageNumber);
                console.log("You ran out of pokemon :(");
            }
        }, 400);
    });

    // Pull pokemon ids and sprites
    function getPokemonInfo(pageNumber) {
        $.ajax({
            // API Entry Point
            // url: `https://pokeapi.co/api/v2/type/${typeInput}`,
            url: `http://localhost:5000/pokemon?page=${pageNumber}`,
            method: "GET",
            dataType: "json",
            success: function(data) {
                data.forEach( pokemon => {
                // Pull ID, Name, Type1, and Sprite
                const id = pokemon._id;
                const name = capWordUtil(pokemon.pokeName, " ");
                const type1 = capWordUtil(pokemon.pokeType1, " ");
                const sprite = pokemon.pokeSprite;

                console.log(`${id} ${name} ${type1} ${sprite}`)

                // Create a name in HTML
                let pokemonItem = `
                <div class="pokemon-item d-flex flex-row align-items-center">
                    <img
                        id="pokeball-sprite"
                        class="px-2 rotate"
                        src="../images/Bag_Poké_Ball_SV_Sprite.png"
                        alt="Open pokedex modal"
                        data-toggle="modal"
                        data-target="#pokedex${id}"
                    >
                    <text id="pokemon-id">#${id}</text>
                    <text id="pokemon-name">${name}</text>
                    <!-- Modal -->
                    <div class="modal fade" id="pokedex${id}" tabindex="-1" role="dialog" aria-labelledby="Pokedex showing ${name}." aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered" role="document">
                            <div class="modal-content">
                                <div class="modal-body d-flex justify-content-center">
                                    <div class="pokedex-screen d-flex flex-column">
                                        <div class="pokemon-name">${name}</div>
                                        <div class="pokemon-id">#${id}</div>
                                        <div class="pokemon-sprite">
                                            <img
                                                id="sprite"
                                                src="${sprite}"
                                                alt="Picture of ${name}"
                                            >
                                        </div>
                                        <div class="types-container d-flex flex-row align-items-center">
                                            <div class="type1">
                                                <img
                                                    id=type1
                                                    src="../images/${type1}_icon_SwSh.png"
                                                    alt="${type1} Type Icon"
                                                >
                                            </div>`

                // Check for Type2
                if (pokemon.pokeType2 !== null) {
                    let type2 = capWordUtil(pokemon.pokeType2, " ");
                    let type2Element = `                                            
                        <div class="type2">
                            <img
                                id=type2
                                src="../images/${type2}_icon_SwSh.png"
                                alt="${type2} Type Icon"
                            >
                        </div>`
                    pokemonItem +=  type2Element;
                } else {
                    console.log(`${name} has no type2`);
                }

                pokemonItem += `</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;

                const populateList = $(".pokemon-results");
                populateList.append(pokemonItem);
                });
            },
            error: function() {
                console.log("Get Pokemon Error");
            }
        });
    }
    getPokemonInfo(pageNumber);
});