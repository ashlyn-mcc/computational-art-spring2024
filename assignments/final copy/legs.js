// The legs object used in states 3 and 4 once the selection process is done.


class Legs {

    constructor(x, y, col, i) {
        this.position = createVector(x, y);
        this.index = i;
        this.color = col;
    }

    show() {
        push();
        if (currentState != state3) {
            translate(this.position.x, this.position.y);
        } else {
            translate(400, 550);
        }
        fill(20);
        ellipse(-45, -65, 40, 75)
        ellipse(45, -65, 40, 75)
        fill(this.color);
        strokeWeight(5);
        scale(.85)
        if (this.index == 0) {
            this.blockLegs();
        } else if (this.index == 1) {
            this.trapLegs();
        } else if (this.index == 2) {
            this.bubbleLegs();
        } else {
            this.ellipseLegs();
        }
        strokeWeight(1);
        stroke(0);
        pop();
    }

    blockLegs() {
        push();
        translate(50, 40);
        rect(0, 175, 50, 20, 5);
        rect(0, 100, 25, 125, 5);
        rect(0, 0, 50, 150, 5);
        pop();

        push();
        translate(-50, 40);
        rect(0, 175, 50, 20, 5);
        rect(0, 100, 25, 125, 5);
        rect(0, 0, 50, 150, 5);
        pop();
    }

    trapLegs() {
        push();
        translate(50, 40);
        ellipse(0, 175, 60, 20);
        triangle(-25, -75, 25, -75, 0, 75);
        triangle(-25, 175, 25, 175, 0, 75);
        ellipse(0, 70, 40, 40);
        pop();

        push();
        translate(-50, 40);
        ellipse(0, 175, 60, 20);
        triangle(-25, -75, 25, -75, 0, 75);
        triangle(-25, 175, 25, 175, 0, 75);
        ellipse(0, 70, 40, 40);
        pop();
    }

    bubbleLegs() {
        push();
        translate(50, 30);
        rect(0, 75, 15, 215)
        circle(0, -50, 40);
        circle(0, 40, 40);
        circle(0, 125, 40);
        ellipse(0, 180, 50, 30);
        pop();

        push();
        translate(-50, 30);
        rect(0, 75, 15, 215)
        circle(0, -50, 40);
        circle(0, 40, 40);
        circle(0, 125, 40);
        ellipse(0, 180, 50, 30);
        pop();
    }

    ellipseLegs() {
        push();
        translate(50, 30);
        ellipse(0, -25, 40, 100);
        ellipse(0, 110, 25, 125);
        ellipse(0, 40, 40, 40);
        ellipse(0, 180, 45, 30);
        pop();

        push();
        translate(-50, 30);
        ellipse(0, -25, 40, 100);
        ellipse(0, 110, 25, 125);
        ellipse(0, 40, 40, 40);
        ellipse(0, 180, 45, 30);
        pop();
    }

}