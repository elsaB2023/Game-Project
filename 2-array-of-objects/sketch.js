

let Balls = [];
let mySound;
var xCoord1 = 0;
var yCoord1 = 0;
var xCoord2 = 0;
var yCoord2 = 0;

function preload() {
  soundFormats('mp3', 'ogg');
  mySound = loadSound('water.mp3');
}


function setup() {
  createCanvas(1000, 400);
 xCoord2 = 0;
 yCoord2 = height / 2;
  //drawBackground();

}

function draw(){
	background(0);
	translate(0,0)
	scale(5.0)
	cloud(15,25,1);
	cloud(50,25,1);

	for (let i = 0; i < Balls.length; i++) {
	    Balls[i].drawBall();
      Balls[i].moveBall();
	  }
}

function keyPressed(){

	if (keyCode === LEFT_ARROW) {
		let  b = new Ball(random(15,75),30);
		Balls.push(b);
		print(Balls);
		mySound.setVolume(0.1);
		mySound.play();
	  } else if (keyCode === RIGHT_ARROW) {
		lightning();
		}
}


class Ball {

	constructor(x,y){ 
		    this.x = x;
    		this.y = y;
	}

	drawBall(){ 
    		noStroke();
    		fill("#01c2cb");
		    ellipse(this.x,this.y,2,2);
	}

	moveBall(){ 
		this.y = this.y+.5;
	}
}

function cloud(x, y, size) {
	fill(255, 255, 255);
	noStroke();
	arc(x, y, 25 * size, 20 * size, PI + TWO_PI, TWO_PI);
	arc(x + 10, y, 25 * size, 45 * size, PI + TWO_PI, TWO_PI);
	arc(x + 25, y, 25 * size, 35 * size, PI + TWO_PI, TWO_PI);
	arc(x + 40, y, 30 * size, 20 * size, PI + TWO_PI, TWO_PI);
}

function setup() {
  createCanvas(400, 400);
  drawBackground();
  xCoord2 = 0;
  yCoord2 = height / 2;
}

function drawBackground() {
  for (var i = 0; i < 500; i++) {
    stroke(i - 255, 30, 50);
    line(0, i, width, i);
  }
}

function lightning() {
	for (var i = 0; i < 200; i++) {
	  xCoord1 = xCoord2;
	  yCoord1 = yCoord2;
	  xCoord2 = xCoord1 + int(random(-20, 20));
	  yCoord2 = yCoord1 + int(random(-10, 20));
	  strokeWeight(random(1, 3));
	  strokeJoin(MITER);
	  line(xCoord1, yCoord1, xCoord2, yCoord2);
  
	  if ((xCoord2 > width) | (xCoord2 < 0) | (yCoord2 > height) | (yCoord2 < 0)) {
		clear();
		//drawBackground();
		xCoord2 = int(random(15,75));
		yCoord2 = 0;
		stroke(255, 255, random(0, 255));
	  }
	  print("i ran")
	}
}