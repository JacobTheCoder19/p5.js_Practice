function setup() {
  createCanvas(1000, 1000);
  // Hide the cursor.
  noCursor();
  let c = color(0,0,255);

}

function draw() {
  background('green');
  c.setAlpha(128);
  fill(c);
  circle(mouseX, mouseY, 10);

  describe('A white circle on a gray background. The circle follows the mouse as it moves. The cursor is hidden.');
}