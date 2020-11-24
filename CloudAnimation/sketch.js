
let Balls = [];
let myRain;
let myThunder;
var xCoord1 = 0;
var yCoord1 = 0;
var xCoord2 = 0;
var yCoord2 = 0;
let city;
let clear = false;

function preload() {
  soundFormats('mp3', 'ogg');
  myRain = loadSound('assets/water.mp3');
  myThunder = loadSound('assets/thunder.mp3');
  city = loadImage('assets/city.png');
}

function setup() {
  createCanvas(500, 400);
  scale(3.0);
  drawBackground();
}

function draw(){
    scale(3.0);
	for (let i = 0; i < Balls.length; i++) {
		Balls[i].drawBall();
		Balls[i].moveBall();
		if (clear==true){
			break;
		}
	  }
	cloud(15,25,1);
	cloud(50,25,1);
	clear = false;
}

function keyPressed(){

	if (keyCode === UP_ARROW) {
		myThunder.setVolume(0.01);
		myThunder.play();
		newLight();
	  } else if (keyCode === DOWN_ARROW) {
		let  b = new Ball(random(15,75),25);
		Balls.push(b);
		print(Balls);
		myRain.setVolume(1.0);
		myRain.play()
	  }	
	if (keyCode === RETURN){
		drawBackground();
		clear = true;	
	}
}
function cloud(x, y, size) {
	fill(20, 36, 63);
	noStroke();
	arc(x, y, 25 * size, 20 * size, PI + TWO_PI, TWO_PI);
	arc(x + 10, y, 25 * size, 45 * size, PI + TWO_PI, TWO_PI);
	arc(x + 25, y, 25 * size, 35 * size, PI + TWO_PI, TWO_PI);
	arc(x + 40, y, 30 * size, 20 * size, PI + TWO_PI, TWO_PI);
}

function drawBackground() {
  background(50);
  image(city,0, 0, 500/3, 420/3);
}

function newLight(){
	for (var i = 0; i < 40; i++) {
		xCoord1 = xCoord2;
		yCoord1 = yCoord2;
		xCoord2 = xCoord1 + int(random(-20, 20));
		yCoord2 = yCoord1 + int(random(-10, 20));
		strokeWeight(2);
		strokeJoin(MITER);
		line(xCoord1, yCoord1, xCoord2, yCoord2);
	
		if ((xCoord2 > width) | (xCoord2 < 0) | (yCoord2 > height) | (yCoord2 < 0)) {
		  xCoord2 = int(random(30, 70));
		  yCoord2 = 15;
		  stroke(253, 175, 22);
		}
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




