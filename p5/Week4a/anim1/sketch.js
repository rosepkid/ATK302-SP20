var x = 0 ;

function setup() {
  // put setup code here
  createCanvas(200, 800);
}

function draw() {
  // put drawing code here
  background('brown');
  ellipse(x, 100, 100, 100);
  x = (x + 10) % width ;

}
