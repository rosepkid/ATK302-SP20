var namesArray = [];

var pizza3;
var steak;
var beef;
var cheese;

var img;

var foodListArray = [{
    food: "Pizza3",  // You can change these numbers!
    fileName: "pizzaImage.png",  // you can change these names!
    pic: image1,  // this you do not have to change.
  },
  {
    appid: "391540",
    fileName: "image2.png",
    pic: image2
  },

function setup() {

  // pizza3 = loadImage("assets/pizza3.jpeg");
  // steak = loadImage("assets/steak.jpg");
  // beef = loadImage("assets/beef.jpg");
  // cheese = loadImage("assets/cheese.jpeg");
  //
  // Tabletop stuff, for getting google spreadsheet data in.
  let url = '1gtcj2cjvvf8IrLA2kIpgd6T3Jqh5XrDpkeKrMq3xGO8'; // this is KEY of the URL from the sheet
  let settings = {
    key: url, // The url of the published google sheet
    callback: gotData, // A callback for when the data comes in
    simpleSheet: true // This makes things simpler for just a single worksheet of rows
  };

  Tabletop.init(settings); // Grab the data from the spreadsheet!
  // End Tabletop initialization stuff


  // Regular setup code we usually have
  createCanvas(600, 600);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);

}

// The data comes back as an array of objects
// Each object contains all the data for one row of the sheet
function gotData(data) {

  console.log(data); // Print the data in the console

  // iterate through the array of data and create an object and push it on an array called namesArray
  for (let i = 0; i < data.length; i++) {
    namesArray.push(new Circle(data[i].Food)) ;
   }

}


function draw() {
  background('white');

  // // iterate through the namesArray and display the objects!
  for (let i = 0 ; i < namesArray.length ; i++) {
    namesArray[i].display() ;
  }

}


// my circle class
function Circle(myName, myShape) {
  this.pos = createVector(random(width), random(height));
  this.name = myName;
  this.shape = myShape;


  this.display = function() {
    if(this.name == "Pizza") {
//    image(pizza3, this.pos.x, this.pos.y, 100, 100);
console.log("Pizza") ;
  }


    if(this.name == "Grilled Cheese") {
//    image(cheese, this.pos.x, this.pos.y, 100, 100);
console.log("grilled") ;
  }

  //} else {
  //  fill('black');
    //rect(this.pos.x, this.pos.y, 100,100);
   //}
   //fill('white');
    //text(this.name,this.pos.x, this.pos.y);
  }
}
