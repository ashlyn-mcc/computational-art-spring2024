// This state plays the game.


let timeLasted = 0;

let emitScale = 1;

class State4 {
    constructor() {
        this.platform = new Platform();
        this.arrowEmitter = new ArrowEmitter();

        this.startFrameCount = frameCount;
        console.log(frameCount)
    }

    draw() {
        lava.show();

        background(0)


        tint(100, 75);
        image(room, width / 2, height / 2, width, height);
        lava.position(0, height - 300)
        lava.size(width, 300)

        this.platform.show();

        for (let i = 0; i < parts.length; i++) {
            push();
            translate(365, platformHeight / -2 + 550);
            scale(0.2);
            strokeWeight(5);
            stroke(0);
            parts[i].show();
            pop();
        }

        fill(20, 90);
        rect(width / 2, 0, width, 150);

        this.arrowEmitter.update();

        push();
        noFill();
        strokeWeight(10);
        stroke(0);
        ellipse(width / 2, 35, 65, 65)
        ellipse(width / 2, 35, 75, 75)
        stroke(75);
        ellipse(width / 2, 35, 70, 70)
        pop();

        if (platformHeight <= 300) {
            gameMusic.pause();
            platformHeight = 700;
            this.arrowEmitter.arrows = [];
            currentState = state5;
        }

    }


}
