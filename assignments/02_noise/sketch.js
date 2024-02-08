
// holds the offset values for the curve vertices' perlin noise
let verticeOffset = [];

// holds the coordinates for the curve vertices
let xVertices = [];
let yVertices = [];

// light beam hue
let hue = 40

// expand the range of the light beam vertices as time progresses
let xExpand = 0;
let yExpand = 0;

// holds the offset values for the disco ball 
let hOffset = [];
let sOffset = [];
let bOffset = [];

// alter disco ball hook movement
let hookRotate = 0;
let hookDirection = 1;

// holds all the disco ball tiles
let disco = [];


function setup() {
	createCanvas(1200, 700);
	colorMode(HSB, 360, 100, 100, 100)
	background(0);
	angleMode(DEGREES)


	// generates offset for the light beam vertices 
	for (let i = 0; i < 25; i++) {
		verticeOffset.push(random(0, 100000));
	}

	// draws the dark stair background
	stairScene();


	// generates offset for disco colors
	for (let i = 0; i < 10000; i++) {
		hOffset.push(random(0,100000));
		sOffset.push(random(0,100000));
		bOffset.push(random(0,100000));
	}

	// generates new disco ball tiles
	for (let i = 0; i < 600; i++){
		disco.push(new tile())
	}


}


function lightBeam() {

	// use perlin noise to map 5 new points for the curve vertex light beam
	for (let i = 0; i < 5; i++) {
		xVertices[i] = map(noise(verticeOffset[i]), 0, 1, 308 - xExpand, 310 + xExpand);
		yVertices[i] = map(noise(verticeOffset[i + 20]), 0, 1, 230, 235 + yExpand);

	}

	// light beam stroke details
	strokeWeight(0.25);
	stroke(map(frameCount % 360, 0, 360, hue - 20, hue + 20), 50, 100, 1);
	noFill();


	// draw the curve vertex shape (5 vertices)
	beginShape();
	for (let i = 0; i < 5; i++) {
		curveVertex(xVertices[i], yVertices[i])
	}
	endShape();


	// increase the offset for the vertices' perlin noise
	for (let i = 0; i < verticeOffset.length; i++) {
		verticeOffset[i] += 0.005
	}

	// so long as the x and y bounds are not met,
	// continue icreasing the range the light beam can generate vertices
	if (xExpand < 100) {
		xExpand += 0.1;
	}
	if (yExpand < 180) {
		yExpand += 0.1;
	}

	// Execute after 2500 frames have passed
	if (frameCount % 2500 == 0) {

		// redraw background
		stairScene();

		// reset bounds
		xExpand = 0;
		yExpand = 0;

	}
}


function draw() {

	// draws section rectangle for disco balls
	noStroke();
	fill(5);
	rect(600,0,600,700);

	// draws and scales disco balls
	push()
	translate(750,250);
	scale(0.75)
	discoBall(250);
	pop()

	// draws and scales disco balls
	push()
	translate(650,0);
	scale(0.5)
	discoBall(200);
	pop()

	// draws and scales disco balls
	push()
	translate(1000,0);
	scale(0.25)
	discoBall(310);
	pop()

	


	// draw the light beam emmitting
	lightBeam();
}

function discoBall(hueVal){

	// background of disco ball
	fill(50);
	ellipse(300,350,400);

	// counts which tile the for loop is on
	let count = 0;

	// iterates through all of the disco tiles
	for (let i = 1; i < 30; i++) {
		for (let j = 1; j < 20; j++) {
			
			// Uses perlin noise for color
			let hue = map(noise(hOffset[i * j]), 0, 1, hueVal-50, hueVal+50)
			let sat = map(noise(bOffset[i * j]), 0, 1, 0, 100);
			let bright = map(noise(sOffset[i * j]), 0, 1, 90, 100)

			// draws and moves the tiles
			noStroke();
			fill(hue, sat, bright);
			disco[count].display(i,j);
			disco[count].move();
			
			// increase tile count
			count++;
			}
		
	}

	stroke(0);
	strokeWeight(170);
	noFill();

	// generates gradient shadow ring surrounding the disco ball
	for (let i = 380; i < 750; i++){
		strokeWeight(1);
		stroke(0,0,map(i,380,950,0,10))
		ellipse(300,360,i)
	}

	// adjusts offsets for hue, sat, and brightness perlin noise
	for (let i = 0; i < hOffset.length; i++) {
		hOffset[i] += 0.001
		sOffset[i] += 0.01
		bOffset[i] += 0.01
	}

	// draws disco ceiling mount
	stroke(50);
	strokeWeight(2);
	ellipse(300,130,45-hookRotate,45,50);
	stroke(75);
	line(300,152,300,170);
	line(300,108,300,0)
	noStroke();


	// alters the width of the disco hook giving the illusion of rotation
	hookRotate = hookRotate + (0.1 * hookDirection)

	// switch hook rotation direction once width reaches certain size
	if ((45-hookRotate) < 1 || (45-hookRotate) > 45){
		hookDirection *= -1
	}

	// transparent gradient overlay to add dimension
	for (let i = 0; i < 380; i++){
		noFill()
		strokeWeight(1);
		stroke(0,0,map(i,0,380,100,0),map(i,0,380,0,40))
		ellipse(300,360,i);
	}
}


