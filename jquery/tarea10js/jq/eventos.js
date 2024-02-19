$(document).ready(function () {
    $(".texto").css("display", "none");

    $("article > div > section > div").on({
        click: function () {
            if($(this).siblings(".texto").css("display") === "none"){
                $(".texto").css("display", "none");
                $("div").children("svg:nth-child(2)").css({
                    transform: "rotate(90deg)",
                    transition: "transform 0.5s ease"
                })
                $(this).siblings(".texto").fadeIn(500);
                $(this).children("div").children("svg:nth-child(2)").css({
                    transform: "rotate(180deg)",
                    transition: "transform 0.5s ease"
                })
            }else{
                $(this).siblings(".texto").fadeOut(500);
                $(this).children("div").children("svg:nth-child(2)").css({
                    transform: "rotate(90deg)",
                    transition: "transform 0.5s ease"
                })
            }
        }
    })
});
