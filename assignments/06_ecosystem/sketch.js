let fish = [];
let numFish1 = 125;
let numFish2 = 125;
let numFish3 = 125;

let viewingWindow;

let offsetVal = 0;

let hook;

let squid1,squid2,squid3

let stingray;

let rayField;

function preload(){
    squid1 = loadImage("./1squid.png");
    squid2 = loadImage("./2squid.png");
    squid3 = loadImage("./3squid.png");
    stingray = loadImage("./stingray.png");

}

function setup() {

    createCanvas(1400, 750);
    colorMode(HSB, 360, 100, 100, 100);
    imageMode(CENTER);

    generateFish();

    viewingWindow = createSlider(-2000, 0, -800, -100);
    viewingWindow.position(40, 0);

    hook = new FishHook();

    rayField = new FlowField();

}

function draw() {

    push();
    translate(0, viewingWindow.value());
    oceanBackground();
    updateFish();
    goFish();
    rayField.displayGrid();
    rayField.displayRays();
    lightBeams();
    pop();
    submarineWindow();

}

// draws the elements behind the sea creatures
function oceanBackground() {

    // blue gradient background
    for (let i = 0; i < 4000; i++) {
        stroke(200, map(i, 0, 4000, 70, 100), map(i, 0, 4000, 100, 0))
        line(0, i, width, i);
    }

}

function lightBeams(){

    // light rays moving in the water with perlin noise
    push();
    translate(width / 2, -200);
    for (let i = (PI / 6); i < ((5 * PI) / 6); i = i + 0.1) {
        let offset = map(noise(i * offsetVal), 0, 1, 0.01, 0.05);
        let polarX = cos(i + offset) * 2500;
        let polarY = sin(i + offset) * 3000;
        strokeWeight(map(noise(i * offsetVal), 0, 1, 2, 20) * map(viewingWindow.value(), 0, -4000, 1, 5));
        stroke(100, map(noise(i * offsetVal), 0, 1, 0, 30));
        line(0, 0, polarX, polarY);
    }
    offsetVal += 0.007
    pop();

    // gradient on top of lines to make them fade the deeper they are
    for (let i = 0; i < 4000; i++) {
        stroke(200, map(i, 0, 4000, 70, 100), map(i, 0, 4000, 100, 0), map(i, 0, 2750, 0, 30));
        line(0, i, width, i);
    }

}

// draws the submarine window
function submarineWindow() {
    push();
    fill(200, 30, 40);
    rect(0, 0, 150, 750)
    rect(width - 150, 0, 150, 750)
    noFill();
    stroke(200, 0, 0, 80);
    strokeWeight(10);
    ellipse(width / 2, 375, 1050, 1050)
    ellipse(width / 2, 375, 1350, 1350)
    stroke(200, 25, 30);
    strokeWeight(150)
    ellipse(width / 2, 375, 1200, 1200);
    pop()

    for (let i = 0; i < 20; i++) {
        let xPos = cos(map(i, 0, 20, 0, 2 * PI)) * 600 + width / 2;
        let yPos = sin(map(i, 0, 20, 0, 2 * PI)) * 600 + 350;
        fill(200, 25, 20);
        bolt(xPos, yPos, 52, 50);
        fill(200, 25, 45);
        bolt(xPos, yPos, 35, 32);

    }

}

// draws the bolts on the windows
function bolt(x, y, Bwidth, Bheight) {
    noStroke();
    beginShape();
    vertex(x, y + (-Bheight / 2));
    vertex(x + (Bwidth / 3.5), y + (-Bheight / 2));
    vertex(x + (Bwidth / 2), y);
    vertex(x + (Bwidth / 3.5), y + (Bheight / 2));
    vertex(x, y + (Bheight / 2));
    vertex(x + (-Bwidth / 3.5), y + (Bheight / 2));
    vertex(x + (-Bwidth / 2), y)
    vertex(x + (-Bwidth / 3.5), y + (-Bheight / 2));
    endShape(CLOSE);
}


function generateFish() {

    for (let i = 0; i < numFish1; i++) {
        fish.push(new Fish(1));
    }

    for (let i = 0; i < numFish2; i++) {
        fish.push(new Fish(2));
    }

    for (let i = 0; i < numFish3; i++) {
        fish.push(new Fish(3));
    }

}

function updateFish() {
    for (let fishy of fish) {
        fishy.show();
        fishy.swim();
    }
}

function goFish() {
    hook.update();
}