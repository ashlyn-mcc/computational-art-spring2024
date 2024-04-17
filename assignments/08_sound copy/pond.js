// creates line of grass
class Pond {
	constructor(index, angle) {

		// generates shade of green
		this.hue = random(125, 200);
		this.sat = random(30, 45);
		this.bright = random(55, 65);


		// position of line within circular area
		this.angle = angle;

		this.centerX = 0;
		this.centerY = 600;

		this.x = this.centerX + 575 * cos(this.angle);
		this.y = this.centerY + 200 * sin(this.angle);

		this.index = index;
		this.offset = 0;

	}

	update() {
		// draw line and alter it's edge slightly with noise
		this.offset = map(noise(pondOffsets[this.index]), 0, 1, -15, 15)
		strokeWeight(5);
		stroke(this.hue, this.sat, this.bright);
		line(this.x+1200+ this.offset, this.y+85, -this.x+1200, this.y+85)
	}
}