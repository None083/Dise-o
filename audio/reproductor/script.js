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
        play.className="oculto";
        pause.className="visible";
    },false);

    pause.addEventListener('click', function(event){
        audio.pause();
        pause.className="oculto";
        play.className="visible";
    },false);

    stop.addEventListener('click', function(event){
        audio.pause();
        audio.currentTime=0;
        pause.className="oculto";
        play.className="visible";
    },false);

    restart.addEventListener('click', function(event){
        audio.play();
        audio.currentTime=0;
        play.className="oculto";
        pause.className="visible";
    },false);

    mute.addEventListener('click', function(event){
        audio.volume=0;
        volume.value=0;
    },false);

    volume.addEventListener('change', function(event){
        audio.volume=volume.value/100;
    })

})