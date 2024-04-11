
let numCalls = 0;

let divideFactor;
let xMovement = 0;
let yMovement = 0;
let shapeButton;

let shape = 0;

let xOffset = 0;
let yOffset = 0;

let angle = 0;

function setup(){
	createCanvas(600,600);
	colorMode(HSB,360,100,100,100);

	//recursiveCircle(600);

	divideFactor = createSlider(2,4,3,0.1);
	// xMovement = createSlider(-50,50,0,1);
	//yMovement = createSlider(-50,50,0,1);
	shapeButton = createButton("Change Shape");
	shapeButton.mousePressed(shapeFunction);
	rectMode(CENTER);


}

function draw(){
	background(0,10);
	recursiveShape(300,300,600);
	angle += 0.01
}

function recursiveShape(x,y,diameter){

	numCalls++;
	console.log(numCalls);

	push();
	translate(x,y);
	rotate(angle);
	noFill();
	let weight = map(diameter,0,300,1,5);
	let hue = map(diameter,0,300,0,360)
	let alpha = map(diameter,0,300,75,25)
	stroke(hue,100,100,alpha);
	strokeWeight(weight)
	if (numCalls % 2 == 0){
	rect(0,0,diameter,diameter);
	} else {
	ellipse(0,0,diameter);
	}
	pop();

	xMovement = map(noise(frameCount * 0.005),0,1,-150,150);

	yMovement = -xMovement;
	console.log(xMovement);


	if (diameter > 8){
	recursiveShape(x+xMovement,y+yMovement,diameter/divideFactor.value());
	recursiveShape(x-xMovement,y-yMovement,diameter/divideFactor.value());
	recursiveShape(x+xMovement,y-yMovement,diameter/divideFactor.value());
	recursiveShape(x-xMovement,y+yMovement,diameter/divideFactor.value());


	}

}

function shapeFunction(){
	shape++;
}