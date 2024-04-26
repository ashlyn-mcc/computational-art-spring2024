let currentState;

let titleFont, subFont;

let wrenchPic, gearPic;

let state1, state2, state3, state4;

function preload(){
	titleFont = loadFont("./CyborgPunk.ttf");
	subFont = loadFont("./goodtiming.otf");
	wrenchPic = loadImage("./wrench.png");
	gearPic = loadImage("./gear.png");
}

function setup(){
	createCanvas(800,700);
	colorMode(HSB,360,100,100,100);
	rectMode(CENTER);
	textAlign(CENTER,CENTER);
	imageMode(CENTER);

	state1 = new State1();
	state2 = new State2();
	currentState = state2;
}

function draw(){
	background(207,21,62);
	currentState.draw();

}
