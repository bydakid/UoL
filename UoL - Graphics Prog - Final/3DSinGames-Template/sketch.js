let angle = 0;
let confLocs = [];
let confTheta = [];

function setup() {
    createCanvas(900, 800, WEBGL);
    camera(800, -600, 800, 0, 0, 0, 0, 1, 0);
    normalMaterial();
    stroke(0);
    strokeWeight(2);
    for (let i = 0; i < 200; i++) {
        confLocs.push(createVector(random(-500, 500), random(-800, 0), random(-500, 500)));
        confTheta.push(random(0, 360));
    
    }
}

function draw() {
    background(125);
    angleMode(DEGREES);
    for (let x = -400; x <= 400; x += 50) {
        for (let z = -400; z <= 400; z += 50) {
            let distance = dist(x,0,z,0,0,0);
            let length = map(sin(distance+ frameCount * 1.55),-1,1,100,300);
            push();
            translate(x, 0, z);
            box(50,length,50);
            pop();
        }
    }
    let x =1000 * cos(angle);
    let z = 1000 * sin(angle);
    camera(x, -600, z, 0,0,0,0,1,0);
    angle += 0.5;
    confetti();
}

function confetti() {
    for (let i = 0; i < confLocs.length; i++) {
        push();
        translate(confLocs[i].x, confLocs[i].y, confLocs[i].z);
        rotateY(confTheta[i]);
        plane(15, 15);
        confLocs[i].y +=1;
        confTheta[i] += 10;
        if (confLocs[i].y > 0) {
            confLocs[i].y = -800;
        }
        pop();
    }
}

