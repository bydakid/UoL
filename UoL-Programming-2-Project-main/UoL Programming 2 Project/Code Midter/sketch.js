//global for the controls and input
var controls = null;
//store visualisations in a container
var vis = null;
//variable for the p5 sound object
var sound = null;
//variable for p5 fast fourier transform
var fourier;
//variable for noiseStep
var noiseStep;
//varialbe for prog
var prog;
//variable for amplitude
var amp;

function preload() {
  sound = loadSound("assets/angele.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  controls = new ControlsAndInput();

  //sound Volume
  sound.setVolume(0.2);
  //amplitude
  amp = new p5.Amplitude();
  //instantiate the fft object
  fourier = new p5.FFT();

  //create a new visualisation container and add visualisations
  vis = new Visualisations();
  vis.add(new Spectrum());
  vis.add(new WavePattern());
  vis.add(new Needles());
  vis.add(new Disco());
  vis.add(new RedPill());
  vis.add(new Matrix());
  vis.add(new Art());

  noiseStep = 0.01;
  prog = 0;
}

function draw() {
  //draw the selected visualisation
  vis.selectedVisual.draw();
  //draw the controls on top.
  controls.draw();
}

function mouseClicked() {
  controls.mousePressed();
}

function keyPressed() {
  controls.keyPressed(keyCode);
}

//when the window has been resized. Resize canvas to fit
//if the visualisation needs to be resized call its onResize method
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  if (vis.selectedVisual.hasOwnProperty('onResize')) {
    vis.selectedVisual.onResize();
  }
}
