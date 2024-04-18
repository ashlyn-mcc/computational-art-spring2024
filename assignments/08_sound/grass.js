class Grass{
    constructor(x,y,length){
        this.position = createVector(x,y);
        this.angle = random(70,110);
        this.hue = random(75,150);
        this.brightness = random(50,80);
        this.bOffset = map(y,350,height,40,0);
        this.saturation = random(50,70);

        this.weight = map(y,350,height,3,7);
        this.endPoint = length/2
    }

    show(){
        push();
        translate(this.position.x,this.position.y);
        strokeWeight(this.weight);
        stroke(this.hue, this.saturation, this.brightness - this.bOffset);
        rotate(this.angle);
        line(this.endPoint,0,-this.endPoint,0);
        pop();
    }
}