var xCoord1 = 0;
var yCoord1 = 0;
var xCoord2 = 0;
var yCoord2 = 0;

function lightning(){
	for (var i = 0; i < 40; i++) {
		xCoord1 = xCoord2;
		yCoord1 = yCoord2;
		xCoord2 = xCoord1 + int(random(-20, 20));
		yCoord2 = yCoord1 + int(random(-10, 20));
		strokeWeight(2);
		strokeJoin(MITER);
		line(xCoord1, yCoord1, xCoord2, yCoord2);
	
		if ((xCoord2 > 100) | (xCoord2 < 0) | (yCoord2 > 300) | (yCoord2 < 0)) {
		  xCoord2 = int(random(30, 100));
		  print(xCoord2);
		  yCoord2 = 15;
		  stroke(253, 175, 22);
		}
	}
}