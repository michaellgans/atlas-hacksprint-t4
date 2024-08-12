// Retrieves applicable types based on single type displayed

$(document).ready(function() {
    const params = new URLSearchParams(window.location.search);
    let type = params.get('type');

    console.log(`Base type for relationships: ${type}.`);

    const regex = /([^-]*){1}-/;
    const match = type.match(regex);
    type = match[1];
    // const upperType = capWordUtil(type, " ");

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
                console.log(`Nothing is supereffective against ${type}.`);
            } else {
                $(".type-interaction-row").append(
                    `<h3>Super Effective Against</h3>
                    <div class="types">
                        <a
                            href="/index.html"
                            aria-label="Click to view Fairy Type interactions.">
                            <img 
                                src="../images/Fairy_icon_SwSh.png"
                                alt="Fairy Type Icon"
                            >
                        </a>
                    </div>
                    `)
            }
        },
        error: function() {
            console.log("Get Pokemon Error");
        }
    });
});