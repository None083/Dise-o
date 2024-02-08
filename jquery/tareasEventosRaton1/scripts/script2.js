$(document).ready(function(){
    $(".noticia").hover(
        function(){ // mouseenter
            var titular = $(this).find('h3').text();
            $(this).append('<h3 class="explicativo">' + titular + '</h3>');
        },
        function(){ // mouseleave
            $(this).find(".explicativo").remove();
        }
    );
});
