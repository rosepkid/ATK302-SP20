function setup() {
  // put setup code here
  createCanvas(720, 400);
}

function draw() {
  // put drawing code here
  background('#1f52ed');
  noStroke();

  fill(240, 233, 38);
  ellipse(100, 200, 150, 150);
  fill('brown');
  rect(585, 200, 45, 375);
  fill('white');
  ellipse(275, 49, 150, 100);
  fill('white');
  ellipse(390, 44, 150, 100);
  // tree leaves
  fill('green');
  ellipse(600, 130, 200, 200);

  fill(0);
  textSize(30);
  text(mouseX + ", " + mouseY, 50, 50);

}
