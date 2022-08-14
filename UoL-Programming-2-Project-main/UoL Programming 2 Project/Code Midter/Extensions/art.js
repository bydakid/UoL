//draw the waveform to the screen
function Art() {
  //vis name
  this.name = "Art";

  //draw the wave form to the screen
  this.draw = function() {
    push();
    background(0, 50);

    //Matrix
    var words = ['y','o','u','r','c','h','o','i','c','e','?']
    var truth = ['t','r','u','t','h']
    var end = ['s','t','o','r','y','e','n','d','s']
    var matrixWords = random(words);
    var matrixTruth = random(truth);
    var matrixEnd = random(end);

    //Your Choice matrix text
    fill(0, 200, 0);
    textSize(20);
    text(matrixWords, random(0, width),50);

    var level = amp.getLevel();
    if (level > 0.05) {
      //Truth matrix text
      textSize(10);
      text(matrixTruth, random(width / 4 - 100, width / 4 + 100), height/4 + 100);

      //End matrix text
      textSize(10);
      text(matrixEnd, random(width / 4 * 3 - 100, width / 4 *3 + 100), height/4 + 100);
    }


    //Sun Drawing
    var vol = amp.getLevel();
    var sun = map(vol, 0, 1, 0, width);
    fill(253, 184, 49);
    ellipse(width / 2, height / 4 * 3, sun * 2);

    //Red Pill and Blue Pill
    var Pills = fourier.analyze();

    for (var i = 0; i < Pills.length; i++){
      var amps = Pills[i];
      var circle = map(amps, 0, 256, 20, 200);
      var x = circle * cos(i);
      var y = circle * sin(i);

      //red pill
      fill(200, y, 0, 5);
      ellipse(width / 4, height / 4, x + 50,y + 10);
      //blue pill
      fill(0, x, 200, 5);
      ellipse(width / 4 * 3, height / 4, x + 50,y + 10);
    }

    //Stardust
    var level = amp.getLevel();
    if (level > 0.06) {
      for (let i = 0; i < 8; i++) {
        fill(0, random(10, 255), 0);
        ellipse(random(width), random(0, height / 4 * 3), random(2, 8), random(2, 8));
      }
    }

    //Spectrum Opening
    var spectrum = fourier.analyze();
    for (let i = 0; i < spectrum.length; i++) {
      var yBottom = map(i, 0, spectrum.length, width / 2, width);
      var yMiBottom = map(i, 0, spectrum.length, width / 2, 0);
      var wBottom = map(spectrum[i], 200, width, 150, height / 6);

      //Color Spectrum
      var blue = map(spectrum[i], 0, 50, 0, 100);
      fill(50, 255, blue)

      //Rectangle Spectrum bottom
      rect(yBottom + 30, height - wBottom, 0.1, wBottom);
      rect(yMiBottom - 30, height - wBottom, 0.1, wBottom);
    }
    pop();
  };
}
