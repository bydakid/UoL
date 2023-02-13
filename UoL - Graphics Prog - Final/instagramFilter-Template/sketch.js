// Image of Husky Creative commons from Wikipedia:
// https://en.wikipedia.org/wiki/Dog#/media/File:Siberian_Husky_pho.jpg
var imgIn;
var matrix = [
  [1 / 64, 1 / 64, 1 / 64, 1 / 64, 1 / 64, 1 / 64, 1 / 64, 1 / 64],
  [1 / 64, 1 / 64, 1 / 64, 1 / 64, 1 / 64, 1 / 64, 1 / 64, 1 / 64],
  [1 / 64, 1 / 64, 1 / 64, 1 / 64, 1 / 64, 1 / 64, 1 / 64, 1 / 64],
  [1 / 64, 1 / 64, 1 / 64, 1 / 64, 1 / 64, 1 / 64, 1 / 64, 1 / 64],
  [1 / 64, 1 / 64, 1 / 64, 1 / 64, 1 / 64, 1 / 64, 1 / 64, 1 / 64],
  [1 / 64, 1 / 64, 1 / 64, 1 / 64, 1 / 64, 1 / 64, 1 / 64, 1 / 64],
  [1 / 64, 1 / 64, 1 / 64, 1 / 64, 1 / 64, 1 / 64, 1 / 64, 1 / 64],
  [1 / 64, 1 / 64, 1 / 64, 1 / 64, 1 / 64, 1 / 64, 1 / 64, 1 / 64]
];
/////////////////////////////////////////////////////////////////
function preload() {
  imgIn = loadImage("assets/husky.jpg");
}
/////////////////////////////////////////////////////////////////
function setup() {
  createCanvas((imgIn.width * 2), imgIn.height);
}
/////////////////////////////////////////////////////////////////
function draw() {
  background(125);
  image(imgIn, 0, 0);
  image(earlyBirdFilter(imgIn), imgIn.width, 0);
  noLoop();
}
/////////////////////////////////////////////////////////////////
function mousePressed() {
  loop();
}
/////
function sepiaFilter(img) {
  var resultImg = createImage(img.width, img.height);
  resultImg.loadPixels();
  img.loadPixels();
  for (var i = 0; i < img.pixels.length; i += 4) {
    var r = img.pixels[i];
    var g = img.pixels[i + 1];
    var b = img.pixels[i + 2];

    resultImg.pixels[i] = (r * .393) + (g * .769) + (b * .189);
    resultImg.pixels[i + 1] = (r * .349) + (g * .686) + (b * .168);
    resultImg.pixels[i + 2] = (r * .272) + (g * .534) + (b * .131);
    resultImg.pixels[i + 3] = img.pixels[i + 3];
  }
  resultImg.updatePixels();
  return resultImg;
}
/////
function darkCorners(img) {
  var imgWidth = img.width;
  var imgHeight = img.height;
  var centerX = imgWidth / 2;
  var centerY = imgHeight / 2;
  var maxDist = Math.sqrt(centerX * centerX + centerY * centerY);

  img.loadPixels();
  for (var y = 0; y < imgHeight; y++) {
    for (var x = 0; x < imgWidth; x++) {
      var index = (y * imgWidth + x) * 4;
      var dist = Math.sqrt((x - centerX) * (x - centerX) + (y - centerY) * (y - centerY));
      var dynLum = constrain(map(dist, 300, maxDist, 1, 0), 0, 1);
      img.pixels[index] *= dynLum;
      img.pixels[index + 1] *= dynLum;
      img.pixels[index + 2] *= dynLum;
    }
  }
  img.updatePixels();
  return img;
}
////
function borderFilter(img) {
  let buffer = createGraphics(img.width, img.height);
  buffer.image(img, 0, 0);
  buffer.strokeWeight(20);
  buffer.stroke(255);
  buffer.fill(255, 255, 255, 0);
  buffer.rect(0, 0, img.width, img.height, 40);
  buffer.rect(10, 10, img.width - 20, img.height - 20);
  return buffer;
}




/////////////////////////////////////////////////////////////////
function earlyBirdFilter(img) {
  var resultImg = createImage(imgIn.width, imgIn.height);
  resultImg = sepiaFilter(imgIn);
  resultImg = darkCorners(resultImg);
  //resultImg = radialBlurFilter(resultImg);
  resultImg = borderFilter(resultImg)
  return resultImg;
}