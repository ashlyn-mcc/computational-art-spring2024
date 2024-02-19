// creates line of grass
class Grass{
	constructor(index,angle){
		
		// generates shade of green
		this.hue = random(125,175);
		this.sat = random(60,85);
		this.bright = random(70,85);
		
		
		// position of line within circular area
		this.angle = angle;
		
		this.centerX = 0;
		this.centerY = 600;
		
		this.x = this.centerX + 500 * cos(this.angle);
		this.y = this.centerY + 200 * sin(this.angle);
		
		this.index = index;
		this.offset = 0;
		
	}
	
	update(){
		// draw line and alter it's edge slightly with noise
		this.offset = map(noise(grassOffsets[this.index]),0,1,-15,15)
		strokeWeight(3);
		stroke(this.hue,this.sat,this.bright);
		line(this.x,this.y,-this.x+this.offset,this.y)
	}
}

// draws the tree trunk
class Tree{
	constructor(){
		this.colors = [];
		
		for (let i = 0; i < 30; i++){
		this.hue = random(20,40);
		this.sat = random(50,75);
		this.bright = random(30,50);
		this.colors[i] = color(this.hue,this.sat,this.bright);
		}
	}
	
	show(){
		push()
		translate(40,0);
		noFill()
		strokeWeight(2);
		
		for (let i = 0; i < 10; i++){
			stroke(this.colors[i]);
			arc(90-(i*2),200,75,150,(2 * PI)/2,(3 * PI)/2)
			arc(-22+(i*2),200,75,200,(3*PI)/2,PI/6)
		}
		
		for (let i = 0; i < 20; i++){
		stroke(this.colors[i]);
		line(15+(i * 2),200,15+(i * 2),545)
		}
		
		for (let i = 0; i < 15; i++){
		stroke(this.colors[i]);
		arc(155-(i*2),415,200,400,(2 * PI)/3,(3 * PI)/2)
		arc(-100+(i*2),400,200,500,(3*PI)/2,PI/3)
		}
		
		pop();
	}
}