$(document).ready(function () {
    // 4.a
    $("div#cookies").css("display", "flex").fadeIn();
    // 4.b
    $("div#cookies > span").on(
        "click", function () {
            $("div#cookies").fadeOut();
        }
    );
    var clicked = false;
    $("nav#menu-principal > label").on(
        "click", function () {
            // 1.a
            $("nav#menu-principal > ul").stop().slideToggle();

            //1.b
            if (!clicked) {
                $(this).children().animate({ color: "#e9a140" }, 500);
                clicked = true;
            } else {
                $(this).children().animate({ color: "white" }, 500);
                clicked = false;
            }
        }
    );

    $("ul#menu-toggle > li > a").on(
        "click", function () {
            // 1.c
            $(this).siblings("ul").slideToggle();
            // 1.d
            $(this).children("span").animate({ color: "#e9a140" }, 500);
            // 1.e
            $(this).children("span.angulo").rotate({
                duration: 500,
                angle: 0,
                animateTo: -90
            });
        }
    );

    // 2.a
    $("article > input").on(
        "click", function () {
            $("section > span").offset();
        }
    );

    //Comienzo slider
    $(document).ready(function () {
        var SliderModule = (function () {
            var pb = {}; // Creamos un objeto
            pb.elslider = $('#slider');
            pb.items = {
                panels: pb.elslider.find('.slider-wrapper > li')
            };

            var SliderInterval,
                currentSlider = 0,
                lengthSlider = pb.items.panels.length;

            pb.init = function (settings) {
                var loscontroles = '';

                SliderInit(); // Inicializar el slider

                pb.elslider.on({
                    mouseenter: function () {
                        clearInterval(SliderInterval);
                    },
                    mouseleave: function () {
                        SliderInit();
                    }
                }, '.slider-wrapper li');

                for (var i = 0; i < lengthSlider; i++) {
                    if (i == 0) {
                        loscontroles += '<li class="active"></li>';
                    } else {
                        loscontroles += '<li></li>';
                    }
                }

                $('#control-buttons').html(loscontroles);

                $('#control-buttons li').on("click", function () {
                    if (currentSlider !== $(this).index()) {
                        cambiarPanel($(this).index());
                    }
                });

                $('.control-prev').on('click', function () {
                    cambiarPanel(currentSlider - 1);
                });

                $('.control-next').on('click', function () {
                    cambiarPanel(currentSlider + 1);
                });

                $('#control-buttons li').on("mouseenter", function () {
                    var indice = $(this).index();
                    var imagenSrc = pb.items.panels.eq(indice).find('img').attr('src');
                    var preview = $('<div class="preview"><img src="' + imagenSrc + '" width="40" height="40"></div>');
                    preview.appendTo('body').css({
                        'position': 'absolute',
                        'top': $(this).offset().top - 45,
                        'left': $(this).offset().left - 15
                    });
                });
                $('#control-buttons li').on("mouseleave", function () {
                    $('.preview').remove();
                });
            };



            var SliderInit = function () {
                clearInterval(SliderInterval);
                SliderInterval = setInterval(pb.startSlider, 3000);
            };

            pb.startSlider = function () {
                var paneles = pb.items.panels;
                var controles = $('#control-buttons li');

                var nextSlider = currentSlider + 1;

                if (nextSlider >= lengthSlider) {
                    nextSlider = 0;
                }

                controles.removeClass('active');
                controles.eq(nextSlider).addClass('active');

                paneles.eq(currentSlider).animate({ left: '-100%' }, 'slow', function () {
                    $(this).css('left', '100%');
                });
                paneles.eq(nextSlider).css('left', '100%').animate({ left: '0' }, 'slow');


                currentSlider = nextSlider;
            };

            var cambiarPanel = function (indice) {
                clearInterval(SliderInterval);

                var paneles = pb.items.panels;
                var controles = $('#control-buttons li');

                if (indice >= lengthSlider) {
                    indice = 0;
                } else if (indice < 0) {
                    indice = lengthSlider - 1;
                }

                controles.removeClass('active');
                controles.eq(indice).addClass('active');

                paneles.eq(currentSlider).animate({ left: '-100%' }, 'slow', function () {
                    $(this).css('left', '100%');
                });
                paneles.eq(indice).css('left', '100%').animate({ left: '0' }, 'slow');

                currentSlider = indice;

                SliderInit();
            };

            return pb;
        }());

        SliderModule.init();
    });
    //Fin slider

})
// 1.h
$(window).resize(function () {

});