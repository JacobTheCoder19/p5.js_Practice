function setup() {
  createCanvas(1000, 1000);
  // Hide the cursor.
  noCursor();
}

function draw() {
  background('green');
  circle(mouseX, mouseY, 10);

  describe('A white circle on a gray background. The circle follows the mouse as it moves. The cursor is hidden.');
}