// 02_noise Assignment
// CSC-496 Computational Art 

let offset = [0,1000,2000,3000,4000,5000,6000,7000,8000,9000,10000,11000,12000,13000];
let x1,y1,x2,y2,x3,y3,x4,y4,x5,y5,x6,y6;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	colorMode(HSB,360,100,100,100);
}

function draw() {
	
	x1 = map(noise(offset[0]),0,1,-200,width+200);
	y1 = map(noise(offset[1]),0,1,-200,height+200);
	x2 = map(noise(offset[2]),0,1,-200,width+200);
	y2 = map(noise(offset[3]),0,1,-200,height+200);
	x3 = map(noise(offset[4]),0,1,-200,width+200);
	y3 = map(noise(offset[5]),0,1,-200,height+200);
	x4 = map(noise(offset[6]),0,1,-200,width+200);
	y4 = map(noise(offset[7]),0,1,-200,height+200);
	x5 = map(noise(offset[8]),0,1,-200,width+200);
	y5 = map(noise(offset[9]),0,1,-200,height+200);
	
	strokeWeight(1);
	stroke(frameCount%360,100,100,10);
	noFill();
	
	beginShape();
	curveVertex(x1, y1);
	curveVertex(x2, y2);
	curveVertex(x3, y3);
	curveVertex(x4, y4);
	curveVertex(x5, y5);

	endShape(CLOSE);

	for (let i=0; i < offset.length; i++){
		offset[i] += 0.002
	}

}