// GET HTML ELEMENTS
let audio = document.getElementById("audio");
let playBtn = document.getElementById("playBtn");
let volume = document.getElementById("volume");
let volumeValue = document.getElementById("volumeValue");
let nowPlaying = document.getElementById("nowPlaying");
let playlistUI = document.getElementById("playlist");

// SONG LIST
let songs = [
    "Naat 1.mp3",
    "Naat 2.mp3",
    "songs/song3.mp3",
    "songs/song4.mp3"
];

// CURRENT SONG INDEX
let currentSong = 0;

// CREATE PLAYLIST UI AUTOMATICALLY
songs.forEach((song, index) => {
    let li = document.createElement("li");
    li.innerText = song;

    // CLICK → PLAY SONG
    li.onclick = () => {
        currentSong = index;
        loadSong();
    };

    playlistUI.appendChild(li);
});

// LOAD SONG FUNCTION
function loadSong() {
    audio.src = songs[currentSong];
    audio.play();

    // UPDATE TEXT
    nowPlaying.innerText = "Now Playing: " + songs[currentSong];

    // UPDATE ACTIVE CLASS
    document.querySelectorAll("#playlist li").forEach(li => li.classList.remove("active"));
    playlistUI.children[currentSong].classList.add("active");
}

// PLAY / PAUSE TOGGLE
function playPause() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

// CHANGE BUTTON ICON
audio.onplay = () => playBtn.innerHTML = "⏸";
audio.onpause = () => playBtn.innerHTML = "▶";

// NEXT SONG
function nextSong() {
    currentSong = (currentSong + 1) % songs.length;
    loadSong();
}

// PREVIOUS SONG
function previousSong() {
    currentSong = (currentSong - 1 + songs.length) % songs.length;
    loadSong();
}

// VOLUME CONTROL
volume.oninput = function() {
    audio.volume = this.value;
    volumeValue.innerText = Math.round(this.value * 100) + "%";
};

// DEFAULT VOLUME
audio.volume = 0.5;
