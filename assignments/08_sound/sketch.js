let boingSample, aluminiumSample, gongSample;

let synth, loop;

let interval = 1;

let sixteenth = 0;

function preload() {
	boingSample = loadSound("https://ashlyn-mcc.github.io/computational-art-spring2024/assignments/08_sound/samples/boing.wav");
	aluminiumSample = loadSound("https://ashlyn-mcc.github.io/computational-art-spring2024/assignments/08_sound/samples/metal.wav");
	gongSample = loadSound("https://ashlyn-mcc.github.io/computational-art-spring2024/assignments/08_sound/samples/gong.wav");
  }

function setup(){
	createCanvas(600,600);
	colorMode(HSB,360,100,100,100);
}

function draw(){

	background(0,0,100)
	
}

function loopSound(timeFromNow){
	if (sixteenth % 4 === 0) {
		boingSample.play(timeFromNow);
	}
	
	if (sixteenth % 2 == 0){
		aluminiumSample.play(timeFromNow)
	}

	sixteenth++;
	
}

function mousePressed() {
	userStartAudio();
  
	synth = new p5.PolySynth();
  
	loop = new p5.SoundLoop(loopSound, interval/4);
  
	loop.start(); 
  }