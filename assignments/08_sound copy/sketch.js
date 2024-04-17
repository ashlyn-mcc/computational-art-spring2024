let mushrooms = [];
let water = [];
let pondOffsets = [];
let numShrooms = 8;
let grasses = [];

let starSynth;
let musicScale = 'pentatonic major'
let sixteenth = 0;
let interval = 1;
let starReverb;
let starDelay;

let lightSynth;
let lightScale = 'pentatonic major'
let sixteenth2 = 0;
let interval2 = 4;
let lightReverb;
let lightDelay;



function preload() {
	

  }
function setup(){
	createCanvas(1200,700);
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
	lightDelay.process(lightSynth, 0.12, .4, 2300);

	let counter = 0;
	for (let i = 0; i < 180; i++) {
		water.push(new Pond(counter, map(i, 0, 180, 90, 270)))
		pondOffsets.push(i * 200);
		counter++
	}

	for (let i = 1; i <= numShrooms; i++){
		let x = (i * map(i,0,numShrooms,65,85))+475
		let y = (log(i)*-125)+630
		mushrooms.push(new Mushroom(x,y,map(i,0,numShrooms,0.4,0.55),random(0,20)));

	}


	for (let i = 0; i < 5000; i++){
		grasses.push(new Grass(random(width),random(400,height),random(10,40)))
	}
}

function draw(){
	fill(100,50,50);
	rect(0,400,width,300);
	for (let i = 0; i < grasses.length; i++){
		grasses[i].show();
	}

	// draws grass
	for (let i = 0; i < water.length; i++) {
		water[i].update();
	}

	for (let i = 0; i < mushrooms.length; i++){
		mushrooms[i].display();
	}

	// increase offsets used for noise to alter the grass length
	// makes it look like waves are washing up.
	for (let i = 0; i < pondOffsets.length; i++) {
		pondOffsets[i] += 0.005
	}
}

function loopSound(timeFromNow){

  	note = floor(random(0, scales[musicScale].length));
	console.log("star");
	starSynth.play(midiToFreq(60 + scales[musicScale][note]), 0.5, timeFromNow, 0.3);
  	note++;
  	note = note % 8;
	sixteenth++;
	
}

function loopSound2(timeFromNow){

	note = floor(random(0, scales[lightScale].length));

  	starSynth.play(midiToFreq(48 + scales[lightScale][note]), 0.5, timeFromNow, 0.3);
	console.log("light");
	note++;
	note = note % 8;
  	sixteenth++;
  
}


function mousePressed() {
	loop = new p5.SoundLoop(loopSound, interval/4);
	loop2 = new p5.SoundLoop(loopSound2, interval2/4);

	loop.start(); 
	loop2.start(); 

  }