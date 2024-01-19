document.addEventListener("DOMContentLoaded", function(event) {
    var audio=document.getElementById('audio');
    var play=document.getElementById('play');
    var pause=document.getElementById('pause');
    var stop=document.getElementById('stop');
    var restart=document.getElementById('restart');
    var range=document.getElementById('range');
    var mute=document.getElementById('mute');

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

    mute.addEventListener('click', function(){
        if(mute.className=="muteado"){
            mute.className="boton unmuted";
            audio.volume=0;
            volume.value=0;
        } else{
            mute.className="muteado";
        }
    });

    volume.addEventListener('change', function(event){
        audio.volume=volume.value/100;
    })

})