function setup() {
  // put setup code here
  createCanvas(1000, 800) ;
  rectMode(CENTER) ;
  ellipseMode(CENTER) ;
}

function draw() {
  // put drawing code here
  background(100) ;
  // stuff that we always want to show


  if (mouseIsPressed) {
    // stuff that shows when the mouse is pressed
      ellipse(50, 50, 50, 50);

    } else {
      // when the mouse isn't pressed!
      rect(50, 50, 50, 50);
    }

    fill(0) ;
    textSize(40) ;
      text(mouseX.toFixed(0) + ", " + mouseY, 40, 40) ;
}



function mouseReleased() {
  console.log(mouseX + ", " + mouseY) ;
}
