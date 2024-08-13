// Captures the color selected by the user

$(document).ready(function() {
    /* Listen for Click */
    $("#search").click(function(event){
        console.log("search was clicked");
        let get_type = $("#type-name").text();
        get_type = get_type.toLowerCase();
        console.log(get_type);

        event.preventDefault();
        const url = `http://localhost:5500/Front_End/static/pages/all-pokemon.html?type=${get_type}-type`;
        console.log(url);
        window.location.href = url;
    });
});