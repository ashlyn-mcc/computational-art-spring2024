// Platform object in the game in state 5

let platformHeight = 700;

class Platform {
    constructor() {
        this.position = createVector(width / 2, height);

    }

    show() {
        push();
        translate(this.position.x, this.position.y);
        fill(30);
        rect(0, 0, 50, platformHeight);
        fill(20);
        rect(0, (-platformHeight / 2), 200, 20);
        pop();

    }

}