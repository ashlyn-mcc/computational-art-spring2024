function setup() {
	createCanvas(600, 700);
	colorMode(HSB, 360, 100, 100, 100)
	background(0);
	angleMode(DEGREES)


	for (let i = 0; i < 40; i++) {
		offset.push(random(0, 100000));
	}

	for (let i = 0; i < 301; i++) {
		strokeWeight(1);
		stroke(0, 0, map(i, 0, 301, 0, 10))
		line(i, 0, i, height);
		line(width - i, 0, width - i, height);
	}

	bkgrdfill()
	Steps()

	lightfixture();





}

function draw() {
	flow();
}

function Steps() {


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


}

function bkgrdfill() {

	fill(220, 0, 6)
	quad(15, 700, 585, 700, 505, 600, 95, 600) //steps
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

}

function lightfixture() {

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

let offset = [];
let xVertices = [];
let yVertices = [];

let hue = 40

let expand = 0;
let yexpand = 0;

function flow() {
	for (let i = 0; i < 5; i++) {
		xVertices[i] = map(noise(offset[i]), 0, 1, 308 - expand, 310 + expand);
		yVertices[i] = map(noise(offset[i + 20]), 0, 1, 230, 235 + yexpand);

	}

	strokeWeight(0.25);
	stroke(map(frameCount % 360, 0, 360, hue - 20, hue + 20), 50, 100, 1);
	noFill();

	beginShape();

	for (let i = 0; i < 5; i++) {
		curveVertex(xVertices[i], yVertices[i])
	}

	endShape();




	for (let i = 0; i < offset.length; i++) {
		offset[i] += 0.005
	}

	if (expand < 100) {
		expand += 0.1;
	}
	if (yexpand < 180) {
		yexpand += 0.1;
	}

	if (frameCount % 2500 == 0) {
		for (let i = 0; i < 301; i++) {
			strokeWeight(1);
			stroke(0, 0, map(i, 0, 301, 0, 10))
			line(i, 0, i, height);
			line(width - i, 0, width - i, height);
		}
		bkgrdfill()
		Steps()
		lightfixture();
		expand = 0;
		yexpand = 0;

	}
}