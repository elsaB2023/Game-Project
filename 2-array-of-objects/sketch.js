
//create an empty array called Rains

let Rains = [];

function setup() {
  createCanvas(1150, 400);

}

function draw(){
	background(220);
	translate(0,0)
	scale(5.0)
	cloud(15,25,1);
	cloud(50,25,1);
//	draw all the Rains in that array
	for (let i = 0; i < Rains.length; i++) {
	    Rains[i].drawRain();
      Rains[i].moveRain();
	  }
}

function keyPressed(){
  // todo: 
  //every time you push a key, make a new Rain from the Rain class and add it to the Rains array
  let  b = new Rain(random(15,75),30);
  Rains.push(b);
  print(Rains);

}

//Rain class from which to create new Rains with similar properties.
class Rain {

	constructor(x,y){ //every Rain needs an x value and a y value
		    this.x = x;
    		this.y = y;
	}

	drawRain(){  // draw a Rain on the screen at x,y
    		noStroke();
    		fill("#01c2cb");
		    ellipse(this.x,this.y,2,2);
	}

	moveRain(){ //update the location of the Rain, so it moves across the screen
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
