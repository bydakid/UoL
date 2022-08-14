function Spectrum() {
  this.name = "Spectrum";

  this.draw = function() {
    background(0);
    noStroke();

    //Welcome message and info song and artist
    textSize(40);
    fill('white');
    text('Hi, press spacebar to show menu', width / 2, height / 5 * 2);
    textSize(30);
    text('Artist : Angele', width / 2, height / 5 * 3 + 10);
    text('Title : Libre', width / 2, height / 5 * 3 + 50);

    push();

    // variable  spectrum for p5 fourier.analyze
    var spectrum = fourier.analyze();

    //Side Spectrum
    fill(0, 255, 0)
    for (var i = 0; i < spectrum.length; i++) {
      var y = map(i, 0, spectrum.length, height / 2, height);
      var yMirror = map(i, 0, spectrum.length, height / 2, 0);
      var w = -width + map(spectrum[i], 0, 255, 0, height);

      //Color greem Spectrum
      var green = map(spectrum[i], 0, 255, 255, 0);
      fill(spectrum[i], green, 0)

      //Rectangle Spectrum side
      rect(w, y, width, height / spectrum.length);
      rect(w, yMirror, width, height / spectrum.length);
    }

    //Bottom Spectrum
    for (let i = 0; i < spectrum.length; i++) {
      var yBottom = map(i, 0, spectrum.length, width / 2, width);
      var yMiBottom = map(i, 0, spectrum.length, width / 2, 0);
      var wBottom = map(spectrum[i], 0, width, 0, height / 4);

      //Color blue Spectrum
      var blue = map(spectrum[i], 0, 255, 255, 0);
      fill(spectrum[i], 0, blue)

      //Rectangle Spectrum bottom
      rect(yBottom, height - wBottom, 1, wBottom);
      rect(yMiBottom, height - wBottom, 1, wBottom);

      //Ellipse Spectrum in the middle
      ellipse(yBottom, height / 2, 40);
    }


    pop();
  };
}
