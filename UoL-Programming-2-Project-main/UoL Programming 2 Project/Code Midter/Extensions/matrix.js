//draw the waveform to the screen
function Matrix() {
  //vis name
  this.name = "Matrix";

  //draw the wave form to the screen
  this.draw = function() {
    push();
    background(0, 25);
    stroke(255);
    noFill();

    //Color inside the circle
    var level = amp.getLevel();
    if (level > 0.055) {
      fill(0, random(0, 255), 20, random(20, 90));
    }

    //Position circle in the center
    translate(width / 2, height / 2)

    //p5 fourier waveform
    var siri = fourier.waveform();

    //White circle
    beginShape();
    for (var i = 0; i <= 360; i++) {
      var index = floor(map(i, 0, 180, 0, siri.length - 1));
      var circle = map(siri[index], -1, 1, 150, 350)
      var x = circle * sin(i);
      var y = circle * cos(i);
      vertex(x, y);
    }
    endShape();

    //Outer circle
    for (var i = 0; i <= 180; i++) {
      var index = floor(map(i, 0, 180, 0, siri.length - 1));
      var circle = map(siri[index], -1, 1, 1, 800)
      var x = circle * sin(i);
      var y = circle * cos(i);
      stroke(0,random(0,255),0);
      point(x, y);
    }

    //Inner Circles
    for (var i = 0; i <= 180; i++) {
      var index = floor(map(i, 0, 180, 0, siri.length - 1));
      var circle = map(siri[index], -1, 1, 1, 200)
      var x = circle * sin(i);
      var y = circle * cos(i);
      stroke(0,0,0);
      point(x, y);
    }
    for (var i = 0; i <= 180; i++) {
      var index = floor(map(i, 0, 180, 0, siri.length - 1));
      var circle = map(siri[index], -1, 1, 1, 100)
      var x = circle * sin(i);
      var y = circle * cos(i);
      stroke(0,0,0);
      point(x, y);
    }
    pop();
  };
}
