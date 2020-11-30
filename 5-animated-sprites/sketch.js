// Creating animations
//
// animations like p5 images should be stored in variables
// in order to be displayed during the draw cycle
var ghost;
var fire;
var plant;
//
// //it's advisable (but not necessary) to load the images in the preload function
// //of your sketch otherwise they may appear with a little delay
function preload() {
//
//   //create an animation from a sequence of numbered images
//   //pass the first and the last file name and it will try to find the ones in between
  ghost = loadAnimation('assets/ghost_standing0001.png', 'assets/ghost_standing0007.png');
  //fire = loadAnimation('assets/fire/fire0001.png', 'assets/fire/fire0013.png');
  plant= loadAnimation('assets/plant/plant0000.png', 'assets/plant/plant0005.png');

}

function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(200, 255, 255);
  
  //specify the animation instance and its x,y position
  //animation() will update the animation frame as well
  //animation(ghost, 300, 150);
  //animation(fire, 400, 50);
    animation(plant, 300, 150);


}
