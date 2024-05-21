$(document).ready(function () {

    // Inicio header
    $(window).on('resize', function () {
        $("ul#menu-desplegado").fadeOut();
        $("ul#menu-iconos-adicional").fadeOut();
        $('nav.menu-post').fadeOut();
        $("nav#capa-buscador").fadeOut();
    });

    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll > 0) {
            $('header.fixed').stop().animate({ opacity: 0.8 }, 500);
            $("ul#menu-desplegado").fadeOut(1);
            $('nav.menu-post').fadeOut();
            $("ul#menu-iconos-adicional").fadeOut(1);
            $("nav#capa-buscador").fadeOut();
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

    $("img#menu-hamb").on(
        "click", function () {
            $("ul#menu-desplegado").slideToggle(300);
        }
    );

    $("img#menu-albondigas").on(
        "click", function () {
            $("ul#menu-iconos-adicional").slideToggle(300);
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

    $("div#search>img#lupa-blanca").on(
        "click", function () {
            $("nav#capa-buscador").fadeToggle();
        }
    );

    $("nav#capa-buscador>img#equis").on(
        "click", function () {
            $("nav#capa-buscador").fadeOut();
        }
    );

    // Fin header

    // Hover sobre imagenes del index y profile, modo escritorio
    $(window).resize(function () {
        if ($(window).width() > 1024) {
            // Modo escritorio
            $("article.post").on({
                mouseenter: function () {
                    $(this).children("div.capa-post").stop().fadeIn();
                    $(this).children("div.post-info, ul.icons-post").stop().css("display", "flex").fadeIn();
                },
                mouseleave: function () {
                    $(this).children("div.capa-post").stop().fadeOut();
                    $(this).children("div.post-info, ul.icons-post").stop().fadeOut();
                }
            });

            // Ocultar los elementos al cambiar a modo escritorio
            $("article.post").children("div.capa-post, div.post-info, ul.icons-post").stop().hide();
        } else {
            // Modo móvil
            $("article.post").off("mouseenter mouseleave");

            // Mostrar los elementos de forma permanente en modo móvil
            $("main#index>section#galery-index>article.post").children("div.post-info, ul.icons-post").stop().css("display", "flex").show();
        }
    }).resize();

    // Desplegar mini-menu de post en escritorio
    $("img.icon-albondiga").on(
        "click", function () {
            $(this).closest('article').children('nav.menu-post').fadeToggle(200);
        }
    );

    // Cambiar estado del botón follow a following, index y profile
    $("span.boton-seguir").on("click", function () {
        $(this).fadeOut(function () {
            $(this).css({
                "color": "orange",
                "border-color": "orange"
            }).text("Following").fadeIn();
        });
    });

    // Cambiar estado del like, cambio a corazón relleno, index
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

    // Cambiar estado del like, cambio a corazón relleno, profile y post
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

    // Validar login, error de campo vacío
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

    // Botón de volver arriba
    $('img#volver-arriba').on("click", function () {
        $('html, body').animate({
            scrollTop: 0
        }, 400);
    });

    // Cerrar el vídeo de promo en index
    $("div#video-promo>img").on(
        "click", function () {
            $("div#video-promo").fadeOut(200);
        }
    );

    // Cerrar el banner de loguearse en index
    $("div#joinOrLogin>img#equisjoin").on(
        "click", function () {
            $("div#joinOrLogin").fadeOut(200);
        }
    );

    // Aceptar las cookies en la página de cookies
    $("span.btn-cookies").on(
        "click", function () {
            $("div#accept-conditions").fadeOut(200);
        }
    );
})