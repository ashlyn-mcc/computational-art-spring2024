// Emits the arrows from the side of the screen for the game at State 4

class ArrowEmitter {
    constructor() {
        this.position = createVector(0, 35);
        this.arrows = [];
    }

    update() {
        if (frameCount % 45 == 0) {
            this.arrows.push(new Arrow(this.position.x, this.position.y));
        }

        for (let i = 0; i < this.arrows.length; i++) {
            this.arrows[i].show();
            this.arrows[i].move();
            this.arrows[i].range();
        }
    }

}