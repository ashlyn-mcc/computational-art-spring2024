// draws the sky line
class Sky {
	constructor(index) {

		// generates white-ish blue color
		this.hue = random(200, 210);
		this.sat = random(20, 40);
		this.bright = random(90, 100);

		this.x = random(-100, width + 100);
		this.y = random(0, height / 2)
		this.length = random(10, 400);
		this.height = random(2, 5)

		this.index = index;
	}

	update() {
		noStroke();
		fill(this.hue, this.sat, this.bright);
		rect(this.x, this.y, this.length, this.height);
	}
}

class Cloud {
	constructor(x, y) {
		this.hue = 0
		this.sat = 0
		this.bright = 100;

		this.pieces = [];

		this.centerX = x;
		this.centerY = y;

		this.offset = 0;

		this.brightnessArray = [];
		for (let i = 0; i < 75; i++) {
			this.brightnessArray.push(random(92, 100));
		}

		this.cloudsX = [];
		this.cloudsY = [];

		for (let i = 0; i < 15; i++) {
			this.cloudsX.push(random(0, 100))
			this.cloudsY.push(random(0, 100))
		}
	}


	// uses polar coordinates to draw cloud circles
	ball(xVal, yVal) {
		for (let i = 0; i < 75; i++) {
			strokeWeight(2);
			stroke(0, 0, this.brightnessArray[i], 60);
			this.x1 = xVal + 40 * cos(map(i, 0, 75, 0, 2 * PI));
			this.y1 = yVal + 40 * sin(map(i, 0, 75, 0, 2 * PI));
			this.x2 = xVal + 40 * cos(map(i, 0, 75, 2 * PI, 0));
			this.y2 = yVal + 40 * sin(map(i, 0, 75, 2 * PI, 0));
			line(this.x1, this.y1, this.x2, this.y2)
		}
	}

	// puts the circles together into cloud shape
	update() {
		push();
		translate(this.centerX, this.centerY)
		this.ball(100, -25);
		this.ball(50, 0);
		this.ball(25, 25);
		this.ball(50, 25);
		this.ball(100, 25);
		this.ball(125, 0);
		this.ball(150, 25);
		pop();
	}

}