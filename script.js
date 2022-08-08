const music = document.querySelector('audio');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

// Play
const playSong = () => {
    music.play();
}

// Pause
const pauseSong = () => {
    music.pause();
}