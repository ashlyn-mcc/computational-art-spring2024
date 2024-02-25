class Particle{
    constructor(x,y,hue){
        this.position = createVector(x,y);
        this.velocity = createVector(random(-0.5,0.5),0);

        this.maxVel = random(5,10);

        this.hue = random(190,210)

        this.satMax = random(50,80)

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

class starParticle{
    constructor(x,y){
        this.position = createVector(x,y);
        this.velocity = createVector(0,random(-0.5,0.5));
        this.maxVel = random(-10,-15);

        this.sat = random(20,30);
        this.bright = random(85,95);
    }

    update(){

        this.velocity.x = map(this.position.x,width,0,-5,this.maxVel)
        this.position.add(this.velocity);


        noStroke();
        fill(55,this.sat,this.bright);
        this.star(this.position.x,this.position.y,map(this.position.x,width,0,12,5),map(this.position.x,width,0,6,2.5),5)
        
    }

    star(x, y, radius1, radius2, npoints) {
        let angle = TWO_PI / npoints;
        let halfAngle = angle / 2.0;
        beginShape();
        for (let a = 0; a < TWO_PI; a += angle) {
          let sx = x + cos(a) * radius2;
          let sy = y + sin(a) * radius2;
          vertex(sx, sy);
          sx = x + cos(a + halfAngle) * radius1;
          sy = y + sin(a + halfAngle) * radius1;
          vertex(sx, sy);
        }
        endShape(CLOSE);
      }

    outsideBoundsCheck(){
        if (this.position.x < 0){
            return true;
        }
    }
}