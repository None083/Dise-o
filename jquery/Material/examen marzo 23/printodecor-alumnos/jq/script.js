$(document).ready(function () {
    var clicked = false;
    $("div#hamburger").on({
        click: function () {
            //1.a
            $('ul#menu-toggle').stop(true).slideToggle('slow');

            //1.b
            if ($('.line-ham:nth-child(2)').width() < $('.line-ham:nth-child(1)').width()) {
                $('.line-ham:nth-child(2)').animate({ width: '1.87rem' }, 500);
            } else {
                $('.line-ham:nth-child(2)').animate({ width: '1.37rem' }, 500);
            }

            //1.c
            if (!clicked) {
                $(this).find('.line-ham').animate({ backgroundColor: "#2bd3c6" }, 500);
                clicked = true;
            } else {
                $(this).find('.line-ham').animate({ backgroundColor: "black" }, 500);
                clicked = false;
            }
        }
    });
});