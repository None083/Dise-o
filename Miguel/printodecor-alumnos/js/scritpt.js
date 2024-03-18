$(document).ready(function () { //Esto hace que aparezca la barra de insta... y el chat de ayuda
    $("nav#barra-social").fadeIn();
    $("nav#barra-social").css("position", "absolute");
    $("div#chat").fadeIn();

    //---------------------------------Slider-----------------------------//

    var SliderModule = (function () {
        var pb = {}; //<-- esto crea un objeto¿?
        pb.elslider = $("#slider"); //<-- esto almacena el id slider en el objeto
        pb.items = {
            panels: pb.elslider.find(".slider-wrapper > li") //<-- ¿?¿?¿?¿?¿?¿?¿?
        }
        var SliderInterval, //<-- intervalo de cambio
            currentSlider = 0, //<-- foto actual
            nextSlider = 1; //<-- foto siguiente
        lengthSlider = pb.items.panels.length; //<--longitud total 

        pb.init = function (settings) {
            this.settings = settings || { duration: 1500 };
            var loscontroles = '';
            SliderInit(); //<-- crea el constructor¿?¿?¿?¿?¿?

            for (var i = 0; i < lengthSlider; i++) { //Inicio
                if (i == 0) {
                    // var imgsource = $(pb.items.panels[i]).children("img").attr("src");
                    //console.log(imgsource);
                    loscontroles += '<img src="" class="active">';
                } else {
                    // var imgsource = $(pb.items.panels[i]).children("img").attr("src");
                    // console.log(imgsource);
                    loscontroles += '<img src="">'
                }
            }
            $("#control-buttons").html(loscontroles); //FIN Esto es lo que crea lo botones en tiempo de ejecucion (kinda?)

            $("#control-buttons img").click(function () { //Esto es lo que hace que cuando pulses cambie el boton
                if (currentSlider !== $(this).index()) {
                    cambiarPanel($(this).index());
                }
            });

            cambiarPanelBtnIz();
            cambiarPanelBtnDer();
            pararSlider();
            imagenesAbajo();


            $("#control-buttons img").mouseenter(function () { //preview de imagen

                var imgsource = $(pb.items.panels[$(this).index()]).children("img").attr("src");
                if ($(this).parent().parent().children("picture").children("img").attr("src", "")) {
                    $(this).parent().parent().children("picture").children("img").attr("src", imgsource);
                    $(this).parent().parent().children("picture").children("img").css("width", "120px");
                    $(this).parent().parent().children("picture").children("img").css("height", "120px");
                }
            });

            $("#control-buttons img").mouseleave(function () {
                $(this).parent().parent().children("picture").children("img").attr("src", "");
                $(this).parent().parent().children("picture").children("img").css("width", "0");
                $(this).parent().parent().children("picture").children("img").css("height", "0");
            })



        } /*Esto es el main (Supongo)*/

        var SliderInit = function () { //<-- define el constructor¿?¿?¿?¿?¿?
            SliderInterval = setInterval(pb.startSlider, pb.settings.duration);
        }

        /*Esto es el ejercicio 1*/
        var pararSlider = function () {
            $(".slider-wrapper > li").mouseenter(function () {
                clearInterval(SliderInterval);
                console.log("Sesupone que esto para");
            })

            $(".slider-wrapper > li").mouseleave(function () {
                SliderInit(); //NO ENTIENDO PORQUE NO FUNCIONA "setInterval(pb.startSlider, pb.settings.duration);" SI ES LA MISMA LINEA
                console.log("Se supone que estas fuera y deberia continuar");
            })
        }
        /*Esto es el ejercicio 1*/

        var imagenesAbajo = function () { //para los circulos imagenes
            var i = 0;
            $("#control-buttons img").each(function () {
                var imgsource = $(pb.items.panels[i]).children("img").attr("src");
                $(this).attr("src", imgsource)
                i++;
            })
        }

        pb.startSlider = function () { //<-- ¿?¿?¿?¿?¿?
            var paneles = pb.items.panels; //paneles del slider
            var controles = $("#control-buttons img");

            if (nextSlider >= lengthSlider) { //if para no hacer un outOfBounds y que pase al primero
                nextSlider = 0;
                currentSlider = lengthSlider - 1;
            }

            controles.removeClass("active");
            controles.eq(nextSlider).addClass("active");


            paneles.eq(currentSlider).fadeOut("slow");
            paneles.eq(nextSlider).fadeIn("slow");

            currentSlider = nextSlider;
            nextSlider++;
        }

        /*Esto es el ejercicio 2*/
        var cambiarPanelBtnIz = function () {
            $("input#botoniz").click(function () {
                var controles = $("#control-buttons img");
                clearInterval(SliderInterval);
                var paneles = pb.items.panels;
                var sliderAnterior = currentSlider - 1;
                if (sliderAnterior < 0) {
                    sliderAnterior = lengthSlider - 1;
                }
                controles.removeClass("active");
                controles.eq(sliderAnterior).addClass("active");


                paneles.eq(currentSlider).fadeOut("fast");
                paneles.eq(sliderAnterior).fadeIn("fast");

                currentSlider = sliderAnterior;
                nextSlider = sliderAnterior + 1;

                SliderInit();
            })
        }

        var cambiarPanelBtnDer = function () {
            $("input#botonder").click(function () {

                var controles = $("div>#control-buttons img");
                clearInterval(SliderInterval);
                var paneles = pb.items.panels;
                var sliderSiguiente = currentSlider + 1;
                if (sliderSiguiente >= lengthSlider) {
                    sliderSiguiente = 0;
                }
                controles.removeClass("active");
                controles.eq(sliderSiguiente).addClass("active");


                paneles.eq(currentSlider).fadeOut("slow");
                paneles.eq(sliderSiguiente).fadeIn("slow");

                currentSlider = sliderSiguiente;
                nextSlider = sliderSiguiente + 1;

                SliderInit();
            })
        }


        /*Esto es el ejercicio 2*/


        var cambiarPanel = function (indice) {
            var controles = $("#control-buttons img");
            clearInterval(SliderInterval);
            var paneles = pb.items.panels;
            if (indice >= lengthSlider) {
                indice = 0;
            } else if (indice < 0) {
                indice = lengthSlider - 1;
            }

            //Continuar a partir de aqui console.log(pb.items.panels); !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            controles.removeClass("active");
            controles.eq(indice).addClass("active");

            paneles.eq(currentSlider).fadeOut("slow");
            paneles.eq(indice).fadeIn("slow");

            currentSlider = indice;
            nextSlider = indice + 1;

            SliderInit();
        }

        return pb;

    }());

    SliderModule.init({ duration: 2000 });
    //---------------------------------Slider-----------------------------//

    $("div#hamburger").click(function (e) { //hamburguesa
        e.preventDefault();
        if ($(this).siblings().css("display") == "none") {
            $("div#hamburger span").stop(false, true).animate({ //Saca el menu cambia la hamburguesa color y hace larga la linea del centro 
                backgroundColor: "red"
            })
            $(this).siblings().stop(false, true).slideDown(400);

            $("div#hamburger > span:nth-child(2)").stop(false, true).animate({
                width: "1.90rem",
                backgroundColor: "red"
            })
        } else {
            $("div#hamburger span").stop(false, true).animate({ //Guarda el menu cambia la hamburguesa color y hace corta la linea del centro 
                backgroundColor: "black"
            })
            $("div#hamburger > span:nth-child(2)").stop(false, true).animate({
                width: "1.40rem",
                backgroundColor: "black"

            })
            $(this).siblings().stop(false, true).slideUp(400);
        }
    })

    $("ul#menu-toggle li:nth-child(3) > a,ul#menu-toggle li:nth-child(3) > span").click(function (e) { //menu dentro de menu

        if ($(this).siblings("ul").css("display") == "none") { //si esta invisible
            $(this).siblings("ul").fadeIn();
            $(this).siblings("ul").animate({ left: "0vw" }); //hace espacio para el menu y lo mueve

            $("ul#menu-toggle li:nth-child(3) > span").html("-"); //Cambia el mas al menos
        } else {
            $(this).siblings("ul").animate({ left: "-50vw" });
            $(this).siblings("ul").fadeOut(); //quita espacio para el menu y lo mueve

            $("ul#menu-toggle li:nth-child(3) > span").html("+"); //Cambia el menos al mas
        }
    })

    $(document).scroll(function () {
        if ($(document).scrollTop() >= 50) {
            $("ul#menu-toggle").slideUp(400); //Guarda el menu cuando se baja y resetea la hamburguesa
            $("div#hamburger span").stop(false, true).animate({
                backgroundColor: "black"
            })
            $("div#hamburger > span:nth-child(2)").stop(false, true).animate({
                width: "1.40rem",
                backgroundColor: "black"
            })
            $("header#home-header").css("position", "fixed"); //Deja la cabecera fija y hace aparecer el boton
            $("header#home-header").css("width", "100%");
            $("header#home-header").css("z-index", "3");
            $("#go-up").css("display", "inline");
        } else { //si la pagina esta arriba quita el fijo a la cabecera y el boton de subir arriba lo quita
            $("header#home-header").css("position", "");
            $("#go-up").css("display", "none");
        }
    })

    $(window).resize(function () { //Cuando redimensionas la pagina todo vuelve al status quo
        $("#hamburger").removeAttr("style");
        $('#menu-toggle').removeAttr("style");
        $('.line-ham').removeAttr("style");
        $("#menu-toggle li").children("ul").removeAttr("style");
    });

    $('#header-chat1').click(function () { //Cuando le pulsas a la cabecera al chat sale hacia arriba
        $(this).siblings("div").slideToggle();
        $(this).css("display", "none");
        $('#chat').children().eq(1).css("display", "flex");
    })

    $('#header-chat2 span').click(function () { //Cuando le pulsas a la cabecera al chat se oculta

        $("#header-chat2").siblings("div").slideToggle();
        $("#header-chat2").css("display", "none");
        $('#chat').children().eq(0).css("display", "flex");

    })

    $('#window-chat textarea').keyup(function () { //Cuando pulsas teclas se actualiza el numero de textarea
        var longitud = $(this).val().length;
        var restantes = 100 - longitud;
        $('#info-caracteres').html(" Dispone de " + restantes + " caracteres")
    })

    $('#window-chat input').focusout(function () { //Cuando se quita el focus si la longitud es 0 te salta un error
        if ($(this).val().length == 0) {
            $(this).next().css({ visibility: "visible" });
        }
        if ($(this).val().length > 0) {
            $(this).next().css({ visibility: "hidden" });
        }
    })

    $('section article.producto').mouseenter(function () { //para que salga y se oculte el boton
        $(this).children('a').stop(true, true).slideDown();
    })

    $('section article.producto').mouseleave(function () {
        $(this).children('a').stop(true, true).slideUp();
    })

    $('#go-up').click(function () { //Para subir la pagina

        $("html, body").animate({ scrollTop: 0 }, 1000);
    });

})