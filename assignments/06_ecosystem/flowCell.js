class FlowCell{

    constructor(x,y,angle,i,j){
        this.position = createVector(x,y);
        this.angle = angle;

        this.xIndex = i;
        this.yIndex = j;
    }

    display(){
        fill(0,100,100);

        this.updateAngle();
       // ellipse(this.position.x,this.position.y,10,10);
    }

    updateAngle(){

        this.xIndex += 0.005;
        this.yIndex += 0.005;
        this.angle = map(noise(this.xIndex,this.yIndex),0,1,0,2*PI);
    }
}