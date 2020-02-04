var blue;
var capo;
var ninja;

function setup() {
  // put setup code here
  createCanvas(800, 800) ;

  blue = loadImage("assets/blue.jpg");
  capo = loadImage("assets/capoeirista.jpg");
  ninja = loadImage("assets/ninja1.jpg");
}

function draw() {
  // put drawing code here
  image(blue, 0, 0, 200, 200) ;
  image(capo, 0, 200, 200, 200) ;
  image(ninja, 0, 400, 200, 200) ;

}
