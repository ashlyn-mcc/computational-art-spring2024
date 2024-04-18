let mushrooms = [];
let water = [];
let pondOffsets = [];
let numShrooms = 6;
let grasses = [];

let starSynth;
let musicScale = 'pentatonic major'
let sixteenth = 0;
let interval = 1;
let starReverb;
let starDelay;

let lightSynth;
let lightScale = 'ionian'
let sixteenth2 = 0;
let interval2 = 8;
let lightReverb;
let lightDelay;

let interval3 = 2;
let softDrum;
let triangleSound;

let currentNote;

let moonFrog, jarFrog, padFrog;

let boom;

function preload() {
	softDrum = loadSound("./samples/softDrumz.wav")
	triangleSound = loadSound("./samples/ding.wav")
	moonFrog = loadImage("./images/moon.PNG");
	jarFrog = loadImage("./images/jar.PNG");
	padFrog = loadImage("./images/lilipad.PNG");
  }


function setup(){
	createCanvas(700,700);
	colorMode(HSB,360,100,100,100);	
	angleMode(DEGREES);
	background(0,50);

	starSynth = new p5.PolySynth();
	starReverb = new p5.Reverb();
	starReverb.process(starSynth, 3, 2);
	starDelay = new p5.Delay();
	starDelay.process(starSynth, 0.12, .4, 2300);

	lightSynth = new p5.PolySynth();
	lightReverb = new p5.Reverb();
	lightReverb.process(lightSynth, 3, 2);
	lightDelay = new p5.Delay();
	lightDelay.process(lightSynth, 0.4, .4, 2300);

	softDrum.setVolume(1);
	triangleSound.setVolume(0.4)

	let counter = 0;
	for (let i = 0; i < 180; i++) {
		water.push(new Pond(counter, map(i, 0, 180, 90, 270)))
		pondOffsets.push(i * 200);
		counter++
	}

	for (let i = 1; i <= numShrooms; i++){
		let x = (i * map(i,0,numShrooms,65,100))+25
		let y = (log(i)*-135)+575
		mushrooms.push(new Mushroom(x,y,map(i,0,numShrooms,0.6,0.4),random(0,30),i-1));

	}


	for (let i = 0; i < 7500; i++){
		grasses.push(new Grass(random(width),random(350,height),random(10,40)))
	}
}

function draw(){
	background(0);
	fill(100,50,50);
	rect(0,350,width,350);

	for (let i = 0; i < 350; i++){
		let maxBright = 10;
		if (boom){
			maxBright =  30;
		}
		noStroke();
		fill(200,60,map(i,0,350,0,maxBright));
		rect(0,i,width,1);
	}
	for (let i = 0; i < grasses.length; i++){
		grasses[i].show();
	}

	// draws grass
	for (let i = 0; i < water.length; i++) {
		//water[i].update();
	}

	for (let i = 0; i < mushrooms.length; i++){
		mushrooms[i].update();
		mushrooms[i].display();
	}

	// image(moonFrog,100,50,150,150);
	// image(padFrog,900,500,200,200);
	// image(jarFrog,150,400,200,200)

	// increase offsets used for noise to alter the grass length
	// makes it look like waves are washing up.
	for (let i = 0; i < pondOffsets.length; i++) {
		pondOffsets[i] += 0.005
	}

	boom = false;
}

function loopSound(timeFromNow){

	note = floor(random(0, scales[musicScale].length));
	console.log(note);
	currentNote = note;
	console.log(note);
	starSynth.play(midiToFreq(72 + scales[musicScale][note]), 0.5, timeFromNow, 0.3);
	note++;
	note = note % 8;
	sixteenth++;
}

function loopSound2(timeFromNow){

	note = floor(random(0, scales[lightScale].length));
  	lightSynth.play(midiToFreq(48 + scales[lightScale][note]), 0.5, timeFromNow, 0.3);
	note++;
	note = note % 8;
  	sixteenth++;
	
}

function loopSound3(timeFromNow){
	softDrum.play(timeFromNow);
	boom = true;
}

function mousePressed() {
	loop = new p5.SoundLoop(loopSound, interval/4);
	loop2 = new p5.SoundLoop(loopSound2, interval2/4);
	loop3 = new p5.SoundLoop(loopSound3,interval3/4);
	loop.start(); 
	loop2.start(); 
	loop3.start();

  }