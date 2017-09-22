$(document).ready(function() {
    $("#search").css("height", $('.fa-search').css("height"));

    $("#search").focusin(function(e) {
        if($(this).val() != "") {
        $(this).val("");
        }
    });
});