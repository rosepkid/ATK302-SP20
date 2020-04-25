var cars = [];
var frogPos;
var state = 0;
const maxTimer = 10 * 60 ;
const maxCars = 10 ;
var timer = maxTimer ;

function setup() {
  createCanvas(800, 800);

// spawn cars
  for (var i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }

  frogPos = createVector(width / 2, height - 100);
}

function draw() {

  switch (state) {
    case 0:
      background('red');
      textSize(24) ;
      text("welcome! Click to start!", 200, 200);
      break;

    case 1:
      game();
      timer-- ;
      if (timer <= 0) {
        state = 3 ; // they lost
      }
      break;

    case 2:
      background('blue');
      text("YOU WON!!!", 200, 200);
      break;

    case 3:
      background('orange');
      text("YOU LOST!!! TOO BAD.", 200, 200);
      break;

  }

}

function mouseReleased() {
  switch(state) {
    case 0:
    state = 1 ;
    break ;

    case 2: // win state
    resetGame() ;
    state = 0;
    break ;

    case 3: // lost state
    resetGame() ;
    state = 0 ;
    break ;

  }
}


function resetGame() {
  // reset cars array
  cars = [] ;
  for (var i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }

  timer = maxTimer ;

}


function game() {
  background('lightblue');

  for (var i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].drive();

    if (cars[i].pos.dist(frogPos) < 40) {
      cars.splice(i, 1);
    }

  }

  // if there are no more cars, go to win state
  if (cars.length == 0) {
    state = 2 ; // they won!!!
  }


  // frog
  fill('white');
  ellipse(frogPos.x, frogPos.y, 60, 60);
  checkForKeys();

  fill('white') ;
  var m = map(timer, 0, maxTimer, 0, width-20) ;
  console.log(m) ;
  rect(10, 10, m, 10) ;

}




function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x -= 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x += 5;
  if (keyIsDown(UP_ARROW)) frogPos.y -= 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y += 5;

}


// our Car class!!!!!
function Car() {
  // attributes
  this.pos = createVector(random(width), random(height));
  this.vel = createVector(random(-5, 5), random(-5, 5));
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);


  // methods
  this.display = function() {
    fill(this.r, this.g, this.b);
    rect(this.pos.x, this.pos.y, 50, 50);
  }

  this.drive = function() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }


}
