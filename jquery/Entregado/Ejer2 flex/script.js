$(document).ready(function () {
    $("li").focusin(function () {
        $(this).children("a").css("color", "grey")
    }
    ).focusout(function () {
        $(this).children("a").css("color", "white")
    }).hover(
        function () {

            $(this).children("a").css("color", "grey")
        },
        function () {
            $(this).children("a").css("color", "white")
        }
    );

});