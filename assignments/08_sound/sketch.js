let boingSample, aluminiumSample, gongSample, bwamSample;

let synth, loop;

let interval = 1;

let sixteenth = 0;

let note;

let scale = "arabian";

let dots = [];

function preload() {
	boingSample = loadSound("https://ashlyn-mcc.github.io/computational-art-spring2024/assignments/08_sound/samples/boing.wav");
	aluminiumSample = loadSound("https://ashlyn-mcc.github.io/computational-art-spring2024/assignments/08_sound/samples/metal.wav");
	gongSample = loadSound("https://ashlyn-mcc.github.io/computational-art-spring2024/assignments/08_sound/samples/gong.wav");
	bwamSample = loadSound("https://ashlyn-mcc.github.io/computational-art-spring2024/assignments/08_sound/samples/bwam.wav");
	bounceSample = loadSound()
  }

function setup(){
	createCanvas(600,600);
	colorMode(HSB,360,100,100,100);
	
	background(100);

}

function draw(){

	//background(0,0,100)

	for (let i = 0; i < dots.length; i++){
		dots[i].update();
		dots[i].show();
	}
	
	
}



function loopSound(timeFromNow){

  	note = floor(random(0, scales[scale].length));

	synth.play(midiToFreq(60 + scales[scale][note]), 0.5, timeFromNow, 0.3);
  	note++;
  	note = note % 8;
	sixteenth++;
	
}

function mousePressed() {
	userStartAudio();
  
	synth = new p5.PolySynth();
  
	loop = new p5.SoundLoop(loopSound, interval/4);

	for (let i = 0; i < 8;i++){
		dots.push(new Dot(map(i,0,scales[scale].length-1,50,width-50),300,random(20,50),i))
	}
  
	loop.start(); 
  }