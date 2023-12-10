$(document).ready(function() {
var video = document.getElementById('videoo');
var play = document.getElementById('play');
var pause = document.getElementById('pause');
var stop = document.getElementById('stop');
var reinicio = document.getElementById("reiniciar");
var muted = document.getElementById("muted");
var desmutear = document.getElementById("desmutear");
var volumen = document.getElementById("volumen");
var barrita = document.getElementById("barrita");
var fullscreen = document.getElementById("fullscreen");
var tiempototal = document.getElementById("tiempototal");
var tiempoactual = document.getElementById("tiempoactual");
var atras=document.getElementById("atras")
var adelantar=document.getElementById("adelantar")
var frenar=document.getElementById("frenar")
var acelerar=document.getElementById("acelerar")
tiempototal.innerHTML = video.duration;
video.addEventListener('loadeddata', function (event) {
    tiempototal.innerHTML = parseInt(event.target.duration);
    tiempoactual.innerHTML = 0;
})
play.addEventListener('click', function (event) {
    pause.className = "visible";
    play.className = "oculto";
    video.play();
}, false);

pause.addEventListener('click', function (event) {
    video.pause();
    pause.className = "oculto";
    play.className = "visible";
}, false);

reinicio.addEventListener("click", function (event) {
    video.currentTime = 0;
    video.play();
    pause.className = "visible";
    play.className = "oculto";
    barrita.value = 0;
}, false);
stop.addEventListener('click', function (event) {
    video.pause();
    video.currentTime = 0;
    pause.className = "oculto";
    play.className = "visible";
    barrita.value = 0;
}, false)
video.addEventListener("timeupdate", function (event) {
    barrita.value = (event.target.currentTime / event.target.duration) * 100;
    tiempoactual.innerHTML = parseInt(event.target.currentTime);
})
barrita.addEventListener("change", function (event) {
    video.currentTime = (event.currentTarget.value * video.duration) / 100;
})

var volAnterior = 0;
muted.addEventListener('click', function (event) {
    if (video.volume != 0) {
        volAnterior = video.volume;
        video.volume = 0;
        document.getElementById("muted").className = "oculto";
        document.getElementById("desmutear").className = "visible";
        volumen.value = 0;
    }
}, false);
desmutear.addEventListener('click', function (event) {
    video.volume = volAnterior;
    document.getElementById("muted").className = "visible";
    document.getElementById("desmutear").className = "oculto";
    volumen.value = video.volume * 100;

}, false);


volumen.addEventListener('change', function (event) {
    video.volume = event.currentTarget.value / 100;
    if (video.volume == 0) {
        document.getElementById("muted").className = "oculto";
        document.getElementById("desmutear").className = "visible";
    } else {
        document.getElementById("muted").className = "visible";
        document.getElementById("desmutear").className = "oculto";
    }


}, false);

fullscreen.addEventListener('click', function (event) {
    video.requestFullscreen();
})
atras.addEventListener('click',function(event){
    video.currentTime=video.currentTime-5;
})
adelantar.addEventListener('click',function(event){
    video.currentTime=video.currentTime+5;
})
frenar.addEventListener('click',function(event){
    video.playbackRate=video.playbackRate-0.1;
})
acelerar.addEventListener('click',function(event){
    video.playbackRate=video.playbackRate+0.1;
})

})