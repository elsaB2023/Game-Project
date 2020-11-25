
//Rain droplets array for cloud

let Balls = [];

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