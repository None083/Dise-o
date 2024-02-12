$(document).ready(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop()) {
            $("header").addClass("header-fijo");
        } else {
            $("header").removeClass("header-fijo");
        }
    });

    $(window).resize(function () {
        if ($(this).width() >= 1100) {
            $('#menu-principal input[type="checkbox"]').prop('checked', false);
        }
    });
});
