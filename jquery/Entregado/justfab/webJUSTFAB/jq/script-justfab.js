$(document).ready(function () {
    $("header > div > nav#menu-principal > ul#menu").css("display", "none");

    $("header#top > div > nav#menu-principal > span").on({
        click: function () {
            if ($("nav#menu-principal > ul#menu").css("display") === "none") {
                $("header#top > div > nav#menu-principal > ul#menu").fadeIn();
            } else {
                $("header > div > nav#menu-principal > ul#menu").fadeOut();
            }
        }
    });
    $(window).on({
        scroll: function () {
            if ($(this).scrollTop() > 600 && !$("header#top > div").hasClass("fijado")) {
                $("header#top > div").addClass("fijado").css("top", "-50px").animate({top: "0"}, 500);
                $("div#volverarriba").fadeIn();
            } else if($(this).scrollTop() <= 600 && $("header#top > div").hasClass("fijado")){
                $("header#top > div").removeClass("fijado");
                $("div#volverarriba").fadeOut();
            }
        }
    });

    $("div#volverarriba").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 800);
        return false;
    });

    $("nav#menu-principal > ul#menu > li").on({
        click: function () {
            if($(this).children("ul").css("display") === "none"){
                $("nav#menu-principal > ul#menu > li > ul").slideUp(500);
                $("a > span").css({
                    transform: "rotate(0deg)",
                    transition: "transform 0.5s ease"
                })
                $(this).children("ul").slideDown(500);
                $(this).find("a > span").css({
                    transform: "rotate(-180deg)",
                    transition: "transform 0.5s ease"
                })
            }else{
                $(this).children("ul").slideUp(500);
                $(this).find("a > span").css({
                    transform: "rotate(0deg)",
                    transition: "transform 0.5s ease"
                })
            }
        }
    })
    $("article.item > a > picture > img").on({
        mouseenter: function () {
            $(this).attr("src", $(this).attr("src").replace('.jpg', '-1.jpg'));
        },
        mouseleave: function () {
            $(this).attr("src", $(this).attr("src").replace('-1.jpg', '.jpg'));
        }
    })
})