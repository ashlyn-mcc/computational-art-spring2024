let cellGrid;
let offsetAmount = 0.01;
let gridHue;

function setup() {

    createCanvas(windowWidth, windowHeight);
    colorMode(HSB, 360, 100, 100, 100);

    let range1 = (random(-30,20) + 360)%360;
    let range2 = random(155,205);
   // let range3 = random(330,360);

    gridHue = random([range1,range2]);
    console.log(gridHue);
    cellGrid = new gridGenerator(0, 0, 25, 25, gridHue);


}

function draw() {
    background((gridHue + 180) % 360,70,70);
    cellGrid.update();
    offsetAmount = offsetAmount + 0.01
}