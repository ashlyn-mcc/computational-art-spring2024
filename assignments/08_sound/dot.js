class Dot{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.hue = random(360)
        this.brightness = 70;
        this.brightOffset = 0;
        this.saturation = 70;
        this.satOffset = 100;
    }

    show(){
        if (changeColor){
            this.hue = random(0,360);
            changeColor = false;
        }

        this.brightness = map(noise(this.brightOffset),0,1,60,100);
        this.saturation = map(noise(this.satOffset),0,1,20,100);
        this.brightOffset += 0.01;
        this.satOffset += 0.01;


        fill(this.hue,this.saturation,this.brightness)
        ellipse(this.x,this.y,50,50);

        for (let i = 1; i < 51; i++){
            noFill();
            stroke(map(i,1,50,100,20),map(i,1,50,0,50));
            strokeWeight(1);
            ellipse(this.x,this.y,i)
        }
    }
}