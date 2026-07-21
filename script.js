let audio = document.getElementById("audio");
let volume = document.getElementById("volume");

let songs = [
    "Naat 1.mp3",
    "Naat 2.mp3",
    "songs/song3.mp3",
    "songs/song4.mp3",
    "songs/song5.mp3",
    "songs/song6.mp3"
];

let currentSong = 0;

// Play / Pause

function playPause(){

    if(audio.paused){
        audio.play();
    }
    else{
        audio.pause();
    }

}

// Select song from playlist

function playSong(src, element){

    audio.src = src;
    audio.play();

    currentSong = songs.indexOf(src);

    showSongName(src);

    document.querySelectorAll("#playlist li")
    .forEach(item=>{
        item.classList.remove("active");
    });

    element.classList.add("active");

}

// Next Song

function nextSong(){

    currentSong++;

    if(currentSong >= songs.length){
        currentSong = 0;
    }

    loadSong();

}

// Previous Song

function previousSong(){

    currentSong--;

    if(currentSong < 0){
        currentSong = songs.length - 1;
    }

    loadSong();

}

// Load song

function loadSong(){

    audio.src = songs[currentSong];

    audio.play();

    showSongName(songs[currentSong]);

    let playlist = document.querySelectorAll("#playlist li");

    playlist.forEach(item=>{
        item.classList.remove("active");
    });

    playlist[currentSong].classList.add("active");

}

// Show current song

function showSongName(song){

    let name = song.split("/").pop();

    document.getElementById("nowPlaying").innerText =
    "Now Playing: " + name;

}

// Volume

volume.oninput = function(){

    audio.volume = this.value;

    document.getElementById("volumeValue").innerText =
    Math.round(this.value * 100) + "%";

}

// Default volume

audio.volume = 0.5;
volume.value = 0.5;

// Auto next song after finish

audio.onended = function(){

    nextSong();

};
let playButton = document.querySelector(".controls button:nth-child(2)");

function playPause(){

    if(audio.paused){

        audio.play();
        playButton.innerHTML = "⏸";

    }
    else{

        audio.pause();
        playButton.innerHTML = "▶";

    }

}