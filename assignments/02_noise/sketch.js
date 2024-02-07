// 02_noise Assignment
// CSC-496 Computational Art 

let bloom = [];

function setup() {
	createCanvas(800, 800);
	background(0);
	colorMode(HSB,360,100,100,100);
	angleMode(DEGREES);


	// for (let i = 0; i < 2; i++){
	// 	bloom.push(new Jellyfish(random(100,width-100),random(100,height-100),random(75,100)));
	// }

	for (let i = 1500; i > 0; i--){
		fill(210,i/15,i/60);
		noStroke();
		ellipse(400,200,i)
	}
}

function draw() {

	console.log(frameCount);

	fill(0,0,0,1);

	for (let i = 0; i < bloom.length; i++){
	bloom[i].dome();
	bloom[i].flowyPart();
	}
}

function mouseClicked(){
	bloom.push(new Jellyfish(mouseX,mouseY,random(45,100)))
}

class Jellyfish{
	constructor(x,y,size){
		this.x = x;
		this.y = y;
		this.size = size;
		this.hue = random(0,360);
		this.spacing = this.size/6.67;
		this.minAngle = 0;
		this.maxAngle = 0;
		
		this.offset = [];
		this.xVertices = [];
		this.yVertices = [];

		this.extend = random(2,4)
		for (let i = 0; i < 40; i++){
			this.offset.push(random(0,100000));
		}

		this.amount = random(0,100000);
		this.rotate = random(15,45);
	}

	dome(){

		push();
		translate(this.x,this.y);
		rotate(this.rotate);

		this.hue = map(noise(this.amount),0,1,0,360)
		// dome shape
		strokeWeight(this.size/50);
		stroke(this.hue,75,40);
		fill(this.hue,50,100);
		arc(0,0,this.size,this.size*1.25,180,360);

		// bottom edge dots
		noStroke();
		for (let i = 0; i < this.size/this.spacing; i++){
			ellipse((-this.size/2.2) + this.spacing * i,0,this.spacing,this.spacing);
		}
		for (let i = 0; i < this.size/this.spacing; i++){
			if (i < 3){
				this.minAngle = 0;
				this.maxAngle = 230;
			} else if (i == 3){
				this.minAngle = 310;
				this.maxAngle = 230;
			} else {
				this.minAngle = 310;
				this.maxAngle = 180;
			}
			fill(0,0,100);
			noStroke();
			ellipse((-this.size/2.2) + this.spacing * i,0,this.spacing/2.5,this.spacing/2.5);
			noFill();
			stroke(this.hue,75,40);
			arc((-this.size/2.2) + this.spacing * i,0,this.spacing,this.spacing,this.minAngle,this.maxAngle);
		}

		this.amount += 0.001
		pop();
	}

	flowyPart(){
	
		
		push()
		translate(this.x,this.y);
		rotate(this.rotate);
		for (let i = 0; i < 5; i++){
			this.xVertices[i] = map(noise(this.offset[i]),0,1,-this.size/3,this.size/3)
			this.yVertices[i] = map(noise(this.offset[i+20]),0,1,-this.size,this.size * this.extend)

		}
		
		strokeWeight(0.25);
		stroke(map(frameCount%360,0,360,this.hue-20,this.hue+20),100,100,10);
		noFill();
		
		beginShape();

		for (let i = 0; i < 5; i ++){
			curveVertex(this.xVertices[i],this.yVertices[i])
		}

		endShape();




		for (let i=0; i < this.offset.length; i++){
			this.offset[i] += 0.01
		}

		pop();
	}

	
}