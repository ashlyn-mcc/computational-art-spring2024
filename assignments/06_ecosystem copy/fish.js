class Fish {

  constructor(type) {

    this.position = createVector(random(width), random(height));
    this.velocity = createVector(random(-5, 5), 0);
    this.acceleration = createVector(0, 0);

    this.range = 50;

    this.speedCap = 5
    this.forceCap = 0.1

    this.noiseOffset = random(15000);

    this.type = type

    if (this.type == 1) {
      this.hue = 0;
    } else if (this.type == 2) {
      this.hue = 100;
    } else {
      this.hue = 200;
    }

  }

  show() {
    this.wrap();

    fill(this.hue, 100, 100);

    push();
    translate(this.position.x, this.position.y);
    circle(0, 0, 15);
    pop();

  }

  swim() {
    this.school();

    this.acceleration.limit(this.forceCap);
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.speedCap,1)
   // this.velocity.limit(this.speedCap);
    this.position.add(this.velocity);
    this.acceleration.set(0, 0)
  }

  school() {
    let fishInRange = this.getNeighbors();

    let align = this.alignment(fishInRange);
    let alignMutliplier = map(noise(frameCount * 0.05), 0, 1, 0, 3);
    align.mult(alignMutliplier);
    this.acceleration.add(align);
    let cohere = this.cohesion(fishInRange);
    let cohereMutliplier = map(noise((frameCount + this.noiseOffset) * 0.05), 0, 1, 0, 1.5);
    cohere.mult(cohereMutliplier);
    this.velocity.add(cohere);
    let separate = this.separation(fishInRange);
    let separateMutliplier = map(noise((frameCount + (this.noiseOffset * 2)) * 0.05), 0, 1, 0, 3);
    separate.mult(separateMutliplier);
    this.acceleration.add(separate);

  }

  getNeighbors() {

    let neighboringFish = []
    for (let fishy of fish) {
      if (dist(fishy.position.x, fishy.position.y, this.position.x, this.position.y) < this.range) {
        if (this.type == fishy.type) {
          if (fishy !== this) {
            neighboringFish.push(fishy);
          }
        }
      }
    }

    if (neighboringFish.length == 0) {
      neighboringFish.push(createVector(0, 0));
    }

    return neighboringFish;
  }

  alignment(neighboringFish) {

    let neighborVelocities = createVector(0, 0);

    for (let fishy of neighboringFish) {
      neighborVelocities.add(fishy.velocity);
    }

    neighborVelocities.div(neighboringFish.length);
    neighborVelocities.sub(this.velocity);
    neighborVelocities.setMag(this.forceCap);

    return neighborVelocities;
  }

  cohesion(neighboringFish) {
    let neighborPositions = createVector(0, 0);

    for (let fishy of neighboringFish) {
      neighborPositions.add(fishy.position);
    }

    neighborPositions.div(neighboringFish.length);
    neighborPositions.sub(this.position);
    neighborPositions.limit(this.forceCap);

    return neighborPositions;
  }

  separation(neighboringFish) {
    let separationForce = createVector();
    for (let fishy of neighboringFish) {
      let diff = p5.Vector.sub(this.position, fishy.position);
      let d = diff.mag();
      if (d > 0 && d < this.range) {
        diff.div(d * d); // Weighted by distance squared
        separationForce.add(diff);
      }
    }
    separationForce.limit(this.forceCap);
    return separationForce;
  }

  wrap() {
    this.position.x = (this.position.x + width) % width;
    this.position.y = (this.position.y + height) % height;
  }
}