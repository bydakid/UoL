//draw the waveform to the screen
function Disco() {

  //vis name
  this.name = "Disco";

  //draw the wave form to the screen
  this.draw = function() {
    background(0);
    push();
    beginShape();
    var vol = amp.getLevel();
    for (var x = 0; x <= width; x += 100) {
      for (var y = 0; y <= height; y += 50) {
        fill(random(255), 0, 255);
        ellipse(x, y, 400 * vol, 400 * vol);
        fill(0, random(0,255), 255)
        rect(x + 40, y + 20, 20, 20);
      }
    }
    endShape();

    pop();
  };
}
