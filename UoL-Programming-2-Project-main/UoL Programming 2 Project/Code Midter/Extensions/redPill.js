//draw the waveform to the screen
function RedPill() {
  //vis name
  this.name = "Red Pill";

  //draw the wave form to the screen
  this.draw = function() {
    push();
    background(0,25);

    //HSB colormode
    colorMode(HSB);

    //p5 fourier analyze
    var redPill = fourier.analyze();

    //var of the width of the red pill
    var wide = width/200;

    //Position Red Pill in the center
    translate(width/2, height/2);

    for (var i = 0; i < redPill.length; i++){
      //var amp for the fourier analyze
      var amp = redPill[i];

      //var circle
      var circle = map(amp, 0, 256, 20, 200);

      //Cos and Sin variable of the circle
      var x = circle * cos(i);
      var y = circle * sin(i);

      //color lines
      stroke(i, 255, 255);

      //line and shape
      line(0, 0, x * wide, y * 2);
    }
    pop();
  };
}
