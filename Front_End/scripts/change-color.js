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
    type = capWordUtil(type, " ");

    $("#type-name").text(type);

    /* Change Icon */

    /* Change Background */

    /* Change Underline */
    
});