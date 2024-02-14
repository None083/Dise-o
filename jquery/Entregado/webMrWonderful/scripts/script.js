$(document).ready(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop()) {
            $('header').addClass('header-fijo');
        } else {
            $('header').removeClass('header-fijo');
        }
    });
});
