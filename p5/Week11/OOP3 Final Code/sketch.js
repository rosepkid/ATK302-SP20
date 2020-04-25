var myCar ;

function setup() {
  createCanvas(800, 800);
  myCar = new Car() ;
}

function draw() {
  background('lightblue');

  myCar.display() ;
  myCar.drive() ;

}

// our Car class!!!!!
function Car() {
  // attributes
  this.x = 100;

  // methods
  this.display = function() {
    rect(this.x, 100, 100, 100) ;
  }

  this.drive = function() {
    this.x = this.x + 5 ;
    if (this.x > width) {
      this.x = 0 
    }
  }


}
