// Controls the state flow

let currentState;

let titleFont, subFont;

let wrenchPic, gearPic;

let state1, state2, state3, state4, state5;

let headPic, bodyPic, armPic, legPic;

let parts = [];

let partsImgs = [];

let partText = ["Head", "Body", "Arms", "Legs"]

let room, lava;

let littleClick, click;

let introMusic, buildMusic, gameMusic;

function preload() {
	titleFont = loadFont("./CyborgPunk.ttf");
	subFont = loadFont("./goodtiming.otf");
	wrenchPic = loadImage("./wrench.png");
	gearPic = loadImage("./gear.png");

	headPic = loadImage("./head.png");
	bodyPic = loadImage("./body.png");
	armPic = loadImage("./arm.png");
	legPic = loadImage("./leg.png");

	room = loadImage("./room.jpeg");
	lava = createImg('./lava2.gif');

	lava.hide();

	littleClick = loadSound("./clickLight.mp3");
	click = loadSound("./clickElec.mp3");

	introMusic = loadSound("./space.mp3");
	buildMusic = loadSound("./electronic.mp3");
	gameMusic = loadSound("./intense.mp3");

	buildMusic.setVolume(0.05)
}

function setup() {
	createCanvas(800, 700);
	colorMode(HSB, 360, 100, 100, 100);
	rectMode(CENTER);
	textAlign(CENTER, CENTER);
	imageMode(CENTER);

	partsImgs = [headPic, bodyPic, armPic, legPic];

	state1 = new State1();
	state2 = new State2();
	state3 = new State3();
	state4 = new State4();
	state5 = new State5();

	currentState = state1;
}

function draw() {
	background(207, 21, 62);

	currentState.draw();

}
