var myCar; // declare an object

function setup() {
  createCanvas(800, 800);
  myCar = new Car(); // spawn one object
}

function draw() {
  background(100);

  myCar.display();
  myCar.drive();

}

// our Car class!!!!!
function Car() {
  // attributes
  this.x = random(width);

  // methods
  this.display = function() {
  rect(this.x, 100, 100, 50);

  }

  this.drive = function() {

  }
}
