
//create an empty array called Rains

let Rains = [];

function setup() {
  createCanvas(800, 400);

}

function draw(){
	background(220);

//	draw all the Rains in that array
	for (let i = 0; i < Rains.length; i++) {
	    Rains[i].drawRain();
      Rains[i].moveRain();
	  }
}

function keyPressed(){
  // todo: 
  //every time you push a key, make a new Rain from the Rain class and add it to the Rains array
  let  b = new Rain(100, 100);
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
    		stroke(0);
    		fill("red");
		    ellipse(this.x,this.y,10,10);
	}

	moveRain(){ //update the location of the Rain, so it moves across the screen
		this.x = this.x+2;
		this.y = this.y+.5;
	}


}
