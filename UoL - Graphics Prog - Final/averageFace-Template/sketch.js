var imgs = [];
var avgImg;
var numOfImages = 30;

//////////////////////////////////////////////////////////
function preload() {
    for (var i = 0; i < numOfImages; i++) {
        var filename = "assets/" + i + ".jpg";
        console.log(filename);
        imgs[i] = loadImage(filename);
    }

}
//////////////////////////////////////////////////////////
function setup() {
    createCanvas(imgs[0].width * 2, imgs[0].height);
    pixelDensity(1);
    avgImg = createGraphics(imgs[0].width, imgs[0].height);
}

//////////////////////////////////////////////////////////
function draw() {
    background(125);
    image(imgs[0], 0, 0);

    for (var i = 0; i < numOfImages; i++) {
        imgs[i].loadPixels();
    }
    avgImg.loadPixels();

    for (var y = 0; y < imgs[0].height; y++) {
        for (var x = 0; x < imgs[0].width; x++) {
            var index = (x + y * imgs[0].width) * 4;
            var sumR = 0;
            var sumG = 0;
            var sumB = 0;

            for (var j = 0; j < imgs.length; j++) {
                sumR += imgs[j].pixels[index + 0];
                sumG += imgs[j].pixels[index + 1];
                sumB += imgs[j].pixels[index + 2];
            }

            avgImg.pixels[index + 0] = sumR / imgs.length;
            avgImg.pixels[index + 1] = sumG / imgs.length;
            avgImg.pixels[index + 2] = sumB / imgs.length;
            avgImg.pixels[index + 3] = 255;
        }
    }

    avgImg.updatePixels();
    image(avgImg, imgs[0].width, 0);
    noLoop();

}