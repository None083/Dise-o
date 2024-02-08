$(document).ready(function(){
    $(".noticia").mouseenter(function(){
        var titular = $(this).find('h3').text();
        $(this).append('<h3 class="explicativo">' + titular + '</h3>');
    }).mouseleave(function(){
        $(this).find(".explicativo").remove();
    });
});