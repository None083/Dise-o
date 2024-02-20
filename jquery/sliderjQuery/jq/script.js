$(document).ready(function () {
    var SliderModule = (function () {
        var pb = {}; //Creamos un objeto
        //Almacenamos nuestro #slider en el atributo elslider
        pb.elslider = $('#slider');
        //El atributo item es un array que almacena los paneles del slider
        pb.items = {
            panels: pb.elslider.find('.slider-wrapper > li')
        }

        var SliderInterval,
            currentSlider = 0,
            nextSlider = 1,
            lengthSlider = pb.items.panels.length;

        //Constructor del slider
        pb.init = function (settings) {
            var loscontroles = '';

            //console.log('Inicializando');
            SliderInit();//Para inicializar el slider

            for (var i = 0; i < lengthSlider; i++) {
                if (i == 0) {
                    loscontroles += '<li class="active"></li>';
                }else{
                    loscontroles += '<li></li>';
                }
            }

            $('#control-buttons').html(loscontroles);

            $('#control-buttons li').on({
                "click": function () {
                    //console.log($(this).index());
                    //Al hacer clic vemos en la consola el índice
                    if (currentSlider !== $(this).index()) {
                        cambiarPanel($(this).index());
                    }
                }
            })
        }

        var SliderInit = function () {
            SliderInterval = setInterval(pb.startSlider, 3000);
        }

        pb.startSlider = function () {
            var paneles = pb.items.panels;
            var controles = $('#control-buttons li');

            //Controlamos si nos encontramos en el último panel
            if (nextSlider >= lengthSlider) {
                nextSlider = 0;
            }
            //Efectos
            //Eliminamos la clase en todos los controles
            controles.removeClass('active');
            //Añadimos la clase al control del panel seleccionado
            controles.eq(nextSlider).addClass('active');

            //Efectos de transición
            paneles.eq(currentSlider).fadeOut('slow');
            paneles.eq(nextSlider).fadeIn('slow');

            //Actualizamos las variables
            currentSlider = nextSlider;
            nextSlider += 1;
        }

        //Función para los controles del Slider
        //Recibe el índice del panel a mostrar
        var cambiarPanel = function (indice) {
            //Limpiear intervalo previamente
            clearInterval(SliderInterval);

            var paneles = pb.items.panels;
            var controles = $('#control-buttons li');

            //Comprobamos que el índice está disponible
            //dentro de los paneles del slider
            if (indice >= lengthSlider) {
                indice = 0; //Para que no se pase de la cantidad de imágenes
            } else if (indice < 0) {
                indice = lengthSlider - 1;
            }

            //Eliminamos la clase en todos los controles
            controles.removeClass('active');
            //Añadimos la clase al control del panel seleccionado
            controles.eq(indice).addClass('active');

            //Efectos de transición
            paneles.eq(currentSlider).fadeOut('slow');
            //El sigiente panel del slider es elñ que indique
            //el parámetro "índice"
            paneles.eq(indice).fadeIn('slow');

            //Actualizamos los datos
            currentSlider = indice;
            nextSlider = indice + 1;

            //Reactivar slider
            SliderInit();
        }

        return pb;
    }());
    SliderModule.init();
});