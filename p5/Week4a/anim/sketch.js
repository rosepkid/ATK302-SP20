var x = 0 ;

function setup() {
  // put setup code here
  createCanvas(800, 800);
}

function draw() {
  // put drawing code here
  background('blue');

  push() ;
  translate(x, 0) ;
  fish();
  pop() ;

  x += 5 ;
  if (x > width) {
    x = -300 ; 
  }

}




function fish() {
  noStroke();
  fill("#f48072");
  quad(287, 242, 369, 182, 506, 242, 369, 300); //body
  quad(506, 242, 522, 203, 563, 196, 553, 228); //backfin top
  quad(506, 242, 522, 280, 563, 290, 553, 260); //backfin bottom
  triangle(369, 182, 407, 149, 452, 165); //fin top
  triangle(369, 300, 407, 329, 452, 314); //fin bottom

  fill("#fedbc1");
  ellipse(334, 233, 20, 20); //eye
  fill("#00919e");
  ellipse(332, 233, 12, 12); //eye

  //scale set 1
  fill("#f15c47");
  arc(417, 220, 25, 25, PI + PI / 2, PI / 2, OPEN); //scale1
  fill("#00919e");
  arc(417, 242, 25, 25, PI + PI / 2, PI / 2, OPEN); //scale2
  fill("#a2d9d3");
  arc(417, 264, 25, 25, PI + PI / 2, PI / 2, OPEN); //scale3

  //scale set 2
  fill("#00919e");
  arc(430, 225, 25, 25, PI + PI / 2, PI / 2, OPEN); //scale1
  fill("#f15c47");
  arc(430, 260, 25, 25, PI + PI / 2, PI / 2, OPEN); //scale3
  fill("#a2d9d3");
  arc(430, 242, 25, 25, PI + PI / 2, PI / 2, OPEN); //scale2

  //scale set 3
  fill("#f15c47");
  arc(443, 230, 25, 25, PI + PI / 2, PI / 2, OPEN); //scale1
  fill("#00919e");
  arc(443, 254, 25, 25, PI + PI / 2, PI / 2, OPEN); //scale2

  //scale set 4
  fill("#f15c47");
  arc(456, 249, 25, 25, PI + PI / 2, PI / 2, OPEN); //scale2
  fill("#a2d9d3");
  arc(456, 235, 25, 25, PI + PI / 2, PI / 2, OPEN); //scale1

  //scale set 5
  fill("#00919e");
  arc(469, 242, 25, 25, PI + PI / 2, PI / 2, OPEN); //scale1


  fill("#00919e");
  ellipse(259, 211, 20, 20); //bubble 1

  fill("#00919e");
  ellipse(276, 170, 35, 35); //bubble 2

  fill("#00919e");
  ellipse(268, 108, 50, 50); //bubble 2


}
