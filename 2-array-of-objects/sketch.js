
//create an empty array called Balls

let Balls = [];

function setup() {
  createCanvas(1150, 400);

}

function draw(){
	background(220);
	translate(0,0)
	scale(5.0)
	cloud(15,25,1);
	cloud(50,25,1);
//	draw all the Balls in that array
	for (let i = 0; i < Balls.length; i++) {
	    Balls[i].drawBall();
      Balls[i].moveBall();
	  }
}

function keyPressed(){
  // todo: 
  //every time you push a key, make a new Ball from the Ball class and add it to the Balls array
  let  b = new Ball(random(15,75),30);
  Balls.push(b);
  print(Balls);

}

//Ball class from which to create new Balls with similar properties.
class Ball {

	constructor(x,y){ //every Ball needs an x value and a y value
		    this.x = x;
    		this.y = y;
	}

	drawBall(){  // draw a Ball on the screen at x,y
    		noStroke();
    		fill("#01c2cb");
		    ellipse(this.x,this.y,2,2);
	}

	moveBall(){ //update the location of the Ball, so it moves across the screen
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
