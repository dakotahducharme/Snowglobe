let snowflakes = [];

function setup() {
  createCanvas(800, 1200);
  fill(240);
  noStroke();
}

function draw() {
  background('blue');
  let t = frameCount / 60;

  for (let i = 0; i < random(5); i++) {
    snowflakes.push(new snowflake());
  }

  for (let flake of snowflakes) {
    flake.update(t);
    flake.display();
  }
}

function snowflake() {
  this.posX = 0;
  this.posY = random(-50, 0);
  this.initialAngle = random(0, 2 * PI);
  this.size = random(2, 5);

  this.radius = sqrt(random(pow(width / 2, 2)));

  this.update = function (time) {
    let w = 0.6;
    let angle = w * time + this.initialAngle;
    this.posX = width / 2 + this.radius * sin(angle);

    this.posY += pow(this.size, 0.5); //diff size snowflakes fall at slightly diff y speeds

    //delete sf if it passes edge of screen
    if (this.posY > height) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  }

  this.display = function () {
    ellipse(this.posX, this.posY, this.size);
  };
}