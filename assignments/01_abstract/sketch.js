// 01_abstract Assignment
// CSC-496 Computational Art 
// This program draws a self portrait of me out of dots.

// Create array to hold objects
let face = [];
let backgroundArray = [];
let stars = [];

function setup() {
	createCanvas(600, 600);
	background(100);
	angleMode(DEGREES);
	colorMode(HSB, 360, 100, 100, 100);
	//frameRate(20);
	textAlign(CENTER, TOP);
	textFont('Courier New');
	// function is responsible for generating all of the dot objects
	dotProduction();

	for (let i = 0; i < 250; i++){
		stars.push(new fallingStar(i * width/250));
	}

}

function draw() {
	console.log(frameRate());
	if (mouseY > height){
		mouseY = height;
	}
	// set background
	background(100);
	fill(180,70 - (mouseY/10),80 - (mouseY/7.5),100);
	rect(0,0,width,height);
	
	backgroundGenerator(mouseY);

	for (let i = 0; i <backgroundArray.length; i++){
		backgroundArray[i].display();
	}

	for(let i =0; i < stars.length; i++){
		stars[i].display();
	}

	// go through the array of objects and display each one
	for (let i = 0; i < face.length; i++) {
		face[i].display();
		face[i].randomize();
	}

	fill(180,0,80 - (mouseY/7.5),0 + (mouseY/20));
	rect(0,0,width,height);

	// remove all objects from the array, they will be generated at a new random position
	// with the next draw iteration
	backgroundArray.splice(0, backgroundArray.length); 


}


// creates a single dot
// give parameters for the potential circular area a dot can be spawned in and the color of the dot
class Feature {

	constructor(x, y, size, maxWidth, maxHeight, hMin, hMax, sMin, sMax, bMin, bMax, percentMarg, alpha = 100, movement = 0, moveFactor) {

		this.maxWidth = maxWidth;
		this.maxHeight = maxHeight;
		this.hMin = hMin;
		this.hMax = hMax;
		this.sMin = sMin;
		this.sMax = sMax;
		this.bMin = bMin;
		this.bMax = bMax;
		this.percentMarg = percentMarg;

		// Center coordinates of the face
		this.centerX = x + 100;
		this.centerY = y + 100;

		// Size of dot
		this.size = size;

		// Randomly generated values for circular positioning
		this.angle = random(0, 360);
		this.ampX = random(1, this.maxWidth);
		this.ampY = random(1, this.maxHeight);

		// Calculate x and y position with sine and cosine
		this.x = this.centerX + this.ampX * cos(this.angle);
		this.y = this.centerY + this.ampY * sin(this.angle);

		this.moveFactor = moveFactor;

		// Percentage calculated based on position comapred to total range of x and y 
		this.percentX = this.ampX / maxWidth;
		this.percentY = this.ampY / maxHeight;

		this.value = 0;

		this.position = 0;

		// Generate hue value
		this.hue = random(hMin, hMax)

		// transparency value
		this.alpha = alpha;

		// Determines saturation and brightness based on position of x and y from center of face
		if (this.percentX > percentMarg && this.percentY > percentMarg) {
			this.sat = random(sMin + 5, sMax + 10);
			this.bright = random(bMin - 10, bMax - 10);
		} else {
			this.sat = random(sMin, sMax)
			this.bright = random(bMin, bMax)
		}

		this.movement = movement

	}

	// displays the dot given the constructor parameters
	display() {
		if (this.movement == 1){
			this.value = mouseY/this.moveFactor
		}
		noStroke();
		fill(this.hue, this.sat, this.bright, this.alpha);
		ellipse(this.x, this.y + this.value, this.size, this.size);

	}

	randomize(){
		// Randomly generated values for circular positioning
		this.angle = random(0, 360);
		this.ampX = random(1, this.maxWidth);
		this.ampY = random(1, this.maxHeight);

		// Calculate x and y position with sine and cosine
		this.x = this.centerX + this.ampX * cos(this.angle);
		this.y = this.centerY + this.ampY * sin(this.angle);

		// Generate hue value
		this.hue = random(this.hMin, this.hMax)

		// Determines saturation and brightness based on position of x and y from center of face
		if (this.percentX > this.percentMarg && this.percentY > this.percentMarg) {
			this.sat = random(this.sMin + 5, this.sMax + 10);
			this.bright = random(this.bMin - 10, this.bMax - 10);
		} else {
			this.sat = random(this.sMin, this.sMax)
			this.bright = random(this.bMin, this.bMax)
		}
	}


}

class fallingStar{
	constructor(xval){
		this.x = xval;
		this.y = random(-300,0);
		this.initialY = this.y;
		this.angle = 0;
		this.rotation = random(5,25);
		this.hue = random(165,200)
		this.sat = random(15,100)
		this.bright = random(75,100);
		this.alpha = random(5,45);
		this.alterVal = -1;
		this.divisor = random(15,30);
		this.size = random(2,17);
		this.text = '';
		this.strAmount = random(20,100);
		for (let i = 0; i < this.strAmount; i++){
			this.random = random(['0\n','1\n']);
			this.text += this.random;
		}
	}

