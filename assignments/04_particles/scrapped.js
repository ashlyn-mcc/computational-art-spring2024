let gravity = .013;
let generators = [];
let numGenerators = 10;

function setup(){
    createCanvas(700,700);
    colorMode(HSB,360,100,100,100);

    for (let i = 0; i < numGenerators; i++){
        generators.push(new particleSystem(map(i,0,numGenerators,0,width),height - (i * random(5,30))))
    }
   // system1 = new particleSystem(width/2,height);
}

function draw(){
    background(0,0,0,5)

    for (let i = 0; i < generators.length; i++){
        generators[i].update();
    }
    //system1.update();
}

class particleSystem{
    constructor(x,y){
        this.position = createVector(x,y);
        this.velocity = createVector(0,-3);
        this.hue = random(0,360);
        this.numParticles = 20;

        this.explosionSize = 1000;

        this.particles = [];
        this.makeParticles = true;

        this.alpha = 100;
    }

    update(){
        this.velocity.add(0,gravity);
        fill(this.hue,100,100,this.alpha);
        this.position.add(this.velocity);
        ellipse(this.position.x,this.position.y,10,10);

        if (this.velocity.y > 0 && this.makeParticles){
            for (let i = 0; i < this.numParticles; i++){

                let angle = map(i,0,this.numParticles,0,2 * PI)
                let x = this.position.x + this.explosionSize * cos(angle);
                let y = this.position.y + this.explosionSize * sin(angle);

                this.particles.push(new Particle(this.position.x,this.position.y,x,y))

                this.makeParticles = false;
                this.alpha = 0;
            }
        }

        for (let i = 0; i < this.particles.length; i++){
            this.particles[i].update();
        }
    }

}

class Particle{
    constructor(x,y,targetX,targetY){
        this.position = createVector(x,y);
        this.targetPosition = createVector(targetX,targetY);
        console.log(this.targetPosition.x,this.targetPosition.y)

        this.stop = false;
    }

    update(){

    //     if (dist(this.position.x,this.position.y,this.targetPosition.x,this.targetPosition.y) == 0){
    //         this.stop = true;
    //    // }

       // console.log(dist(this.position.x,this.position.y,this.targetPosition.x,this.targetPosition.y))
       // if (this.stop == false){
        let velocity = p5.Vector.sub(this.targetPosition,this.position);
        velocity.normalize();
        velocity.add(0,0.5);
        //console.log(this.targetPosition.x,this.targetPosition.y)
        this.position.add(velocity);
        //}
        fill(40,40,100);
        noStroke();
        ellipse(this.position.x,this.position.y,2.5);
    }
}