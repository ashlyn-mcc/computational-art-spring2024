function setup() {

	// Canvas set-up
	createCanvas(1000, 700);
	colorMode(HSB, 360, 100, 100, 100)
	background(0);
	rectMode(CENTER);
	strokeCap(SQUARE);
	frameRate(35);


	// creates wave and sky rectangles
	for (let i = 0; i < 1250; i++) {
		waves.push(new Wave(i));
		waveOffsets.push(i * 100);
		skies.push(new Sky(i));
	}

	// makes grass lines and offsets for noise
	let counter = 0;
	for (let i = 0; i < PI; i = i + 0.015) {
		grasses.push(new Grass(counter, map(i, 0, PI, PI / 2, (3 * PI) / 2)))
		grassOffsets.push(i * 200);
		counter++
	}

	// Makes tree and cloud object
	treeTrunk = new Tree();
	cloud1 = new Cloud(600, 150);
	cloud2 = new Cloud(850, 100);
	cloud3 = new Cloud(300, 50);

	// Add new leaves to the array that holds the clusters
	for (let i = 0; i < 500; i++) {
		leaves.push(new LeafCluster(215, 200, 100, 75));
		leaves.push(new LeafCluster(135, 120, 100, 75));
		leaves.push(new LeafCluster(215, 100, 125, 75));
		leaves.push(new LeafCluster(140, 50, 125, 75));
		leaves.push(new LeafCluster(300, 50, 100, 150));
		leaves.push(new LeafCluster(200, 0, 200, 20));
		leaves.push(new LeafCluster(50, 25, 100, 100));
		leaves.push(new LeafCluster(0, 125, 40, 100));
		leaves.push(new LeafCluster(375, 140, 100, 100));
	}


	// gravity vectors defined
	downwardGravity = createVector(0, 0.03);
	upwardGravity = createVector(0, -0.1);

}

function draw() {

	// draws background color rectangles for sky and waves
	noStroke();
	fill(200, 30, 100);
	rect(width / 2, height / 2, width, height);
	fill(210, 80, 65);
	rect(width / 2, height / 2 + 175, width, height / 2);

	// draws and updates the sky and wave lines -- wave lines involve noise for color
	for (let i = 0; i < waves.length; i++) {
		skies[i].update();
		waves[i].update();
		waveOffsets[i] += 0.05;
	}

	// draws the clouds
	cloud1.update();
	cloud2.update();
	cloud3.update();

	// draws grass
	for (let i = 0; i < grasses.length; i++) {
		grasses[i].update();
	}

	// increase offsets used for noise to alter the grass length
	// makes it look like waves are washing up.
	for (let i = 0; i < grassOffsets.length; i++) {
		grassOffsets[i] += 0.01
	}


	// show the tree trunk
	treeTrunk.show();

	// draws the clusters of leaves on the tree
	for (let i = 0; i < leaves.length; i++) {
		leaves[i].show();
	}

	// Update and draw all the falling leaves 
	for (let i = 0; i < fallingLeaves.length; i++) {

		// apply a force acting as the ground when the leaves get too far down the screen
		if (fallingLeaves[i].pos.y >= 550) {
			fallingLeaves[i].addForce(upwardGravity);
		} else {

			// wind and rotation amounts added
			wind[i].add(map(noise(offsets[i]), 0, 1, -0.2, 0.2), 0);
			rotation[i] = map(noise(offsets[i]), 0, 1, 0, 2 * PI);
		}

		// draw and update the falling leaves with wind and rotation
		fallingLeaves[i].update(i);
		fallingLeaves[i].show();


	}

	// clear the wind from accumulating, increment the offsets
	for (let i = 0; i < fallingLeaves.length; i++) {
		wind[i].mult(0, 0);
		offsets[i] += 0.01;
	}

	
	// if leaves fall is set to true, create new leaves at random positions in the trees
	if (leavesFall) {
		let amount = 1
		for (let i = 0; i < amount; i++) {
			let x = random(0, 330);
			let y = random(0, 220);
			wind.push(createVector(0, 0))
			fallingLeaves.push(new Leaf(x, y, i + 1));
			offsets.push((i + numLeaves) * 400);

		}

		numLeaves += amount;
	}

}


