//draw the waveform to the screen
function WavePattern() {
  //vis name
  this.name = "Face Wavepattern";

  //draw the wave form to the screen
  this.draw = function() {
    background(0);
    push();
    strokeWeight(2);

    beginShape();
    //calculate the waveform from the fft.

    var vol = amp.getLevel();
    stroke(0, 255, 0);
    fill(0, 0, 146);
    ellipse(width / 2, height / 2, width + 55 * vol, height + 55 * vol);
    fill(247, 220, 111);
    triangle(width / 2, height / 2, width / 2 - 50, height / 4 * 2 + 450 * vol, width / 2 + 50, height / 4 * 2 + 450 * vol);
    noStroke();
    fill(247, 220, 111);
    ellipse(width / 4 * 3, height / 4, vol * 700, vol * 700);
    ellipse(width / 4, height / 4, vol * 700, vol * 700);

    noFill();
    stroke(255, 0, 0);
    var wave = fourier.waveform();
    for (var i = 0; i < wave.length; i++) {
      //for each element of the waveform map it to screen
      //coordinates and make a new vertex at the point.
      var x = map(i, 5, wave.length, width / 4, width / 4 * 3);
      var y = map(wave[i], -1, 1, 250, height);
      ellipse(x, y, 50);
    }
    endShape();
    pop();
  };
}
