document.addEventListener("DOMContentLoaded", function(event) {
    var audio=document.getElementById('audio');
    var play=document.getElementById('play');
    var pause=document.getElementById('pause');
    var stop=document.getElementById('stop');
    var restart=document.getElementById('restart');
    var volume=document.getElementById('volume');
    var muted=document.getElementById('muted');
    var unmuted=document.getElementById('unmuted');
    var progress=document.getElementById('progress');

    play.addEventListener('click', function(event){
        audio.play();
        play.className="oculto boton";
        pause.className="visible boton";
    },false);

    pause.addEventListener('click', function(event){
        audio.pause();
        pause.className="oculto boton";
        play.className="visible boton";
    },false);

    stop.addEventListener('click', function(event){
        audio.pause();
        audio.currentTime=0;
        pause.className="oculto boton";
        play.className="visible boton";
    },false);

    restart.addEventListener('click', function(event){
        audio.play();
        audio.currentTime=0;
        play.className="oculto boton";
        pause.className="visible boton";
    },false);

    unmuted.addEventListener('click', function(event){
        audio.volume=0;
        volume.value=0;
        unmuted.className="oculto boton";
        muted.className="visible boton";
    });

    muted.addEventListener('click', function(event){
        audio.volume=50/100;
        volume.value=50;
        unmuted.className="visible boton";
        muted.className="oculto boton";
    });

    volume.addEventListener('change', function(event){
        audio.volume=volume.value/100;
    });

    audio.addEventListener('timeupdate', function(){
        progress.value=(audio.currentTime/audio.duration)*200;
    });

    progress.addEventListener('change', function(){
        audio.currentTime=(progress.value/200)*audio.duration;
    })

})