class Leaf {
	constructor(x, y, index) {
		this.pos = createVector(x, y);
		this.vel = createVector(0, 0);
		this.acc = createVector(0, 0);

		this.index = index;
		this.hue = random(0, 85);
		this.mass = random(0.5, 1.5);

		this.radius = this.mass * 10;

		this.brightness = 0;

		this.inWater = random(500, height)
	}


	addForce(force) {
		let forceWithMass = p5.Vector.div(force, this.mass);
		this.acc.add(forceWithMass);
	}


	update(index) {

		if (this.pos.x > 490 && this.pos.y > this.inWater) {
			// only use one constant.
			// fDrag = -C * mag(velocity)^2
			let dragConstant = -0.05;
			let forceDrag = this.vel.mag() * this.vel.mag() * dragConstant;
			let drag = p5.Vector.normalize(this.vel);
			this.inWater = 500
			drag.mult(forceDrag);
			this.addForce(drag);
			this.brightness = 40;
		} else {
			this.brightness = 0;
		}
		// FORCES
		this.addForce(downwardGravity);
		this.addForce(wind[index]);
		this.index = index

		// MOVEMENT
		this.vel.add(this.acc); // Apply acceleration (and thus the forces) to vel
		this.vel.limit(5); // This limits the magnitude of the velocity vector
		this.pos.add(this.vel); // Apply velocity to position


		this.acc.mult(0);
	}

	show() {
		push();
		strokeWeight(1);
		translate(this.pos.x, this.pos.y);
		rotate(rotation[this.index]);
		stroke(this.hue, 100, 100 - this.brightness)
		fill(this.hue, 100, 100 - this.brightness, 50);
		beginShape();
		curveVertex(0, 0 - this.radius);
		curveVertex(0 - this.radius / 2, 0)
		curveVertex(0, 0 + this.radius);
		curveVertex(0 + this.radius / 2, 0)
		endShape(CLOSE);
		pop();
	}

}

class LeafCluster {
	constructor(x, y, xSize, ySize) {
		this.centerX = x;
		this.centerY = y;

		this.ampX = random(1, xSize);
		this.ampY = random(1, ySize);

		this.percentX = this.ampX / xSize;
		this.percentY = this.ampY / ySize;

		this.angle = (random(0, 2 * PI))

		this.radius = random(2, 12);
		this.hue = random(0, 85);

		this.x = this.centerX + this.ampX * cos(this.angle);
		this.y = this.centerY + this.ampY * sin(this.angle);

		this.rotation = random(0, 2 * PI);

		this.bright = random(90, 100)

		if (this.percentX > 0.75 && this.percentY > 0.75) {
			this.bright = this.bright - 30;
		}
	}

	show() {
		push()
		translate(this.x, this.y)
		rotate(this.rotation);
		strokeWeight(1);
		stroke(this.hue, 100, this.bright)
		fill(this.hue, 100, this.bright, 30);
		beginShape();
		curveVertex(0, -this.radius);
		curveVertex(-this.radius / 2, 0)
		curveVertex(0, this.radius);
		curveVertex(this.radius / 2, 0)
		endShape(CLOSE);
		pop();

		if (frameCount % 300 <= 25 && frameCount % 300 >= 0) {
			this.move();
			leavesFall = true;
		} else {
			leavesFall = false;
		}
	}

	move() {
		this.x += random(-1, 1)
		this.y += random(-1, 1)

	}
}