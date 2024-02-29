let cellGrid;
let gridHue;

function setup() {

    createCanvas(windowWidth, windowHeight);
    colorMode(HSB, 360, 100, 100, 100);

    // set canvas hue
    gridHue = random(30, 220)

    // create a grid
    cellGrid = new gridGenerator(0, 0, 25, 25, gridHue);


}

function draw() {

    // update grid
    background((gridHue + 180) % 360, 70, 70);
    cellGrid.update();

}