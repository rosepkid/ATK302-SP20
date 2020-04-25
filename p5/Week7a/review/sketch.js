var myState = 0 ;


function preload(){

}

function setup() {
  // put setup code here
  createCanvas(800, 800) ;
}

function draw() {
  // put drawing code here
  background('black') ;


    switch(myState){
      case 0:
      text("why did the chx", 100, 100) ;
      break ;

      case 1:
      text("cuz", 100, 100) ;
      break ;

    }
}

function mouseReleased() {
  myState = myState + 1 ;
  if (myState > 1) {
    myState = 0 ;
  }
}
