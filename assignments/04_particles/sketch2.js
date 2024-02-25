// 04_particles
// Ashlyn McClendon

let particleSystems = [];
let flowersArray = [];

let palmLeaves;

function preload(){
    palmLeaves = loadImage("palmtree.png");
}


function setup() {
	createCanvas(900, 750);
	colorMode(HSB, 360, 100, 100, 100)
    rectMode(CENTER);
    imageMode(CENTER);
	for (let i = 0; i < 80; i++){
	particleSystems.push(new particleSystem(250 + i,190,map(i,0,40,50,100)));
	particleSystems.push(new particleSystem(400 + i/2,375,map(i,0,40,50,100)));
    particleSystems.push(new particleSystem(125 + i,300,map(i,0,40,50,100)));
	}

    for (let i = 0; i < 10000; i++){
        greeneryArray.push(new Greenery(0,width,180,height-50));
    }

    for (let i = 0; i < 200; i++){
            flowersArray.push(new tropicalFlowers(random(475,width),random(200,height-100)))

            if (i % 7 == 0){
            flowersArray.push(new tropicalFlowers(random(0,100),random(200,height-75)))
            flowersArray.push(new tropicalFlowers(random(0,225),random(200,300)))
            flowersArray.push(new tropicalFlowers(random(350,475),random(200,375)))
            }

    }

    A = new palmTree(650,550,500);
    B = new starParticleSystem(width,50);
}

function draw(){

	background(0,0,0,5);
    backgroundScene();
    

	for (let i = 0; i < particleSystems.length; i++){
		particleSystems[i].update();
	}

    fill(100,70,60);
    noStroke();
    rect(165,300,100,20,5);
    rect(420,375,65,20,5);
    fill(195,80,25);
    rect(290,180,100,30);

    for (let i = 0; i < flowersArray.length; i++){
        flowersArray[i].drawFlower();
    }
    for (let i = 0; i < 200; i++){
        let sat = map(i,0,200,40,80);
        let bright = map(i,0,200,100,10);

        stroke(195,sat,bright,50);
        line(0,i,width,i);
    }

 

  
    A.drawTree();
    B.update();
}

class palmTree{
    constructor(x,y,size){
        this.position = createVector(x,y);
        this.height = size;
    }

    drawTree(){
        fill(30,60,35);
        noStroke();
        rect(this.position.x,this.position.y,20,this.height);
        image(palmLeaves,this.position.x,this.position.y-(this.height/2.5),300,300);
    }
}


class tropicalFlowers{
    constructor(x,y){
        this.position = createVector(x,y)
        this.scale = map(this.position.y,200,height-75,0.5,1.5)
        this.hue1 = random(0,200);
        this.hue2 = random(320,360);
        this.hues = [this.hue1,this.hue2];
        this.hue = random(this.hues);
    }
    
    drawFlower(){
        fill(this.hue,100,map(this.position.y,200,height-100,100,80),20);
        stroke(this.hue,100,map(this.position.y,200,height-100,100,80),30)
        push();
        translate(this.position.x,this.position.y)
        scale(this.scale);
        circle(0,0,5)

        for(let i = 0; i < 5; i++){
            let angle = map(i,0,5,0,2 * PI);
            let x = sin(angle) * 8
            let y = cos(angle) * 8
            circle(x,y,10)

        }

        pop();
    }
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

    fill(195,80,60,30);
    beginShape();
    curveVertex(0,height);
    curveVertex(0,height-50);
    curveVertex(400,height-100);
    curveVertex(800,height-50)
    curveVertex(width,height-75);
    curveVertex(width + 10, height + 10);
    //curveVertex(750,height + 20);
    endShape(CLOSE);
   

}

let greeneryArray = [];

class Greenery{
    constructor(minX,maxX,minY,maxY){
        let x = random(minX,maxX);
        let y = random(minY,maxY);
        this.position = createVector(x,y);

        this.color = color(random(80,120),random(50,85),map(this.position.y,200,height-50,70,35),map(this.position.y,minY,maxY,10,20))
    }

    update(){
        fill(this.color);
        noStroke();
        ellipse(this.position.x,this.position.y,map(this.position.y,200,height-50,30,10));
    }
}