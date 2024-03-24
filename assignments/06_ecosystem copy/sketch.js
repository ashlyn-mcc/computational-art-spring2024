let fish = [];
let numFish1 = 100;
let numFish2 = 100;
let numFish3 = 100;


let alignSlide, cohereSlide, separateSlide;

function setup() {

    createCanvas(1400, 750);
    colorMode(HSB, 360, 100, 100, 100);

    generateFish();

    alignSlide = createSlider(0,3,1,0.1);
    cohereSlide = createSlider(0,3,1,0.1);
    separateSlide = createSlider(0,3,1,0.1);

    
}

function draw() {
    background(0)
    updateFish();
}

function generateFish(){

    for (let i = 0; i < numFish1; i++){
        fish.push(new Fish(1));
    }

    for (let i = 0; i < numFish2; i++){
        fish.push(new Fish(2));
    }

    for (let i = 0; i < numFish3; i++){
        fish.push(new Fish(3));
    }
    
}

function updateFish(){
    for (let fishy of fish){
        fishy.show();
        fishy.swim();
    }
}