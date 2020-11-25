
function drawBackground() {
    background(50);
    image(city,0, 0, 500/3, 420/3);
    if (myPiano.isPlaying()) {
      image(pause,2, 2, 7, 7);
    } else {
      image(play,2, 2, 7, 7);
    }
  }