////////////////////////////////////////////////////////////////
function setupGround() {
  ground = Bodies.rectangle(500, 600, 1000, 40, {
    isStatic: true,
    angle: 0
  });
  World.add(engine.world, [ground]);
}

////////////////////////////////////////////////////////////////
function drawGround() {
  push();
  fill(100,100,0);
  drawVertices(ground.vertices);
  pop();
}
////////////////////////////////////////////////////////////////
function setupPropeller() {
  propeller = Bodies.rectangle(150, 480, 200, 15, { // Body for the propeller
    isStatic: true,
    angle: angle
  });

  World.add(engine.world, [propeller]); // Add propeller to the world
}
////////////////////////////////////////////////////////////////
//updates and draws the propeller
function drawPropeller() {
  push();
  fill(150,0,40); // Color propeller
  Matter.Body.setAngle(propeller, angle); // Angle of propeller
  Matter.Body.setAngularVelocity(propeller, angleSpeed); // Angular velocity of propeller
  angle += angleSpeed; // Update angle variable by angleSpeed
  drawVertices(propeller.vertices); // Draw the propeller
  pop();
}
////////////////////////////////////////////////////////////////
function setupBird() {
  var bird = Bodies.circle(mouseX, mouseY, 20, {
    friction: 0,
    restitution: 0.95
  });
  Matter.Body.setMass(bird, bird.mass * 10);
  World.add(engine.world, [bird]);
  birds.push(bird);
}
////////////////////////////////////////////////////////////////
function drawBirds() {
  push();
  for (var i = 0; i < birds.length; i++) {
    var bird = birds[i]; // var bird in the loop
    drawVertices(bird.vertices); // Draw the bird

    if (isOffScreen(bird)) { // If bird left screen
      removeFromWorld(bird); // Remove bird from the world
      birds.splice(i, 1);
      i--; // Decrement loop
    }
  }
  pop();
}
////////////////////////////////////////////////////////////////
//creates a tower of boxes
function setupTower() {
  // Tower of 6 rows and 3 columns
  for (var i = 0; i < 6; i++) {
    for (var j = 0; j < 3; j++) {
      var box = Bodies.rectangle(700 + j * 80, 100 + i * 80, 80, 80); // Size for the box

      boxes.push(box); // Push the box to the array
      colors.push(color(random(0,200), random(0, 200), random(0,200))); // Push random color

      World.add(engine.world, box); // Add box to the world
    }
  }
}

////////////////////////////////////////////////////////////////
//draws tower of boxes
function drawTower() {
  push();
  for (var i = 0; i < boxes.length; i++) {
    var box = boxes[i];
    var color = colors[i];
    // Set the fill color for the box
    fill(color);
    // Draw the vertices of the box body
    drawVertices(box.vertices);
  }
  pop();
}
////////////////////////////////////////////////////////////////
function setupSlingshot() {
  // Circle body bird
  slingshotBird = Bodies.circle(300, 200, 40, {
    friction: 0,
    restitution: 0.95
  });

  Matter.Body.setMass(slingshotBird, slingshotBird.mass * 10); // Mass of bird * 10

  // Constraint for the slingshot
  slingshotConstraint = Constraint.create({
    pointA: {
      x: 300,
      y: 200
    },
    bodyB: slingshotBird,
    stiffness: 0.01,
    damping: 0.0001
  });

  World.add(engine.world, slingshotBird); // Add bird to the world
  World.add(engine.world, slingshotConstraint); // Add slingshot to the world
}
////////////////////////////////////////////////////////////////
//draws slingshot bird and its constraint
function drawSlingshot() {
  push();
  fill(random(100,200),random(100,200),random(100,200)); // Color bird
  drawVertices(slingshotBird.vertices); // Draw the bird
  drawConstraint(slingshotConstraint); // Draw the slingshot
  pop();
}
/////////////////////////////////////////////////////////////////
function setupMouseInteraction() {
  var mouse = Mouse.create(canvas.elt);
  var mouseParams = {
    mouse: mouse,
    constraint: {
      stiffness: 0.05
    }
  }
  mouseConstraint = MouseConstraint.create(engine, mouseParams);
  mouseConstraint.mouse.pixelRatio = pixelDensity();
  World.add(engine.world, mouseConstraint);
}