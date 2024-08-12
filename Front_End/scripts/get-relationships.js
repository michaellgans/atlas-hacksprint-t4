// Retrieves applicable types based on single type displayed

import capWordUtil from "../../Utils/Helper_Functions/capWordUtil.js";

$(document).ready(function() {
    const params = new URLSearchParams(window.location.search);
    let type = params.get('type');

    console.log(`Base type for relationships: ${type}.`);

    const regex = /([^-]*){1}-/;
    const match = type.match(regex);
    type = match[1];

    // $("#type-name").text(upperType);

    $.ajax({
        // API Entry Point
        url: `https://pokeapi.co/api/v2/type/${type}`,
        method: "GET",
        dataType: "json",
        success: function(data) {
            // Gets damage relationship arrays
            const superEffectiveAgainst = data.damage_relations.double_damage_to.map(p => p.name);
            const weakTo = data.damage_relations.double_damage_from.map(p => p.name);
            const notEffectiveAgainst = data.damage_relations.half_damage_to.map(p => p.name);
            const resistantTo = data.damage_relations.half_damage_from.map(p => p.name);
            const noEffectAgainst = data.damage_relations.no_damage_to.map(p => p.name);
            const notEffectedBy = data.damage_relations.no_damage_from.map(p => p.name);

            if (superEffectiveAgainst[0] === undefined) {
                console.log(`${type} does double damage to nothing.`);
            } else {
                let interactionItem = `
                    <h3>Super Effective Against</h3>
                    <div class="types">`
                for (let x = 0; x < superEffectiveAgainst.length; x++) {
                    const upperType = capWordUtil(superEffectiveAgainst[x], " ");
                    interactionItem += 
                        `<a
                            href="http://localhost:5500/Front_End/static/pages/single-type.html?type=${superEffectiveAgainst[x]}-type"
                            aria-label="Click to view ${upperType} Type interactions."
                        >
                            <img 
                                src="../images/${upperType}_icon_SwSh.png"
                                alt="${upperType} Type Icon"
                            >
                        </a>`
                }
                interactionItem += `</div>`
                $(".type-interaction-row").append(interactionItem);
            }

            if (weakTo[0] === undefined) {
                console.log(`${type} takes double damage from nothing.`);
            } else {
                let interactionItem = `
                    <h3>Weak To</h3>
                    <div class="types">`
                for (let x = 0; x < weakTo.length; x++) {
                    const upperType = capWordUtil(weakTo[x], " ");
                    interactionItem += 
                        `<a
                            href="http://localhost:5500/Front_End/static/pages/single-type.html?type=${weakTo[x]}-type"
                            aria-label="Click to view ${upperType} Type interactions.">
                            <img 
                                src="../images/${upperType}_icon_SwSh.png"
                                alt="${upperType} Type Icon"
                            >
                        </a>`
                }
                interactionItem += `</div>`
                $(".type-interaction-row").append(interactionItem);
            }

            if (notEffectiveAgainst[0] === undefined) {
                console.log(`${type} does half damage to nothing.`);
            } else {
                let interactionItem = `
                    <h3>Not Very Effective Against</h3>
                    <div class="types">`
                for (let x = 0; x < notEffectiveAgainst.length; x++) {
                    const upperType = capWordUtil(notEffectiveAgainst[x], " ");
                    interactionItem += 
                        `<a
                            href="http://localhost:5500/Front_End/static/pages/single-type.html?type=${notEffectiveAgainst[x]}-type"
                            aria-label="Click to view ${upperType} Type interactions.">
                            <img 
                                src="../images/${upperType}_icon_SwSh.png"
                                alt="${upperType} Type Icon"
                            >
                        </a>`
                }
                interactionItem += `</div>`
                $(".type-interaction-row").append(interactionItem);
            }

            if (resistantTo[0] === undefined) {
                console.log(`${type} takes half damage from nothing.`);
            } else {
                let interactionItem = `
                    <h3>Resistant To</h3>
                    <div class="types">`
                for (let x = 0; x < resistantTo.length; x++) {
                    const upperType = capWordUtil(resistantTo[x], " ");
                    interactionItem += 
                        `<a
                            href="http://localhost:5500/Front_End/static/pages/single-type.html?type=${resistantTo[x]}-type"
                            aria-label="Click to view ${upperType} Type interactions.">
                            <img 
                                src="../images/${upperType}_icon_SwSh.png"
                                alt="${upperType} Type Icon"
                            >
                        </a>`
                }
                interactionItem += `</div>`
                $(".type-interaction-row").append(interactionItem);
            }

            if (noEffectAgainst[0] === undefined) {
                console.log(`Nothing is immune to ${type}.`);
            } else {
                let interactionItem = `
                    <h3>Has No Effect Against</h3>
                    <div class="types">`
                for (let x = 0; x < noEffectAgainst.length; x++) {
                    const upperType = capWordUtil(noEffectAgainst[x], " ");
                    interactionItem += 
                        `<a
                            href="http://localhost:5500/Front_End/static/pages/single-type.html?type=${noEffectAgainst[x]}-type"
                            aria-label="Click to view ${upperType} Type interactions.">
                            <img 
                                src="../images/${upperType}_icon_SwSh.png"
                                alt="${upperType} Type Icon"
                            >
                        </a>`
                }
                interactionItem += `</div>`
                $(".type-interaction-row").append(interactionItem);
            }

            if (notEffectedBy[0] === undefined) {
                console.log(`${type} is immune to nothing.`);
            } else {
                let interactionItem = `
                    <h3>Not Effected By</h3>
                    <div class="types">`
                for (let x = 0; x < notEffectedBy.length; x++) {
                    const upperType = capWordUtil(notEffectedBy[x], " ");
                    interactionItem += 
                        `<a
                            href="http://localhost:5500/Front_End/static/pages/single-type.html?type=${notEffectedBy[x]}-type"
                            aria-label="Click to view ${upperType} Type interactions.">
                            <img 
                                src="../images/${upperType}_icon_SwSh.png"
                                alt="${upperType} Type Icon"
                            >
                        </a>`
                }
                interactionItem += `</div>`
                $(".type-interaction-row").append(interactionItem);
            }

            /* Change Underline Color after element is created*/
            $("h3").css({"border-bottom": `solid 7px var(--${type}-type-65)`});
        },
        error: function() {
            console.log("Get Type Interaction Error");
        }
    });
});