
let myRain;
let myThunder;
let city;
let clear = false;
let pause;
let play;
let myPiano;

function preload() {
  soundFormats('mp3', 'ogg');
  myRain = loadSound('./assets/water.mp3');
  myThunder = loadSound('./assets/thunder.mp3');
  city = loadImage('./assets/city.png');
  pause = loadImage('./assets/pause.svg');
  play = loadImage('./assets/play.svg');
  myPiano = loadSound('./assets/piano.mp3');
}

function setup() {
  createCanvas(500, 400);
  scale(3.0);
  drawBackground();
  image(play,2, 2, 7, 7);
}

function draw(){
    scale(3.0);
	for (let i = 0; i < Balls.length; i++) {
		if (clear==true){ // when click return then clear == true and clears screen
			Balls.splice(0, Balls.length); // deletes array objects
			break; // jumps out of loop and finishes code
		 }
		 Balls[i].drawBall();
		Balls[i].moveBall();
	  }
	cloud(15,25,1);
	cloud(50,25,1);
}

function keyPressed(){
	if (keyCode === UP_ARROW) { // lightning plays
		myThunder.setVolume(0.1);
		myThunder.play();
		lightning();
	  } else if (keyCode === DOWN_ARROW) { // rain plays
		clear = false;
		let  b = new Ball(random(15,75),25);
		Balls.push(b);
		myRain.setVolume(1.0);
		myRain.play()
	  }	
	if (keyCode === RETURN){ // screen is cleared
		drawBackground();
		clear = true;	
	}
}

function mousePressed(){ // music play and pause when clicked
	let d = dist(mouseX, mouseY, 5, 7);
  if (d < 20) {
	if (myPiano.isPlaying()) {
		image(play,2, 2, 7, 7);
		myPiano.stop();
	  } else {
		image(pause,2, 2, 7, 7);
		myPiano.play();
		myPiano.loop();
	  }
  }
}


