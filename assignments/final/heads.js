class Head {

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
            translate(400, 200);
        }
        fill(20);
        ellipse(0, 75, 75, 75);
        fill(this.color);
        strokeWeight(5);
        scale(0.75);
        if (this.index == 0) {
            this.squareHead();
        } else if (this.index == 1) {
            this.circleHead();
        } else if (this.index == 2) {
            this.triHead();
        } else {
            this.arcHead();
        }
        strokeWeight(1);
        stroke(0);
        this.face();
        pop();
    }

    squareHead() {
        rect(0, 0, 200, 200, 5);
    }

    triHead() {
        triangle(0, -100, -100, 100, 100, 100)
    }

    circleHead() {
        circle(0, 0, 200, 200);
    }

    arcHead() {
        arc(0, 100, 200, 400, PI, 0)
    }

    face() {
        fill(100);
        circle(-40, 0, 40);
        circle(40, 0, 40);

        fill(0);
        circle(-32, -2, 20);
        circle(42, -2, 20);

        fill(100);
        circle(-37, -5, 10)
        circle(47, -5, 10)

        fill(0);
        rect(0, 55, 60, 5, 5);
    }

}