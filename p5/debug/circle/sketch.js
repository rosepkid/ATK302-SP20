var c ;

function setup() {
  // put setup code here
  c = createCanvas(500, 500);
}

function draw() {
  // put drawing code here

  ellipse(mouseX, mouseY, 100, 100) ;

}

function mouseReleased() {
  saveCanvas(c, 'VIRUSATTACK', 'jpg');
}
