$(document).ready(function(){
    $(".menu").hover(
        function(){ // mouseenter
            $(this).next("li a").css("color", "red")
        },
        function(){ // mouseleave
            $(this).next("li a").css("color", "black")
        }
    );
});