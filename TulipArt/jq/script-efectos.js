$(document).ready(function () {

    $(window).on('resize', function () {
        $("ul#menu-desplegado").fadeOut(300);
    });

    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll > 0) {
            $('header.fixed').stop().animate({ opacity: 0.8 }, 500);
            $("ul#menu-desplegado").fadeOut(1);
            $('nav.menu-post').fadeOut();
        } else {
            $('header.fixed').stop().animate({ opacity: 1 }, 500);
        }
    });

    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll > 200) {
            $('img#volver-arriba').stop().fadeIn();
        } else {
            $('img#volver-arriba').stop().fadeOut();
        }
    });

    $('img#volver-arriba').on("click", function () {
        $('html, body').animate({
            scrollTop: 0
        }, 400);
    });

    $("img#menu-hamb").on(
        "click", function () {
            $("ul#menu-desplegado").slideToggle(300);
        }
    );

    $("nav#menu-iconos>a#profile, nav#menu-iconos>a#messages-header, nav#menu-iconos>a#alerts-header, nav#menu-iconos>a#submit-header").on({
        mouseenter: function () {
            $(this).children("span").stop().animate({ color: '#b3cfcd' }, 400);
        },
        mouseleave: function () {
            $(this).children("span").stop().animate({ color: '#E1DBD5' }, 400);
        }
    });

    $(window).resize(function () {
        if ($(window).width() > 1024) {
            $("article.post").on({
                mouseenter: function () {
                    $(this).children("div.capa-post").stop().fadeIn();
                    $(this).children("div.post-info, ul.icons-post").stop().css("display", "flex").fadeIn();
                },
                mouseleave: function () {
                    $(this).children("div.capa-post").stop().fadeOut();
                    $(this).children("div.post-info, ul.icons-post").stop().css("display", "flex").fadeOut();
                    $(this).children('nav.menu-post').stop().fadeOut();
                }
            });
        } else {
            $("article.post").off("mouseenter mouseleave");
        }
    }).resize();

    $("img.icon-albondiga").on(
        "click", function () {
            $(this).closest('article').children('nav.menu-post').fadeToggle(200);
        }
    );

    $("span.boton-seguir").on("click", function () {
        $(this).fadeOut(function () {
            $(this).css({
                "color": "orange",
                "border-color": "orange"
            }).text("Following").fadeIn();
        });
    });

    $("main#index>section#galery-index>article.post>ul.icons-post>li:first-child>img").on("click", function () {
        var img = $(this);
        if (img.attr('src') === "imagenes/icons/Favorite.svg") {
            img.fadeOut(400, function () {
                img.attr('src', "imagenes/icons/Heart.svg");
                img.fadeIn(400);
            });
        } else {
            img.fadeOut(400, function () {
                img.attr('src', "imagenes/icons/Favorite.svg");
                img.fadeIn(400);
            });
        }
    });

    $("main#profile-page>section#profile-gallery>article.post>ul.icons-post>li:first-child>img, main.post>section.post>div#option>div#izq>img:first-child").on("click", function () {
        var img = $(this);
        if (img.attr('src') === "../imagenes/icons/Favorite.svg") {
            img.fadeOut(400, function () {
                img.attr('src', "../imagenes/icons/Heart.svg");
                img.fadeIn(400);
            });
        } else {
            img.fadeOut(400, function () {
                img.attr('src', "../imagenes/icons/Favorite.svg");
                img.fadeIn(400);
            });
        }
    });

    $("main#login>div.containForm>form>button").on("click", function () {

        if ($("input#username").val() === "") {
            $("span#wrong-username").text("El campo de nombre de usuario no puede estar vacío.");
            $("span#wrong-username").css("visibility", "visible");
        } else {
            $("span#wrong-username").css("visibility", "hidden");
        }

        if ($("input#password").val() === "") {
            $("span#wrong-password").text("El campo de contraseña no puede estar vacío.");
            $("span#wrong-password").css("visibility", "visible");
        } else {
            $("span#wrong-password").css("visibility", "hidden");
        }
    });

    $("div#video-promo>img").on(
        "click", function () {
            $("div#video-promo").fadeOut(200);
        }
    );

    $("div#joinOrLogin>img#equisjoin").on(
        "click", function () {
            $("div#joinOrLogin").fadeOut(200);
        }
    );

    $("span.btn-cookies").on(
        "click", function () {
            $("div#accept-conditions").fadeOut(200);
        }
    );
})