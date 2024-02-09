/*$(document).ready(function () {
    $(document).keypress(function (e) {
        if (e.key == "d" || e.key == "D") {
            $("h3").css("display", "block");
        }
    })
});*/

$(document).ready(function () {
    $(document).keydown(function (e) {
        if (e.key == "d" || e.key == "D") {
            $("h3").css("display", "block");
        }
    }).keyup(function (e){
        if (e.key == "d" || e.key == "D") {
            $("h3").css("display", "none");
        }
    })
});