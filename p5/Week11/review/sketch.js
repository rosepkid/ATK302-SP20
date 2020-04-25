function setup() {
  // put setup code here
  createCanvas(500, 500);
  rectMode(CENTER);
  ellipseMode(CENTER);

}

function draw() {
  // put drawing code here
  background('lightblue');

  fill("red");
  ellipse(100, 100, 100, 100);
  ellipse(140, 140, 40, 40);
  ellipse(140, 60, 40, 40);
  ellipse(50, 130, 40, 40);

}
