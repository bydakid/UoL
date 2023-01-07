var speed;


function setup() {
    createCanvas(900, 700);
}

function draw() {
    background(0);
    speed = frameCount;

    //SUN Planet
    push();
    translate(width/2, height/2); // Position sun
    rotate(radians(speed/3)); // SUN Rotation
    celestialObj(color(255,150,0), 200); // SUN
    pop();

    //EARTH Planet
    push();
    translate(width/2,height/2); // Position of the earth
    rotate(radians(speed)); // Rotation of the Earth around the sun and its own axis
    translate(300, 0); // Position of earth from the sun
    celestialObj(color(0,0,200),80) // EARTH
    pop();

    //MOON Planet
    push();
    translate(width/2,height/2); // Position of the moon
    rotate(radians(speed)); // Rotation around the sun
    translate(300, 0); // Position of moon from the sun
    rotate(radians(speed*2)); // Rotation of the Moon and its own axis at speed *2
    translate(100, 0); // Position of moon from the earth
    celestialObj(color(250,250,250),30); // MOON
    pop();

    // ASTEROID
    push();
    translate(width/2,height/2); // Position of the Asteriod
    rotate(radians(speed)); // Rotation around the sun
    translate(300, 0); // Position of asteriod from the sun
    rotate(radians(speed)); // Rotation of the Asteruid and its own axis
    translate(100, 0); // Position of asteriod from the earth
    translate(50,0); // Position of asteriod from the moon
    celestialObj(color(250,250,250),30); // MOON
    pop();


}

function celestialObj(c, size){
    strokeWeight(5);
    fill(c);
    stroke(0);
    ellipse(0, 0, size, size);
    line(0, 0, size/2, 0);
}


