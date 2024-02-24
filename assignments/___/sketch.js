let xVals1 = [230,295,360];
let xVals2 = [425,490,555];
let carTypes = [1,2,3,4,5]
let stopCars = false;

function setup() {
	createCanvas(800, 700);
	colorMode(HSB, 360, 100, 100, 100)
	background(0);

	A = new ParticleSystem("up",xVals1);
	B = new ParticleSystem("down",xVals2);


}

function draw(){

	if (frameCount%100 == 0){
		stopCars = !stopCars;
	}
	backgroundScene();
	A.update();
	B.update();

	console.log(stopCars)
}

function backgroundScene(){
	background(100,50,55);
	
	noStroke();
	fill(70);
	rect(0,250,width,200);
	fill(40);
	rect(200,0,400,height);
	

	for (let i = 0; i < 18;i++){
		for (let j = 0; j < 5; j++){
		fill(50,80,80);
		rect(265 + (j*65),i*40,5,15);
		}
	}

	fill(95);
	rect(395,0,5,height);
	fill(40);
	rect(200,230,400,235);


	for (let i = 0; i < 10; i++){
		fill(95);
		rect(213 + (i * 40), 250,15,200);
	}

	

	
}