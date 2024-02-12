$(document).ready(function () {
    $("input, select").focus(function(){
        $(this).css("background-color", "grey");
    }).blur(function(){
        $(this).css("background-color", "white");
    });
});