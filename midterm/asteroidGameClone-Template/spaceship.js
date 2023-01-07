class Spaceship {

  constructor() {
    this.velocity = new createVector(0, 0);
    this.location = new createVector(width / 2, height / 2);
    this.acceleration = new createVector(0, 0);
    this.maxVelocity = 5;
    this.bulletSys = new BulletSystem();
    this.size = 50;
  }

  run() {
    this.bulletSys.run();
    this.draw();
    this.move();
    this.edges();
    this.interaction();
  }

  draw() {
    fill(125);
    triangle(this.location.x - this.size / 2, this.location.y + this.size / 2,
      this.location.x + this.size / 2, this.location.y + this.size / 2,
      this.location.x, this.location.y - this.size / 2);
  }

  move() {
    this.velocity.add(this.acceleration); // Velocity of the ship based of acceleration
    this.velocity.limit(this.maxVelocity); // Limit of velocity vector
    
    this.acceleration.mult(0); // Reset the acceleration of the ship
    this.location.add(this.velocity); // Update position of the ship
    

  }

  applyForce(f) {
    this.acceleration.add(f);
  }

  interaction() {
    if (keyIsDown(LEFT_ARROW)) {
      this.applyForce(createVector(-0.1, 0)); // Left movement spaceship
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.applyForce(createVector(0.1, 0)); // Right movement spaceship
    }
    if (keyIsDown(UP_ARROW)) {
      this.applyForce(createVector(0, -0.1)); // Up movement spaceship
    }
    if (keyIsDown(DOWN_ARROW)) {
      this.applyForce(createVector(0, 0.1)); // Down movement spaceship
    }
  }

  fire() {
    this.bulletSys.fire(this.location.x, this.location.y);
  }

  edges() {
    if (this.location.x < 0) this.location.x = width;
    else if (this.location.x > width) this.location.x = 0;
    else if (this.location.y < 0) this.location.y = height;
    else if (this.location.y > height) this.location.y = 0;
  }

  setNearEarth() {
    //YOUR CODE HERE (6 lines approx)
  }
}