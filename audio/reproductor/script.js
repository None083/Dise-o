document.addEventListener('DOMContentLoaded', function () {
    const musicPlayer = document.getElementById('musicPlayer');
    const audioPlayer = new Audio();
    audioPlayer.controls = true;

    musicPlayer.appendChild(audioPlayer);

    const playButton = document.createElement('button');
    playButton.textContent = 'Play';
    playButton.addEventListener('click', function () {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playButton.textContent = 'Pause';
        } else {
            audioPlayer.pause();
            playButton.textContent = 'Play';
        }
    });

    const stopButton = document.createElement('button');
    stopButton.textContent = 'Stop';
    stopButton.addEventListener('click', function () {
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
        playButton.textContent = 'Play';
    });

    musicPlayer.appendChild(playButton);
    musicPlayer.appendChild(stopButton);
});
