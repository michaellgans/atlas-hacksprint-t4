// Captures the color selected by the user

$(document).ready(function() {
    /* Listen for Click */
    $("[id]").click(function(event){
        const get_type = this.id;

        event.preventDefault();
        const url = `http://localhost:5500/Front_End/static/pages/single-type.html?type=${get_type}`;
        window.location.href = url;
    });
});