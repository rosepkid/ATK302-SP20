var myState = 0;
var timer = 0;
var x = 0 ;
var velocity = 10 ;


function setup() {
  // put setup code here
  rectMode(CENTER);
  ellipseMode(CENTER);
  createCanvas(800, 800) ;
}

function draw() {
  // put drawing code here
  // yellow rectangle
  rect(width / 2, height / 2, 150, 400);

  switch (myState) {
    case 0 // red light
    velocity = 0 ;
    break;

    case 1: // green light
      // ellipses ...
      timer++;
      if (timer > 200) {
        timer = 0;
        myState = 2;
      }
      velocity = 10 ;
      break;

    case 2: // yellow light
      fill('yellow');
      ellipse(width / 2, height / 2, 100, 100);
      fill('grey');
      ellipse(width / 2, height / 2 - 110, 100, 100);
      ellipse(width / 2, height / 2 + 110, 100, 100);

      velocity = 5 ; 
      break;

  }  // end of switch statement

  rect(x, height-100, 50, 25) ;
  ellipse(x, height-90, 25, 25) ;
  x = x + velocity ;
  if (x > width) {
    x = 0 ;
  }

}
