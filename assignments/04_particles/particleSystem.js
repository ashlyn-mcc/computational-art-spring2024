
class particleSystem{
    constructor(x,y,hue){
        this.position = createVector(x,y);

        this.particles = [];
        this.hue = hue;

        this.offsets = [];
    }

    update(){
        if (frameCount % 5 == 0){
        this.particles.push(new Particle(this.position.x,this.position.y,this.hue));
        this.offsets.push(random(0,100000));
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