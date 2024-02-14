$(document).ready(function () {
    $(document).keypress(function (e) {
        if (String.fromCharCode(e.which) == "d" || String.fromCharCode(e.which) == "D") {
            $("h3").toggle("fast");
        }
    })
});

/*
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
*/