class tile{

	// draws a disco tile
	constructor(){

		// x and y posiiton of a tile
		this.x = 0;
		this.y = 0;
		
		// amount the tile will be shifted by
		this.increment = 0;
	}


	// draw the tiles updated location
	display(i,j){
		this.x = i
		this.y = j
		rect((this.increment + (this.x * 20))%580, (this.y * 20)+150, 20, 20,3);
		print(this.increment + (this.x * 20))
	}
	
	// update the movement variable
	move(){
		this.increment += 0.5;
	}
	
	
}

function stairScene(){

	// background greyscale gradient
	for (let i = 0; i < 301; i++) {
		strokeWeight(1);
		stroke(0, 0, map(i, 0, 301, 0, 10))
		line(i, 0, i, height);
		line(600 - i, 0, 600 - i, 700);
	}

	// background fill of all the steps from closest to furthest
	fill(220, 0, 6)
	quad(15, 700, 585, 700, 505, 600, 95, 600) 
	fill(220, 0, 8)
	quad(95, 575, 505, 575, 485, 555, 115, 555)
	fill(220, 0, 10)
	quad(115, 535, 485, 535, 470, 520, 130, 520)
	fill(220, 0, 12)
	quad(130, 505, 470, 505, 410, 450, 190, 450)
	fill(220, 0, 14)
	quad(190, 438, 410, 438, 397, 428, 203, 428)
	fill(220, 0, 16)
	quad(205, 420, 395, 420, 385, 410, 215, 410)
	fill(220, 0, 18)
	quad(215, 405, 385, 405, 345, 380, 255, 380)
	fill(220, 0, 20)
	quad(255, 375, 345, 375, 335, 370, 265, 370)

	fill(220, 0, 4)
	rect(95, 575, 410, 25)
	fill(220, 0, 5)
	rect(115, 535, 370, 20)
	fill(220, 0, 6)
	rect(130, 505, 340, 15)
	fill(220, 0, 7)
	rect(190, 438, 220, 12)
	fill(220, 0, 8)
	rect(205, 420, 190, 8)
	fill(220, 0, 9)
	rect(215, 405, 170, 5)
	fill(220, 0, 10)
	rect(255, 375, 90, 5)

	// lines for the step outlines

	stroke(0, 0, 0)
	strokeWeight(2)

	line(95, 600, 15, 700)
	line(505, 600, 585, 700)

	line(95, 600, 505, 600) //1st step
	line(95, 575, 505, 575)
	line(95, 575, 95, 600)
	line(505, 575, 505, 600)

	line(115, 555, 485, 555)
	line(95, 575, 115, 555)
	line(505, 575, 485, 555)

	line(485, 555, 485, 535)
	line(115, 555, 115, 535)
	line(485, 535, 115, 535)

	line(130, 520, 470, 520)
	line(130, 520, 115, 535)
	line(470, 520, 485, 535)

	line(130, 520, 130, 505)
	line(470, 520, 470, 505)
	line(130, 505, 470, 505)

	line(190, 450, 410, 450)
	line(190, 450, 130, 505)
	line(470, 505, 410, 450)

	line(410, 450, 410, 438)
	line(190, 450, 190, 438)
	line(190, 438, 410, 438)

	line(205, 428, 395, 428)
	line(190, 438, 205, 428)
	line(410, 438, 395, 428)

	line(205, 428, 205, 420)
	line(395, 428, 395, 420)
	line(205, 420, 395, 420)

	line(215, 412, 385, 412)
	line(215, 412, 205, 420)
	line(395, 420, 385, 412)

	line(385, 412, 385, 405)
	line(215, 412, 215, 405)
	line(385, 405, 215, 405)

	line(255, 380, 345, 380)
	line(255, 380, 215, 405)
	line(345, 380, 385, 405)

	line(255, 380, 255, 375)
	line(345, 380, 345, 375)
	line(255, 375, 345, 375)

	line(265, 370, 335, 370)
	line(265, 370, 255, 375)
	line(335, 370, 345, 375)

	// lamp post
	fill(0);
	rect(325, 220, 1, 150);
	quad(325, 340, 326, 340, 330, 370, 321, 370);
	rect(320.5, 220, 10, 2);
	ellipse(325.5, 219, 3, 3);
	noFill();
	stroke(0);
	arc(315, 220, 10, 15, 180, 360);
	fill(0);
	noStroke();
	ellipse(310, 223, 5, 5);
	arc(310, 228, 15, 10, 180, 360);
	ellipse(310, 228, 20, 2);
	fill(50, 100, 100, 40);
	arc(310, 228, 5, 5, 0, 180);
}