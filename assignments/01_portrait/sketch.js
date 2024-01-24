let face = [];

function setup() {
	createCanvas(600, 600);
	background(100);
	angleMode(DEGREES);
	colorMode(HSB, 360, 100, 100, 100);
	frameRate(4);
}

function draw() {
	clear();
	background(0);
	fill(180,70,80);
	rect(0,0,width,height);
	
	
	Initialization();
	for (let i = 0; i < face.length; i++) {
		face[i].display();
	}
	face.splice(0, face.length); 
	print(face);
}

function Initialization(){
	
	// background
	for (let i = 0; i < 2500; i++){
		face.push(new Feature(200, 200, 50,600,600,160,200,60,80,70,90));
	}
	
	// hair 
	for (let i = 0; i < 5000; i++){
		face.push(new Feature(200, 315, 30, 130, 250, 20, 30, 60, 80, 25, 35, 0.9));
		face.push(new Feature(200, 200, 30, 120, 140, 20, 30, 60, 80, 25, 35, 0.9));

	}

	// shirt
	for (let i = 0; i < 10000; i++) {
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
		face.push(new Feature(200, 200, 15, 90, 125, 25, 35, 25, 40, 95, 100, 0.95));
	}
	
	// front hair 
	for (let i = 0; i < 500; i++){
		face.push(new Feature(100, 350, 10, 45, 100, 20, 30, 60, 80, 30, 40, 0.8));
		face.push(new Feature(300, 350, 10, 45, 100, 20, 30, 60, 80, 30, 40, 0.8));
		face.push(new Feature(100, 450, 10, 45, 100, 20, 30, 60, 80, 40, 55, 0.8));
		face.push(new Feature(300, 450, 10, 45, 100, 20, 30, 60, 80, 40, 55, 0.8));

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
		face.push(new Feature(250, 170, 2, 22, 2, 25, 35, 25, 40, 0, 5, 1));
		face.push(new Feature(150, 170, 2, 22, 2, 25, 35, 25, 40, 0, 5, 1));
	}

	// eye lids
	for (let i = 0; i < 50; i++) {
		face.push(new Feature(250, 165, 5, 30, 5, 25, 35, 25, 40, 90, 95, 0.85));
		face.push(new Feature(150, 165, 5, 30, 5, 25, 35, 25, 40, 90, 95, 0.85));
	}

	// eyebrows
	for (let i = 0; i < 200; i++) {
		face.push(new Feature(250, 155, 3, 30, 5, 20, 30, 60, 100, 30, 50, 0.9));
		face.push(new Feature(150, 155, 3, 30, 5, 20, 30, 60, 100, 30, 50, 0.9));
	}
	
	for (let i = 0; i < 100; i++) {
		face.push(new Feature(235, 155, 3, 12, 8, 20, 30, 60, 100, 30, 50, 0.9));
		face.push(new Feature(175, 155, 3, 12, 8, 20, 30, 60, 100, 30, 50, 0.9));
	}

	// nose bridge contour
	for (let i = 0; i < 150; i++) {
		face.push(new Feature(185, 205, 5, 10, 35, 20, 35, 30, 35, 85, 100, 1));
		face.push(new Feature(215, 205, 5, 10, 35, 20, 35, 30, 35, 85, 100, 1));
	}

	// nose bridge highlight	
	for (let i = 0; i < 50; i++) {
		face.push(new Feature(200, 205, 5, 8, 35, 20, 35, 15, 20, 95, 100, 1));
	}

	// nose bulb contour
	for (let i = 0; i < 75; i++) {
		face.push(new Feature(180, 235, 5, 15, 12, 20, 35, 25, 30, 80, 95, 0.8));
		face.push(new Feature(220, 235, 5, 15, 12, 20, 35, 25, 30, 80, 95, 0.8));
		face.push(new Feature(200, 235, 10, 15, 15, 15, 35, 25, 30, 85, 95, 0.9));
	}

	// nose bulb highlight
	for (let i = 0; i < 100; i++) {
		face.push(new Feature(200, 235, 5, 15, 10, 20, 35, 30, 20, 95, 100, 1));
		face.push(new Feature(180, 232, 3, 5, 7, 10, 35, 15, 20, 93, 98, 1));
		face.push(new Feature(220, 232, 3, 5, 7, 10, 35, 15, 20, 93, 98, 1));
	}

	// lips
	for (let i = 0; i < 500; i++) {
		face.push(new Feature(200, 277, 2, 40, 8, 0, 20, 40, 60, 85, 90, 0.75));
		face.push(new Feature(190, 275, 2, 10, 5, 0, 20, 40, 60, 85, 90, 0.75));
		face.push(new Feature(210, 275, 2, 10, 5, 0, 20, 40, 60, 85, 90, 0.75));
		face.push(new Feature(200, 277, 2, 40, 2, 0, 20, 40, 60, 65, 80, 0.75));
	}


	// nostrils
	for (let i = 0; i < 60; i++) {
		face.push(new Feature(186, 245, 2, 5, 2, 10, 35, 20, 40, 30, 40, 1));
		face.push(new Feature(214, 245, 2, 5, 2, 10, 35, 20, 40, 30, 40, 1));
	}
	
	// cupids bow contour
	for (let i = 0; i < 150; i++){
		face.push(new Feature(200,260,2,10,10, 20, 35, 30, 35, 87, 97, 0.9))
	}
	
	// cupids bow highlight
	for (let i = 0; i < 50; i++){
		face.push(new Feature(200,260,2,3,7, 20, 35, 15, 20, 95, 100, 0.9))
	}
	
	// cheek contour
	for (let i = 0; i < 20; i++){
		face.push(new Feature(120, 240, 10, 11, 25, 25, 35, 25, 40, 85, 95, 0.85));
		face.push(new Feature(280, 240, 10, 11, 25, 25, 35, 25, 40, 85, 95, 0.85));
	}
	
	// cheek blush
	for (let i = 0; i < 55; i++){
		face.push(new Feature(140, 220, 7, 20, 20, 0, 20, 40, 60, 90, 95, 0.75, 10));
		face.push(new Feature(260, 220, 7, 20, 20, 0, 20, 40, 60, 90, 95, 0.75, 10));
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

class Feature {

	constructor(x, y, size, maxWidth, maxHeight, hMin, hMax, sMin, sMax, bMin, bMax, percentMarg, alpha = 100) {

		this.alpha = alpha;
		// Center coordinates of the face
		this.centerX = x + 100;
		this.centerY = y + 100;

		// Size of dot
		this.size = size;

		// Randomly generated values for circular positioning
		this.angle = random(0, 360);
		this.ampX = random(1, maxWidth);
		this.ampY = random(1, maxHeight);

		// Calculate x and y position with sine and cosine
		this.x = this.centerX + this.ampX * cos(this.angle);
		this.y = this.centerY + this.ampY * sin(this.angle);

		// Percentage calculated based on position comapred to total range of x and y 
		this.percentX = this.ampX / maxWidth;
		this.percentY = this.ampY / maxHeight;

		// Calculate hue value
		this.hue = random(hMin, hMax)

		// Determines saturation and brightness based on position of x and y from center of face
		if (this.percentX > percentMarg && this.percentY > percentMarg) {
			this.sat = random(sMin + 5, sMax + 10);
			this.bright = random(bMin - 10, bMax - 10);
		} else {
			this.sat = random(sMin, sMax)
			this.bright = random(bMin, bMax)
		}

	}

  
	display() {
		noStroke();
		fill(this.hue, this.sat, this.bright, this.alpha);
		ellipse(this.x, this.y, this.size, this.size);
	}

}

