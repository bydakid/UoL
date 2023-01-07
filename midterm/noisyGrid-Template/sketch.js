var stepSize = 20;

function setup() {
  createCanvas(500, 500);
}
///////////////////////////////////////////////////////////////////////
function draw() {
  background(125);

  colorGrid();
  compassGrid();
}
///////////////////////////////////////////////////////////////////////
function colorGrid() {
  for (let x = 0; x < width; x += stepSize) {
    for (let y = 0; y < height; y += stepSize) {
      let noiseValue = noise(x * 0.001, y * 0.001, frameCount * 0.005 * map(mouseX, 0, width, 0.1, 2.0)); // 3D noise value
      let colorOne = color(255, 0, 250); // Color one
      let colorTwo = color(0, 255, 0); // Color two
      let organicColor = lerpColor(colorOne, colorTwo, noiseValue); // lerp between colors

      fill(organicColor); // Mix fill color
      noStroke(); // Remove stroke

      rect(x, y, stepSize, stepSize); // Draw rectangle
    }
  }
}
///////////////////////////////////////////////////////////////////////
function compassGrid() {
  for (let x = 0; x < width; x += stepSize) {
    for (let y = 0; y < height; y += stepSize) {
      translate(x + stepSize / 2, y + stepSize / 2); // Center of grid

      let noiseValue = noise(x * 0.001, y * 0.001, frameCount * 0.003 * map(mouseX, 0, width, 0.5, 2.0)); // 3D noise value

      let angle = map(noiseValue, 0, 1, 0, 720); //3D noise angle
      rotate(radians(angle)); // Rotate angle

      let colorOne = color(random(0, 255), 0, 0); // Color two
      let colorTwo = color(0, random(0, 255), 0); // Color one
      let organicColor = lerpColor(colorOne, colorTwo, noiseValue); // LRP color
      stroke(organicColor); // Color based of noise
      let strokeW = map(noiseValue, 0, 1, 1, 10); // StrokeWeight based of noise
      strokeWeight(strokeW); // Draw strokeWeight

      line(0, 0, 0, -stepSize / 2); // Draw line

      resetMatrix(); // Reset
    }
  }
}