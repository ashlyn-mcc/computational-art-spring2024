class Body {

    constructor(x, y,col,i) {
        this.position = createVector(x, y);
        this.index = i;
        this.color = col;
    }

    show() {
        push();
        translate(this.position.x, this.position.y);
        scale(0.75)    
        fill(20);
        ellipse(120,-110,75,75);
        ellipse(-120,-110,75,75);
        fill(this.color);  
        strokeWeight(5);
        if (this.index == 0) {
            this.pipeBody();
        } else if (this.index == 1) {
            this.domeBody();
        } else if (this.index == 2) {
            this.trapBody();
        } else {
            this.boxBody();
        }
        pop();
    }

    pipeBody() {
        rect(0, 0, 200, 250, 5);
        rect(0,-125,250,40,5);
        rect(0,125,250,40,5);
    }

    domeBody() {
        arc(0, -50, 250, 200, PI, 0)
        rect(0,50,250,200,5);
    }

    trapBody() {
        quad(-100,-150,100,-150,75,150,-75,150);
    }

    boxBody() {
        rect(0,0,250,300,15);
    }

}