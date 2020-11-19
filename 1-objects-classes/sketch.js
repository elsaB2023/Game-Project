let Ball = [];

function setup() {
  createCanvas(800, 400);
}
function keyPressed(){ 

let Balldrop = new Ball(random(400),100,"blue");
Ball.push(Balldrop);
print(Ball);
}


function draw(){
	background(220);

}

class Ball {

  constructor(x,y,color){ 
     this.x = x;
     this.y = y;
     this.color = color;
     }
     drawBall(){ 
      //noStroke();
      fill(this.color);
      ellipse(this.x,this.y,10,10);
}

moveBall(){ 
  this.y = this.y+2;
  }
}



