// Changes the style of the page based on the color selected by the user

$(document).ready(function() {
    /* Retrieves the color from URL params */
    const params = new URLSearchParams(window.location.search);
    const type = params.get('type');

    console.log(`This should be the pokemon type: ${type}.`);
    
});