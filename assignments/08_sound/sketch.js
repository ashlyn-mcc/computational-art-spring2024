let boingSample, aluminiumSample;

let synth, loop;

let interval = 1;

let sixteenth = 0;

function preload() {
	boingSample = loadSound("https://ashlyn-mcc.github.io/computational-art-spring2024/assignments/08_sound/samples/boing.wav");
	aluminiumSample = loadSound("https://ashlyn-mcc.github.io/computational-art-spring2024/assignments/08_sound/samples/metal.wav");
  }

function setup(){
	createCanvas(600,600);
	colorMode(HSB,360,100,100,100);
}

function draw(){

	
}

function loopSound(timeFromNow){
	if (sixteenth % 4 === 0) {
		aluminiumSample.play(timeFromNow);
	}

	sixteenth++;
	
}

function mousePressed() {
	userStartAudio();
  
	synth = new p5.PolySynth();
  
	loop = new p5.SoundLoop(loopSound, interval/4);
  
	loop.start(); 
  }