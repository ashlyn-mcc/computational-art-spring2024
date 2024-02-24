// 04_particles
// Ashlyn McClendon

let particleSystems = [];

function setup() {
	createCanvas(1200, 750);
	colorMode(HSB, 360, 100, 100, 100)
    rectMode(CENTER);
	for (let i = 0; i < 80; i++){
	particleSystems.push(new particleSystem(250 + i,190,map(i,0,40,50,100)));
	particleSystems.push(new particleSystem(400 + i/2,375,map(i,0,40,50,100)));
    if (i%2 == 0){
    particleSystems.push(new particleSystem(125 + i,300,map(i,0,40,50,100)));
    }
	}

    for (let i = 0; i < 10000; i++){
        greeneryArray.push(new Greenery(0,width,180,height));
    }
}

function draw(){

	background(0,0,0,5);
    backgroundScene();

	for (let i = 0; i < particleSystems.length; i++){
		particleSystems[i].update();
	}


    for (let i = 0; i < 200; i++){
        let sat = map(i,0,200,40,80);
        let bright = map(i,0,200,100,70);

        stroke(195,sat,bright,10);
        line(0,i,width,i);
    }

    fill(100,70,50);
    noStroke();
    rect(165,300,100,20,5);
    rect(420,375,65,20,5);
    fill(195,80,55);
    rect(290,183,100,35);
}


function backgroundScene(){

   

    for (let i = 0; i < 550; i++){
        let sat = map(i,0,550,10,20);
        let bright = map(i,0,550,20,35);

        stroke(45,sat,bright,10);
        line(0,i + 200,width,i + 200);
    }

   
    for (let i = 0; i < greeneryArray.length; i++){
        greeneryArray[i].update();
    }

   

}

let greeneryArray = [];

class Greenery{
    constructor(minX,maxX,minY,maxY){
        let x = random(minX,maxX);
        let y = random(minY,maxY);
        this.position = createVector(x,y);

        
        

        this.color = color(random(80,120),random(50,85),random(45,70),map(this.position.y,minY,maxY,5,20))
    }

    update(){
        fill(this.color);
        noStroke();
        ellipse(this.position.x,this.position.y,map(this.position.y,200,height-50,30,10));
    }
}