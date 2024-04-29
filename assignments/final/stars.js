class Star{
    constructor(){
        this.position = createVector(random(width),random(height))
    }

    show(){
        fill(100,random(50,75)); 
        ellipse(this.position.x,this.position.y,random(0.5,3));
    }
}