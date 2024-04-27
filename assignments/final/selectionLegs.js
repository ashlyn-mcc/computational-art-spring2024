class SelectionLegs {
    constructor(x, y) {
        this.position = createVector(x, y);
    }

    show(i, col) {
        push();
        translate(this.position.x, this.position.y);
        this.color = col;
        this.index = i;
        fill(col);
        strokeWeight(5);
        if (i == 0) {
            this.blockLegs();
        } else if (i == 1) {
            this.trapLegs();
        } else if (i == 2) {
            this.bubbleLegs();
        } else {
            this.ellipseLegs();
        }
        pop();
    }

    getSpecs() {
        return [this.color, this.index];
    }


    blockLegs() {
        push();
        translate(50, 0);
        rect(0, 175, 50, 20, 5);
        rect(0, 100, 25, 125, 5);
        rect(0, 0, 50, 150, 5);
        pop();

        push();
        translate(-50, 0);
        rect(0, 175, 50, 20, 5);
        rect(0, 100, 25, 125, 5);
        rect(0, 0, 50, 150, 5);
        pop();
    }

    trapLegs() {
        push();
        translate(50, 0);
        ellipse(0, 175, 60, 20);
        triangle(-25, -75, 25, -75, 0, 75);
        triangle(-25, 175, 25, 175, 0, 75);
        ellipse(0, 70, 40, 40);
        pop();

        push();
        translate(-50, 0);
        ellipse(0, 175, 60, 20);
        triangle(-25, -75, 25, -75, 0, 75);
        triangle(-25, 175, 25, 175, 0, 75);
        ellipse(0, 70, 40, 40);
        pop();
    }

    bubbleLegs() {
        push();
        translate(50, 0);
        rect(0, 75, 15, 215)
        circle(0, -50, 40);
        circle(0, 40, 40);
        circle(0, 125, 40);
        ellipse(0, 180, 50, 30);
        pop();

        push();
        translate(-50, 0);
        rect(0, 75, 15, 215)
        circle(0, -50, 40);
        circle(0, 40, 40);
        circle(0, 125, 40);
        ellipse(0, 180, 50, 30);
        pop();
    }

    ellipseLegs() {
        push();
        translate(50, 0);
        ellipse(0, -25, 40, 100);
        ellipse(0, 110, 25, 125);
        ellipse(0, 40, 40, 40);
        ellipse(0, 180, 30, 30);
        pop();

        push();
        translate(-50, 0);
        ellipse(0, -25, 40, 100);
        ellipse(0, 110, 25, 125);
        ellipse(0, 40, 40, 40);
        ellipse(0, 180, 30, 30);
        pop();
    }
}