class SelectionHead {
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
            this.squareHead();
        } else if (i == 1) {
            this.circleHead();
        } else if (i == 2) {
            this.triHead();
        } else {
            this.arcHead();
        }
        strokeWeight(1);
        stroke(0);
        this.face();
        pop();
    }

    getSpecs(){
        return [this.color, this.index];
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
            this.squareHead();
        } else if (i == 1) {
            this.circleHead();
        } else if (i == 2) {
            this.triHead();
        } else {
            this.arcHead();
        }
        strokeWeight(1);
        stroke(0);
        this.face();
        pop();
    }

    getSpecs(){
        return [this.color, this.index];
    }


    squareHead() {
        rect(0, 0, 500, 500, 5);
    }

    triHead() {
        triangle(0, -100, -100, 500, 100, 500)
    }

    circleHead() {
        circle(0, 0, 500, 500);
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