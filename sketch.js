var t=255 //variable for ellipse
var txt=0 //variable for text
var lite=100 //variable for line
var circ=20 //variable for mouse 

function setup() { //The setup function only happens once
	createCanvas(500, 500); //create a 500px X 500px canvas
  frameRate(80); //time of line moving across screen
}


function draw() { //The draw function happens over and over again
  background(21,54,92); //an RGB color for the canvas' background

  stroke(32,37,82,t); // an RGB color for the circle's border
  fill(88,60,122,t); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(width/2,height/2,400,400); //location and size of circle

  stroke(212,210,119,txt); //rgb color for text outline
  fill(212,210,119,txt); //rgb color for text
  textSize(40);
  textFont("Oswald");
  text("broadcast", width/2.75,height/2); //word and location on canvas

  //line loop code
  lite=lite-3 
  if(lite<0) {
  	lite=500;
  }
    line(0,lite,500,lite);

  //code for mouse
  stroke(206,178,212);
  fill(206,178,212);
  ellipse(mouseX,mouseY,circ,circ);

}

function mousePressed() {
	t=t-30 //circle opacity lowering when mousePressed
	txt=txt+30 //text appearing when mousePressed 
}