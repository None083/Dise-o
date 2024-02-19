$(document).ready(function () {
    $("header > div > nav#menu-principal > ul#menu").css("display", "none");
    $("header#top > div > nav#menu-principal > span").on({
        click: function () {
            if ($("nav#menu-principal > ul#menu").css("display") === "none") {
                $("header#top > div > nav#menu-principal > ul#menu").fadeIn(200);
            } else {
                $("header > div > nav#menu-principal > ul#menu").fadeOut(200);
            }
        }
    });
    $(window).scroll(function () {
        if ($(document).scrollTop()) {
            $("header#top").css("position", "fixed");
        } else {
            $("header#top")
        }
    });
})