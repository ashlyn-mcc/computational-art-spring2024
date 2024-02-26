class Particle{
    constructor(x,y,){
        this.position = createVector(x,y);
        this.velocity = createVector(random(-0.5,0.5),0);

        this.maxVel = random(5,10);

        this.hue = random(190,210)

        this.satMax = random(50,80)

        this.evap = false;
        this.destroy = false;

        this.end = 50;
    }

    update(){

        this.velocity.y = map(this.position.y,height,0,this.maxVel,0.5)
        this.position.add(this.velocity);


        if (this.evap){
            fill(100,25);
            ellipse(this.position.x, this.position.y,10);
            this.destroy = true;
        } else {
        noStroke();
        fill(this.hue,map(this.position.y,200,height,0,this.satMax),100,map(this.position.y,0,height,0,20));
        ellipse(this.position.x, this.position.y, map(this.position.y,700,0,15,25));
        }

        this.hitWater();
    }

    outsideBoundsCheck(){
        if (this.destroy){
            return true;
        }
    }

    hitWater(){
        if (this.position.y > height-this.end){
            this.evap = true;
        }
    }

  
}

class starParticle{
    constructor(x,y){
        this.position = createVector(x,y);
        this.velocity = createVector(0,random(-1,1));
        this.maxVel = random(-10,-15);

        this.sat = random(20,30);
        this.bright = random(85,95);
    }

    update(){

        this.velocity.x = map(this.position.x,width,0,-5,this.maxVel)
        this.position.add(this.velocity);


        noStroke();
        fill(55,this.sat,this.bright,50);
        this.star(this.position.x,this.position.y,map(this.position.x,width,0,12,6),map(this.position.x,width,0,6,3),5)
        
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

class lizardParticle{
    constructor(x,y){
        this.position = createVector(x,y);

        this.velocity = createVector(0,0);

        this.hue = random(0,360);
        this.sat = 75;
        this.bright = 80;
    }

    update(){
        this.velocity.y = map(this.position.y,height,200,-4,-2)
        this.position.add(this.velocity);

        push();
        translate(this.position.x,this.position.y);
        scale(0.4);
        noStroke();
        fill(this.hue,this.sat,this.bright);
        noStroke();
        ellipse(0,0,17,50);
        ellipse(0,-30,15,20)
        
        push();
        translate(0,-34);
        rotate(PI/4);
        rect(0,0,11,11,2)
        pop();
        
        stroke(this.hue,this.sat,this.bright);
        strokeWeight(5);

        if (frameCount % 2 == 0){
        line(-15,-15,0,-10)
        line(-15,5,0,10)
        line(15,-5,0,-10)
        line(15,15,0,10)
        } else {
            line(-15,-10,0,-10)
            line(-15,10,0,10)
            line(15,-10,0,-10)
            line(15,10,0,10)
        }
    
        noFill();
        
        arc(-25,37,60,60,(7 * PI)/4,PI/6);
        pop();

    }

    outsideBoundsCheck(){
        if (this.position.y < 350){
            return true;
        }
    }
}