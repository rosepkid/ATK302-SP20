var x = 0;

function setup() {
  // put setup code here
  createCanvas(400, 400);
}

function draw() {
  // put drawing code here
  background('blue');
//  rect(x, 10, 10, 10);
fill('red') ;
textSize(35) ;
  text("Parasite!!", x, 40);
  x = x + 5;
  if (x > width) {
    x = 0;
  }
}
