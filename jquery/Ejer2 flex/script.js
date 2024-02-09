$(document).ready(function(){
    $("li").hover(
        function(){
            console.log("entra");
            $(this).children("a").css("color", "grey")
        },
        function(){
            $(this).children("a").css("color", "white")
        }
    );
});