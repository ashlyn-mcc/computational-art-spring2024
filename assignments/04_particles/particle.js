class Particle{
    constructor(x,y,hue){
        this.position = createVector(x,y);
        this.velocity = createVector(random(-0.5,0.5),0);

        this.maxVel = random(5,10);

        this.hue = random(190,210)

        this.satMax = random(30,60)

        this.bound = false;

        this.end = random(45,100);
    }

    update(){

        this.velocity.y = map(this.position.y,height,0,this.maxVel,0.5)
        this.position.add(this.velocity);


        noStroke();
        fill(this.hue,map(this.position.y,200,height,0,this.satMax),100,map(this.position.y,0,height,0,20));
        ellipse(this.position.x, this.position.y, map(this.position.y,700,0,15,25));

    }

    outsideBoundsCheck(){
        if (this.position.y > height-this.end){
            return true;
        }
    }

  
}