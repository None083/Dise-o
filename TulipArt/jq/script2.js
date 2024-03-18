$(document).ready(function () {

    $("div#video-promo>img").on(
        "click", function () {
            $("div#video-promo").fadeOut(100);
        }
    );

    $("joinOrLogin>img").on(
        "click", function () {
            $("joinOrLogin").fadeOut(100);
        }
    );

})