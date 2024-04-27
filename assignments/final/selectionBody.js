class SelectionBody {
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
            this.pipeBody();
        } else if (i == 1) {
            this.domeBody();
        } else if (i == 2) {
            this.trapBody();
        } else {
            this.boxBody();
        }
        pop();
    }

    getSpecs() {
        return [this.color, this.index];
    }


    pipeBody() {
        rect(0, 0, 200, 250, 5);
        rect(0, -125, 250, 40, 5);
        rect(0, 125, 250, 40, 5);
    }

    domeBody() {
        arc(0, -50, 250, 200, PI, 0)
        rect(0, 50, 250, 200, 5);
    }

    trapBody() {
        quad(-100, -150, 100, -150, 75, 150, -75, 150);
    }

    boxBody() {
        rect(0, 0, 250, 300, 15);
    }
}