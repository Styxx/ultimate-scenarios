function searchFunction(input) {
    if (input == "") {
        $("[id^='scenario']").show();
    } else {
        $("[id^='scenario']:not([data-tags*='"+ input +"'])").hide();
        $("[id^='scenario'][data-tags*='"+ input +"']").show();
    }
}

$(document).ready(function() {
    $("#search").on('input', function() {
        if ($(this).val() != "") {
            $('.search-container').addClass("active");
        } else {
            $('.search-container').removeClass("active");
        }
        searchFunction($(this).val());

    });
});