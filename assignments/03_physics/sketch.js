// holds the wave lines
let waves = [];

// holds the offsets for the wave and grass noise
let waveOffsets = [];
let grassOffsets = [];

let skies = [];
let leaves = [];
let grasses = [];

let dots = [];
let numDots = 0;

// holds wind vectors for falling leaves
let wind = [];

// holds rotations for falling leaves
let rotation = [];

// offset for falling leaves
let offsets = [];

//pulls leaves downward
let downwardGravity;

// functions as the ground, pushes back against gravity
let upwardGravity;

// determines if leaves fall from tree
let leavesFall = false;

function setup() {
	createCanvas(1000, 700);
	colorMode(HSB,360,100,100,100)
	background(0);
	rectMode(CENTER);
	strokeCap(SQUARE);
	frameRate(25);
	//angleMode(DEGREES);
	
	
		for (let i = 0; i < 1250; i++){
			waves.push(new Wave(i));
			waveOffsets.push(i*100);
			skies.push(new Sky(i));
	}
	
	let counter = 0;
	for (let i = 0; i < PI; i = i + 0.015){
		grasses.push(new Grass(counter,map(i,0,PI,PI/2,(3 * PI)/2)))
		grassOffsets.push(i * 200);
		counter++
	}
	
	A = new Tree();
	B = new Cloud(600,150);
	C = new Cloud(850,100);
	D = new Cloud(300,50);
	
	for (let i = 0; i < 500; i++){
	leaves.push(new LeafCluster(215,200,100,75));
	leaves.push(new LeafCluster(135,120,100,75));
	leaves.push(new LeafCluster(215,100,125,75));
	leaves.push(new LeafCluster(140,50,125,75));
	leaves.push(new LeafCluster(300,50,100,150));
	leaves.push(new LeafCluster(200,0,200,20));
	leaves.push(new LeafCluster(50,25,100,100));
	leaves.push(new LeafCluster(0,125,40,100));
	leaves.push(new LeafCluster(375,140,100,100));
	}
	
	
  	downwardGravity = createVector(0, 0.03);
	upwardGravity = createVector(0, -0.1);
	//createVector(-1, 0);

}

function draw() {

	noStroke();
	fill(200,30,100);
	rect(width/2,height/2,width,height);

	fill(210,80,65);
	rect(width/2,height/2 + 175,width,height/2);
	
	for (let i = 0; i < waves.length; i++){
		skies[i].update();
		waves[i].update();
		waveOffsets[i] += 0.05;
	}
	
	B.update();
	C.update();
	D.update();
	
		for (let i = 0; i < grasses.length; i++){
		grasses[i].update();
	}
		for (let i = 0; i < grassOffsets.length; i++){
		grassOffsets[i] += 0.01
	}
	
	
	A.show();
	
	for (let i = 0; i < leaves.length; i++){
		leaves[i].show();
	}
	
	 // Update and draw all the dots
  for (let i = 0; i < dots.length; i++){
		if (dots[i].pos.y >= 550){
			dots[i].addForce(upwardGravity);
		} else {
		wind[i].add(map(noise(offsets[i]),0,1,-0.2,0.2),0);
		rotation[i] = map(noise(offsets[i]),0,1,0,2 * PI);
		}
    dots[i].update(i);
    dots[i].show();
		
		
  }
	
	for (let i = 0; i < dots.length; i++){
		wind[i].mult(0,0);
		offsets[i]+= 0.01;
  }
	
	console.log(mouseX,mouseY)
	
	if (leavesFall){
	let amount = 1
	for (let i = 0; i < amount; i++) {
    let x = random(0, 330);
    let y = random(0,220);
		wind.push(createVector(0,0))
    dots.push(new Leaf(x, y, i+1));
		offsets.push((i + numDots) * 400);
		
  }
		
		numDots += amount;
	}
	
	

	
}


