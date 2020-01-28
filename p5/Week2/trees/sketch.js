function setup() {
  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(720, 400);

}

function draw() {
  // put drawing code here


  background(76, 200, 255);
  noStroke();

  fill('yellow');
  ellipse(100, 144, 72, 72);

fill(0) ;
textSize(40) ;
  text(mouseX + ", " + mouseY, 40, 40) ;


}
