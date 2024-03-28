class FishHook {
    constructor() {

        this.initialX = random(400, width - 400);
        this.position = createVector(this.initialX, 0);
        this.velocity = createVector(0, 1);
        this.maxLength = random(200, 550);
        this.reelIn = false;
        this.stop = false;
    }

    castLine() {
        this.position.add(this.velocity);
    }

    reelLine() {
        this.position.sub(this.velocity);
    }

    show() {
        fill(0);
        noStroke();
        ellipse(this.position.x, this.position.y, 10, 10);
        stroke(0)
        strokeWeight(3);
        line(this.initialX, 0, this.position.x, this.position.y);
    }

    update() {


        if (this.stop == false) {
            if (this.position.y <= 2 && this.reelIn) {
                this.stop = true;
            }

            if ((this.position.y < this.maxLength) && this.reelIn == false) {
                this.castLine();
            } else if (this.reelIn == true) {
                this.reelLine()
            }

            this.show();
        }

    }

}