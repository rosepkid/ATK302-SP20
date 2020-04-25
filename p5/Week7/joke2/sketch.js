var myState = 0;
var timer = 0 ;

function setup() {
  // put setup code here
  createCanvas(800, 800);
}

function draw() {
  // put drawing code here
  background('black');

  switch (myState) {

    case 0:
      text("why did the chicken?", 100, 100);
      timer++ ;
      if (timer > 200) {
        myState = 1 ;
        timer = 0 ;
      }
      break;

    case 1:
      text("because", 100, 100);
      timer++ ;
      if (timer > 200) {
        myState = 0 ;
        timer = 0 ;
      }
      
      break;


  }

}
