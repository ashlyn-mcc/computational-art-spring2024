// 02_noise Assignment
// CSC-496 Computational Art 

let offset = [0,1000,2000,3000,4000,5000,6000,7000];
let x1,y1,x2,y2,x3,y3,x4,y4;

function setup() {
	createCanvas(600, 600);
	background(0);
	colorMode(HSB,360,100,100,100);
}

function draw() {
	
	
	x1 = map(noise(offset[0]),0,1,0,width);
	y1 = map(noise(offset[1]),0,1,0,height);
	x2 = map(noise(offset[2]),0,1,0,width);
	y2 = map(noise(offset[3]),0,1,0,height);
	x3 = map(noise(offset[4]),0,1,0,width);
	y3 = map(noise(offset[5]),0,1,0,height);
	x4 = map(noise(offset[6]),0,1,0,width);
	y4 = map(noise(offset[7]),0,1,0,height);
	
	stroke(frameCount%360,100,100,10);
	noFill();
	
	beginShape();
	vertex(x1, y1);
	vertex(x2, y2);
	vertex(x3, y3);
	vertex(x4, y4);
	endShape(CLOSE);

	for (let i=0; i < offset.length; i++){
		offset[i] += 0.005
	}

}