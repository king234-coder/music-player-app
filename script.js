let audio = document.getElementById("audio");
let volume = document.getElementById("volume");

// play/pause
function playPause() {
  if (audio.paused) audio.play();
  else audio.pause();
}

// play selected song
function playSong(element) {
  let src = element.getAttribute("data-src");

  audio.src = src;
  audio.play();

  // extract file name
  let name = src.split("/").pop().replace(".mp3", "");

  // update now playing
  document.getElementById("nowPlaying").innerText =
    "Now Playing: " + name;

  // active class
  document.querySelectorAll("#playlist li").forEach(li =>
    li.classList.remove("active")
  );
  element.classList.add("active");
}

// volume
volume.oninput = () => {
  audio.volume = volume.value;
};

// default
audio.volume = 0.5;
volume.value = 0.5;

// AUTO SET NAMES IN PLAYLIST
document.querySelectorAll("#playlist li").forEach(li => {
  let src = li.getAttribute("data-src");
  let name = src.split("/").pop().replace(".mp3", "");
  li.innerText = name;
});