	display(){
		this.hueAlter = this.alterVal * (mouseY/this.divisor);
		//console
		this.angle += this.rotation;
		if (this.y > height){
			this.y = this.initialY;
		} else {
			this.y += this.rotation
		}
		textSize(this.size);
		fill((this.hue + this.hueAlter),this.sat,this.bright,this.alpha);
		text(this.text,this.x,this.y);
	}

}

function backgroundGenerator(mouseValue){
	// background
	for (let i = 0; i < 7000; i++){
		backgroundArray.push(new Feature(200, 200, 20,600,600,170,200,60- (mouseValue/10),80- (mouseValue/10),70 - (mouseValue/7.5),90- (mouseValue/7.5),5));
	}
}

// responsible for generating the 50000 dot objects in the sketch
function dotProduction(){
	
	
	// hair 
	for (let i = 0; i < 5000; i++){
		face.push(new Feature(200, 315, 30, 130, 250, 20, 30, 60, 80, 25, 35, 0.9));
		face.push(new Feature(200, 200, 30, 120, 140, 20, 30, 60, 80, 25, 35, 0.9));

	}

	// shirt
	for (let i = 0; i < 15000; i++) {
		face.push(new Feature(200, 600, 20, 275, 275, 325, 340, 40, 50, 75, 95, 0.85));
	}
	
	// ears
	for (let i=0; i < 500; i++){
		face.push(new Feature(110, 220, 5, 20, 40, 20, 30, 30, 50, 85, 90, 0.85));
		face.push(new Feature(290, 220, 5, 20, 40, 20, 30, 30, 50, 85, 90, 0.85));
	}
	
	// neck
	for (let i = 0; i < 2000; i++) {
		face.push(new Feature(200, 300, 15, 57, 125, 20, 30, 30, 50, 85, 90, 1));
	}

	// face
	for (let i = 0; i < 10000; i++) {
		face.push(new Feature(200, 200, 15, 90, 125, 25, 35, 25, 40, 95, 100, 1, 100, 1, 250));
	}
	
	// hair over shirt
	for (let i = 0; i < 500; i++){
		face.push(new Feature(100, 350, 10, 45, 100, 20, 30, 60, 80, 30, 40, 0.8));
		face.push(new Feature(300, 350, 10, 45, 100, 20, 30, 60, 80, 30, 40, 0.8));
		face.push(new Feature(100, 450, 10, 45, 100, 20, 30, 60, 80, 25, 45, 0.8));
		face.push(new Feature(300, 450, 10, 45, 100, 20, 30, 60, 80, 25, 45, 0.8));

	}

	// eye contour
	for (let i = 0; i < 500; i++) {
		face.push(new Feature(150, 180, 7, 30, 20, 25, 35, 25, 40, 90, 95, 0.85));
		face.push(new Feature(250, 180, 7, 30, 20, 25, 35, 25, 40, 90, 95, 0.85));
	}

	// eye whites
	for (let i = 0; i < 500; i++) {
		face.push(new Feature(150, 180, 6, 20, 10, 0, 0, 0, 0, 95, 100, 0.75));
		face.push(new Feature(250, 180, 6, 20, 10, 0, 0, 0, 0, 95, 100, 0.75));
	}

	// iris
	for (let i = 0; i < 1000; i++) {
		face.push(new Feature(150, 180, 4, 10, 10, 20, 30, 60, 100, 20, 40, 0.8));
		face.push(new Feature(250, 180, 4, 10, 10, 20, 30, 60, 100, 20, 40, 0.8));
	}

	// pupils
	for (let i = 0; i < 500; i++) {
		face.push(new Feature(150, 180, 2, 6, 6, 20, 30, 60, 100, 0, 5, 0.8));
		face.push(new Feature(250, 180, 2, 6, 6, 20, 30, 60, 100, 0, 5, 0.8));
	}
	
	// eye lashes
	for (let i = 0; i < 50; i++) {
		face.push(new Feature(250, 170, 2, 22, 2, 25, 35, 25, 40, 0, 5, 1, 100, 1, 32));
		face.push(new Feature(150, 170, 2, 22, 2, 25, 35, 25, 40, 0, 5, 1, 100, 1, 32));
	}

	// eye lids
	for (let i = 0; i < 250; i++) {
		face.push(new Feature(250, 160, 5, 30, 10, 25, 35, 25, 40, 90, 95, 0.85, 100, 1, 32));
		face.push(new Feature(150, 160, 5, 30, 10, 25, 35, 25, 40, 90, 95, 0.85, 100, 1, 32));
	}

	// eyebrows
	for (let i = 0; i < 200; i++) {
		face.push(new Feature(250, 155, 3, 30, 5, 20, 30, 60, 100, 30, 50, 0.9, 100, 1, 250));
		face.push(new Feature(150, 155, 3, 30, 5, 20, 30, 60, 100, 30, 50, 0.9, 100, 1, 250));
	}
	
	for (let i = 0; i < 100; i++) {
		face.push(new Feature(235, 155, 3, 12, 8, 20, 30, 60, 100, 30, 50, 0.9, 100, 1, 125));
		face.push(new Feature(175, 155, 3, 12, 8, 20, 30, 60, 100, 30, 50, 0.9, 100, 1, 125));
	}

	// nose bridge contour
	for (let i = 0; i < 150; i++) {
		face.push(new Feature(185, 205, 5, 10, 35, 20, 35, 30, 35, 85, 100, 1, 100, 1, 250));
		face.push(new Feature(215, 205, 5, 10, 35, 20, 35, 30, 35, 85, 100, 1, 100, 1, 250));
	}

	// nose bridge highlight	
	for (let i = 0; i < 50; i++) {
		face.push(new Feature(200, 205, 5, 8, 35, 20, 35, 15, 20, 95, 100, 1, 100, 1, 250));
	}

	// nose bulb contour
	for (let i = 0; i < 75; i++) {
		face.push(new Feature(180, 235, 5, 15, 12, 20, 35, 25, 30, 80, 95, 0.8, 100, 1, 250));
		face.push(new Feature(220, 235, 5, 15, 12, 20, 35, 25, 30, 80, 95, 0.8, 100, 1, 250));
		face.push(new Feature(200, 235, 10, 15, 15, 15, 35, 25, 30, 85, 95, 0.9, 100, 1, 250));
	}

	// nose bulb highlight
	for (let i = 0; i < 100; i++) {
		face.push(new Feature(200, 235, 5, 15, 10, 20, 35, 20, 30, 95, 100, 1, 100, 1, 250));
		face.push(new Feature(180, 232, 3, 5, 7, 10, 35, 15, 20, 93, 98, 1, 100, 1, 250));
		face.push(new Feature(220, 232, 3, 5, 7, 10, 35, 15, 20, 93, 98, 1, 100, 1, 250));
	}

	// lips
	for (let i = 0; i < 50; i++) {
		face.push(new Feature(188, 272, 2, 5, 5, 0, 20, 40, 60, 85, 90, 0.75, 100, 1, 150));
		face.push(new Feature(212, 272, 2, 5, 5, 0, 20, 40, 60, 85, 90, 0.75, 100, 1, 150));
	}

	for (let i = 0; i < 500; i++) {
		face.push(new Feature(200, 277, 2, 40, 8, 0, 20, 40, 60, 85, 90, 0.75, 100, 1, 250));
		face.push(new Feature(200, 277, 2, 40, 2, 0, 20, 40, 60, 65, 80, 0.75, 100, 1, 250));
	}

	// nostrils
	for (let i = 0; i < 75; i++) {
		face.push(new Feature(186, 245, 2, 5, 1, 10, 35, 20, 40, 30, 40, 1, 10, 1, 250));
		face.push(new Feature(214, 245, 2, 5, 1, 10, 35, 20, 40, 30, 40, 1, 10, 1, 250));
	}
	
	// cupids bow contour
	for (let i = 0; i < 150; i++){
		face.push(new Feature(200,260,2,10,10, 20, 35, 30, 35, 87, 97, 0.9, 100, 1, 250))
	}
	
	// cupids bow highlight
	for (let i = 0; i < 50; i++){
		face.push(new Feature(200,260,2,3,7, 20, 35, 15, 20, 95, 100, 0.9, 100, 1, 250))
	}
	
	
	// cheek blush
	for (let i = 0; i < 10; i++){
		face.push(new Feature(140, 220, 25, 20, 20, 0, 20, 40, 60, 90, 95, 0.75, 5));
		face.push(new Feature(260, 220, 25, 20, 20, 0, 20, 40, 60, 90, 95, 0.75, 5));
	}
	
	// front hair strands
	for (let i = 0; i < 200; i++){
		face.push(new Feature(165, 90, 10, 30, 15, 20, 30, 60, 80, 25, 35, 0.9));
		face.push(new Feature(235, 90, 10, 30, 15, 20, 30, 60, 80, 25, 35, 0.9));
		face.push(new Feature(175, 80, 10, 20, 15, 20, 30, 60, 80, 25, 35, 0.9));
		face.push(new Feature(225, 80, 10, 20, 15, 20, 30, 60, 80, 25, 35, 0.9));
		face.push(new Feature(140, 95, 10, 20, 15, 20, 30, 60, 80, 25, 35, 0.9));
		face.push(new Feature(260, 95, 10, 20, 15, 20, 30, 60, 80, 25, 35, 0.9));
	}

}





// Notes:
// Alter eyelids, eyebrows, lips
// Mouse Y position corresponds to movement of features