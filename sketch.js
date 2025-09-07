/* ||| PRACTICE BASICS
function setup() {
  createCanvas(600, 400);
}

function draw() {
  // Sky blue background
  background(135, 206, 235);
  // Sun in top right
  fill("yellow");

  stroke("orange"); // Orange outline

  strokeWeight(20); //large outling

  circle(550, 50, 100);
  //grass on bottom half

  stroke(0); //black outline

  strokeWeight(1); //outline thickness

  fill("green");

  rect(0, 200, 600, 200);

  //emojis
  textSize(75);
  text("🌸", 100, 250) //flower
  text("🐞", mouseX, mouseY) //ladybug
}
*/
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('navy'); //navy background

  //moon
  fill(255);
  stroke(0);
  circle(350, 50, 100);

  //overlapping navy circle for crescent moon
  stroke("navy");   
  fill("navy");
  circle(320,50,100);

  //big gray mountains
  stroke(0);
  fill(80);
  triangle(-40,300,75,100, 250,300);
  triangle(100,300,300,100, 500,300);

  //grass
  fill('rgb(50,76,50)');
  rect(0,300, 400, 100);

  //displays the x and y position of the mouse on the canvas
  fill(255) //white text
  text(`mouseX: ${mouseX}, mouseY: ${mouseY}`, 20, 20);  
}