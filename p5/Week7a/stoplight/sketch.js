var myState = 0;
var timer = 0 ;
var x = 0 ;
var velocity = 10 ;


function setup() {

  createCanvas(800, 800);

  rectMode(CENTER);
  ellipseMode(CENTER);

}

function draw() {
  fill('yellow');
  rect(width / 2, height / 2, 200, 500);


  switch (myState) {
    case 0: // red light
      fill('grey');
      ellipse(width / 2, height / 2, 150, 150);
      ellipse(width / 2, height / 2 + 160, 150, 150);
      fill('red');
      ellipse(width / 2, height / 2 - 160, 150, 150);
      velocity = 0 ;
      timer++ ;
      if (timer > 100) {
        timer = 0 ;
        myState = 1 ;
      }
      break;

    case 1: // green light
      fill('grey');
      ellipse(width / 2, height / 2, 150, 150);
      ellipse(width / 2, height / 2 - 160, 150, 150);
      fill("green");
      ellipse(width / 2, height / 2 + 160, 150, 150);
      velocity = 10 ;
      timer++ ;
      if (timer > 100) {
        timer = 0 ;
        myState = 2 ;
      }
      break;

    case 2: // yellow light
    fill('yellow') ;
      ellipse(width / 2, height / 2, 150, 150);
      fill('grey') ;
      ellipse(width / 2, height / 2 - 160, 150, 150);
      ellipse(width / 2, height / 2 + 160, 150, 150);
      velocity = 4 ;
      timer++ ;
      if (timer > 100) {
        timer = 0 ;
        myState = 0 ;
      }
      break;

  }  // end of switch statement

  rect(x, height-100, 50, 25) ;
  x = x + velocity ;
  if (x > width) {
    x = 0 ;
  }

}  // end of the draw function
