class FishHook {
    constructor() {

        this.initialX = random(400, width - 400);
        this.position = createVector(this.initialX, 0);
        this.velocity = createVector(0, 1);
        this.maxLength = random(500, 700);
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
        noStroke();
        noFill();
        stroke(50)
        strokeWeight(3);
        arc(this.position.x-5, this.position.y, 10, 10,0,PI);
        stroke(0)
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