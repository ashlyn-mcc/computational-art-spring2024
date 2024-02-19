
// class for the leaves that fall from the tree
class Leaf {
	constructor(x, y, index) {

		// have a position, velocity, and acceleration
		this.pos = createVector(x, y);
		this.vel = createVector(0, 0);
		this.acc = createVector(0, 0);

		// slight variation in hue and mass
		this.index = index;
		this.hue = random(0, 85);
		this.mass = random(0.5, 1.5);

		this.radius = this.mass * 10;
		this.brightness = 0;

		// threshold for when the leaf is considered "in water", and drag will be applied
		this.inWater = random(500, height)
	}


	// adds forces to acceleration
	addForce(force) {
		let forceWithMass = p5.Vector.div(force, this.mass);
		this.acc.add(forceWithMass);
	}


	update(index) {

		// if the leaf is "in the water" add drag as a force and make it darker
		if (this.pos.x > 490 && this.pos.y > this.inWater) {
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
	

		// gravity and wind forces
		this.addForce(downwardGravity);
		this.addForce(wind[index]);
		this.index = index

		// updates movement of the leaf
		this.vel.add(this.acc); 
		this.vel.limit(3); 
		this.pos.add(this.vel); 


		// clear out the acceleration to prevent accumulation of force
		this.acc.mult(0);
	}

	show() {

		// draws the falling leaf
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


// creates a single leaf, within a defined cluster area
// uses polar coordinates to draw leaf within circle parameters
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

		// draw the leaf
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

		// shake the leaves after an ellapsed amount of time
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