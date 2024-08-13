// Changes the style of the page based on the color selected by the user

import capWordUtil from "../../Utils/Helper_Functions/capWordUtil.js";

$(document).ready(function() {
    /* Retrieves the color from URL params */
    const params = new URLSearchParams(window.location.search);
    let type = params.get('type');

    console.log(`This should be the pokemon type: ${type}.`);

    /* Change Title Text */
    const regex = /([^-]*){1}-/;
    const match = type.match(regex);
    type = match[1];
    const upperType = capWordUtil(type, " ");

    $("#type-name").text(`${upperType} Pokemon`);

    /* Change Icon */
    $("#type-icon").attr("src", `../images/${upperType}_icon_SwSh.png`);

    /* Change Background */
    $("#gradient").css({"background": `linear-gradient(180deg, var(--${type}-type-65) 0%, rgba(255, 255, 255, 0.39) 100%)`});

    /* Change Bottom Border */
    $("#type-name").css({"border-bottom": `solid 7px var(--${type}-type-65)`});

    /* Change Hover */
    $(`<style>
            #see-more:hover {
                color: var(--${type}-type);
            }
        </style>`).appendTo("head");
});