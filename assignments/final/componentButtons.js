class ComponentButtons{
    constructor(){
        this.colors = [color(177,76,47),color(27,70,65),color(235,35,26),color(81,28,89),color(59,40,100)]
    }

    display(){
        for (let i = 0; i < 5; i++){
            fill(this.colors[i]);
            ellipse(425+i*75,75,50,50);
        }
    }
}

class SelectionHead{
    constructor(x,y){
        this.position = createVector(x,y);
    }

    showHead(i,col){
        push();
        translate(this.position.x,this.position.y);
        fill(col);
        strokeWeight(5);
        if (i == 0){
            this.squareHead();
        } else if (i == 1){
            this.circleHead();
        } else if (i == 2){
            this.triHead();
        } else {
            this.arcHead();
        }
        strokeWeight(1);
        stroke(0);
        this.face();
        pop();
    }

    squareHead(){
        rect(0,0,200,200,5);
    }

    triHead(){
        triangle(0,-100,-100,100,100,100)
    }

    circleHead(){
        circle(0,0,200,200);
    }

    arcHead(){
        arc(0,100,200,400,PI,0)
    }

    face(){
        fill(100);
        circle(-40,0,40);
        circle(40,0,40);

        fill(0);
        circle(-32,-2,20);
        circle(32,-2,20);

        fill(100);
        circle(-37,-5,10)
        circle(37,-5,10)

        fill(0);
        rect(0,55,60,5,5);
    }
}