function setup() {
  createCanvas(800, 1200);
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(225, 200, 200);
  }
  rect(mouseX, mouseY, 80, 80);
}