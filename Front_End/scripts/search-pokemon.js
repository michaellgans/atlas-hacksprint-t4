// JavaScript to pull single pokemon from search bar

import capWordUtil from "../../Utils/Helper_Functions/capWordUtil.js";

// Wait for DOM to be fully loaded
$(document).ready(function() {
    // Listen for enter
    $(".form-control").on("keydown", function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            console.log("enter has been pressed");
            let searchInput = $(this).val();
            console.log(`User is searching for: ${searchInput}.`);

            const pokemonName = searchInput.toLowerCase();

            getPokemonInfo(pokemonName);
        }
    });

    // Pull pokemon ids and sprites
    function getPokemonInfo(pokemonName) {
        $.ajax({
            // API Entry Point
            url: `http://localhost:5000/pokemon/${pokemonName}/`,
            method: "GET",
            dataType: "json",
            success: function(data) {
                // Pull ID, Name, Type1, and Sprite
                const id = data._id;
                const name = capWordUtil(data.pokeName, " ");
                const type1 = capWordUtil(data.pokeType1, " ");
                const sprite = data.pokeSprite;

                // Create a name in HTML
                let pokemonItem = `
                <!-- Modal -->
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
                if (data.pokeType2 !== null) {
                    let type2 = capWordUtil(data.pokeType2, " ");
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
                            </div>`;

                const populatePokedex = $(".pokedex-container");
                populatePokedex.empty();
                populatePokedex.append(pokemonItem);
            },
            error: function() {
                console.log("Get Pokemon Error");
            }
        });
    }
});