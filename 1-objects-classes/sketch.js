
let b;
let anotherRain;
let kite;
let rain = [];

function setup() {
  createCanvas(800, 400);
  b = new Rain(0, 100,"red");   
anotherRain = new Rain(200,20,"green");



}
function keyPressed(){ 

  let raindrop = new Rain(random(400),100,"blue");
rain.push(raindrop);
print(rain);
}


function draw(){
	background(220);

 b.drawRain();
 b.moveRain();

 anotherRain.drawRain();
 anotherRain.moveRain();


 for (let i = 0; i < rain.length; i++){
  rain[i].drawRain();
     rain[i].moveRain();
 }

}





class Rain {

  constructor(x,y,color){ 
     this.x = x;
         this.y = y;
            this.color = color;
     }
     drawRain(){ 
      stroke(0);
      fill(this.color);
      ellipse(this.x,this.y,10,10);
}

moveRain(){ 
  this.y = this.y+2;
}
 }



