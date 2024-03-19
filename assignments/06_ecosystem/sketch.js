let offsetVal = 0;
function setup() {

    createCanvas(1400, 4000);
    colorMode(HSB, 360, 100, 100, 100);
}

function draw() {

    oceanBackground();
    // submarineWindow();

}

// draws the elements behind the sea creatures
function oceanBackground() {

    // blue gradient background
    for (let i = 0; i < height; i++) {
        stroke(200, map(i, 0, height, 70, 100), map(i, 0, height, 100, 0))
        line(0, i, width, i);
    }


    // light rays moving in the water with perlin noise
    push();
    translate(width / 2, -200);
    for (let i = 0; i < (PI); i = i + 0.15) {
        let offset = map(noise(i * offsetVal), 0, 1, 0.01, 0.05);
        let polarX = cos(i + offset) * 2500;
        let polarY = sin(i + offset) * 3000;
        strokeWeight(map(noise(i * offsetVal), 0, 1, 2, 15));
        stroke(100, map(noise(i * offsetVal), 0, 1, 0, 100));
        line(0, 0, polarX, polarY);
    }
    offsetVal += 0.01
    pop();

    // gradient on top of lines to make them fade the deeper they are
    for (let i = 0; i < height; i++) {
        stroke(200, map(i, 0, height, 70, 100), map(i, 0, height, 100, 0), map(i, 0, 2750, 50, 100));
        line(0, i, width, i);
    }

}

// draws the submarine window
function submarineWindow() {
    push();
    noFill();
    stroke(30);
    strokeWeight(150)
    ellipse(width / 2, 375, 1200, 1200)
    pop()
}