class Dot{
	constructor(x,y,size,index){
        this.position = createVector(x,y);
        this.velocity = createVector(random(-2,2),random(-2,2));
		this.size = size;
		this.index = index
		this.hue = map(index,0,8,0,360);
		this.initialSize = size;
	}
    update(){
        this.checkBounds();

        if (note == this.index){
            strokeWeight(1);
			fill(this.hue,90,90,10)
			this.size += random(-2,2);
		} else {
            noFill();
            strokeWeight(3)
			stroke(0,1)
			this.size = this.initialSize;
		}

        this.position.add(this.velocity);
        console.log("position",this.position.x,this.position.y);
        console.log("velocity",this.velocity.x,this.velocity.y)
    }
    
	show(){
		ellipse(this.position.x,this.position.y,this.size);
	}

    checkBounds(){
        if (this.position.x < 0 || this.position.x > width){
            this.velocity.x *= -1;
            this.hitEdge();
        }

        if (this.position.y < 0 || this.position.y > height){
            this.velocity.y *= -1;
            this.hitEdge();
        }
    }

    hitEdge(){
       drumSample.play();
    }
}