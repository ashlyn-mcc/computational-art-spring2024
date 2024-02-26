
class particleSystem{
    constructor(x,y,hue){
        this.position = createVector(x,y);

        this.particles = [];
        this.hue = hue;

    }

    update(){
        if (frameCount % 5 == 0){
        this.particles.push(new Particle(this.position.x,this.position.y,this.hue));
        }


        for (let i = 0; i < this.particles.length; i++){
        
            this.particles[i].update();
            let destroy = this.particles[i].outsideBoundsCheck(i);
            if (destroy){
                this.particles.splice(i,1);
            }
        }

         console.log(this.particles.length);
    }
}

class starParticleSystem{
    constructor(x,y){
        this.position = createVector(x,y)
        this.particles = []
        
    }

    update(){
        if (frameCount % 20 == 0){
            this.particles.push(new starParticle(this.position.x,this.position.y));
        }

        for (let i = 0; i < this.particles.length; i++){
            this.particles[i].update();
            let destroy = this.particles[i].outsideBoundsCheck(i);
            if (destroy){
                this.particles.splice(i,1);
            }
        }
    }
}

class lizardParticleSystem{
    constructor(x,y){
        this.position = createVector(x,y);
        this.particles = [];
    }

    update(){
        if (frameCount % 175 == 0){
            this.particles.push(new lizardParticle(this.position.x,this.position.y));
        }

        for (let i = 0; i < this.particles.length; i++){
            this.particles[i].update();
            let destroy = this.particles[i].outsideBoundsCheck(i);
            if (destroy){
                this.particles.splice(i,1);
            }
        }
    }
}