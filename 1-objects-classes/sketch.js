let rain = [];

function setup() {
  createCanvas(800, 400);
}
function keyPressed(){ 

let raindrop = new Rain(random(400),100,"blue");
rain.push(raindrop);
print(rain);
}


function draw(){
	background(220);

}

class Rain {

  constructor(x,y,color){ 
     this.x = x;
     this.y = y;
     this.color = color;
     }
     drawRain(){ 
      //noStroke();
      fill(this.color);
      ellipse(this.x,this.y,10,10);
}

moveRain(){ 
  this.y = this.y+2;
  }
}



