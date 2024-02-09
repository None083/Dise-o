$(document).ready(function(){
    $("img").hover(
        function(){ // mouseenter
            $(this).next("h3").toggle();
        },
        function(){ // mouseleave
            $(this).next("h3").toggle();
        }
    );
});
