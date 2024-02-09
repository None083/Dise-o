$(document).ready(function(){
    $("img").mouseenter(function(){
        $(this).next("h3").toggle();
    }).mouseleave(function(){
        $(this).next("h3").toggle();
    });
});