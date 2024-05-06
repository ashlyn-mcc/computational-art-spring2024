// Creates the arrow objects the game is based around

let pastArrows = 0;

class Arrow {
    constructor(x, y) {
        this.position = createVector(x, y);
        this.angles = [0, PI / 2, PI, (3 * PI) / 2];

        this.rotation = random(this.angles);

        this.before = true;
        this.inRange = false;
        this.after = false;

        this.speed = 4.5

        this.hit = false;

        this.hue = random(150, 250);
        this.bright = 80;
        this.sat = 0;

        this.active = true;
        this.alpha = 100;
    }

    keyPressed() {
        if (this.inRange && keyIsPressed) {
            if (this.rotation == 0 && keyCode === RIGHT_ARROW) {
                this.hit = true;
            } else if (this.rotation == PI / 2 && keyCode === DOWN_ARROW) {
                this.hit = true;
            } else if (this.rotation == PI && keyCode === LEFT_ARROW) {
                this.hit = true;
            } else if (this.rotation == (3 * PI) / 2 && keyCode === UP_ARROW) {
                this.hit = true;
            }
        }
    }


    show() {
        push();
        translate(this.position.x, this.position.y);
        rotate(this.rotation)
        strokeWeight(5);
        stroke(this.hue, this.sat, this.bright, this.alpha);
        line(-15, 0, 15, 0);
        line(15, 0, 0, -15);
        line(15, 0, 0, 15);
        pop();
    }

    move() {
        this.position.x += this.speed;

        this.update();
    }

    update() {
        this.keyPressed();

        if (this.hit === false && this.after === true && this.active == true) {
            this.hue = 0;
            platformHeight -= 40
            this.active = false;
            this.sat = 75
        } else if (this.after === true && this.hit === true && this.active == true) {
            this.hue = 100;
            this.sat = 75
            pastArrows += 1
            this.active = false;
        }


    }

    range() {
        if (this.position.x < (width / 2 - 20)) {
            this.before = true;
            this.inRange = false;
            this.after = false;
        } else if (this.position.x > (width / 2 + 20)) {
            this.before = false;
            this.inRange = false;
            this.after = true;
        } else {
            this.before = false;
            this.inRange = true;
            this.after = false;
        }
    }
}