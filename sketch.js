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