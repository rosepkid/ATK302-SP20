var blue;
var capo;
var ninja;

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight) ;
  imageMode(CENTER) ;

  blue = loadImage("assets/blue.jpg");
  capo = loadImage("assets/capoeirista.jpg");
  ninja = loadImage("assets/ninja1.jpg");
}

function draw() {
  // put drawing code here
  image(blue, width/2, 0, 200, 200) ;
  image(capo, width/2, 200, 200, 200) ;
  image(ninja, width/2, 400, 200, 200) ;

}
