class SelectionArms {
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
            this.ballArms();
        } else if (i == 1) {
            this.triArms();
        } else if (i == 2) {
            this.blockArms();
        } else {
            this.starArms();
        }
        pop();
    }

    getSpecs() {
        return [this.color, this.index];
    }


    ballArms() {
        push();
        translate(40, -100);
        push();
        translate(0, 40);
        rotate(5 * PI / 6)
        ellipse(-20, -30, 30, 140);
        pop();
        ellipse(65, 160, 20, 100);
        ellipse(0, 0, 40, 40);
        ellipse(65, 115, 25, 25);
        ellipse(65, 210, 30, 30);
        pop();

        push();
        translate(-40, -100);
        push();
        translate(-60, 65);
        rotate(PI / 6)
        ellipse(20, -30, 30, 140);
        pop();
        ellipse(-65, 160, 20, 100);
        ellipse(0, 0, 40, 40);
        ellipse(-65, 115, 25, 25);
        ellipse(-65, 210, 30, 30);
        pop();
    }

    triArms() {
        push();
        translate(40, -100);
        rect(0, 0, 36, 36);
        triangle(30, 90, 0, 250, 45, 125);
        triangle(-17, 18, 18, 18, 45, 125);
        pop();

        push();
        translate(-40, -100);
        rect(0, 0, 36, 36);
        triangle(-30, 90, 0, 250, -45, 125);
        triangle(17, 18, -18, 18, -45, 125);
        pop();
    }

    blockArms() {
        push();
        translate(40, -100);
        rect(20, 100, 10, 200)
        ellipse(0, 0, 60, 30);
        rect(20, 200, 50, 10);
        rect(-5, 210, 10, 30)
        rect(45, 210, 10, 30)
        pop();

        push();
        translate(-40, -100);
        rect(-20, 100, 10, 200)
        ellipse(0, 0, 60, 30);
        rect(-20, 200, 50, 10);
        rect(5, 210, 10, 30)
        rect(-45, 210, 10, 30)
        pop();
    }

    starArms() {
        push();
        translate(40, -100);
        line(15, 0, 55, 200);
        triangle(0, -30, 0, 20, 30, -5);
        this.star(55, 200, 15, 35, 5);
        pop();

        push();
        translate(-40, -100);
        line(-15, 0, -55, 200);
        triangle(0, -30, 0, 20, -30, -5);
        this.star(-55, 200, 15, 35, 5);
        pop();
    }

    star(x, y, radius1, radius2, npoints) {
        let angle = TWO_PI / npoints;
        let halfAngle = angle / 2.0;
        beginShape();
        for (let a = 0; a < TWO_PI; a += angle) {
            let sx = x + cos(a) * radius2;
            let sy = y + sin(a) * radius2;
            vertex(sx, sy);
            sx = x + cos(a + halfAngle) * radius1;
            sy = y + sin(a + halfAngle) * radius1;
            vertex(sx, sy);
        }
        endShape(CLOSE);
    }
}