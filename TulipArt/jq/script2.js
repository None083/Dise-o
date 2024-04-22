$(document).ready(function () {

    $("div#video-promo>img").on(
        "click", function () {
            $("div#video-promo").fadeOut(100);
        }
    );

    $("div#joinOrLogin>img#equisjoin").on(
        "click", function () {
            $("div#joinOrLogin").fadeOut(100);
        }
    );

})