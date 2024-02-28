let cellGrid;
let offsetAmount = 0.01;
let gridHue;

function setup() {

    createCanvas(windowWidth, windowHeight);
    colorMode(HSB, 360, 100, 100, 100);

    gridHue = random(360);

    cellGrid = new gridGenerator(0, 0, 25, 25, gridHue);
    //cellGrid.update();


}

function draw() {
    background((gridHue + 180) % 360,70,70);
    cellGrid.update();
    offsetAmount = offsetAmount + 0.01
}