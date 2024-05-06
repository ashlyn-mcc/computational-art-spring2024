// Game Over state. Displays the score and allows the user to replay.

class State5 {
    constructor() {

        this.buttonPosition = createVector(width / 2, height / 1.35);
        this.buttonWidth = 250;
        this.buttonHeight = 40;

        this.replay = false;

        this.fade = 0;
    }

    draw() {
        lava.hide();

        //background(200,100,100);
        textFont(titleFont);
        textSize(75);
        strokeWeight(1);
        stroke(0);
        fill(20);
        text("Game Over", width / 2 + 3, 203)
        fill(27, 70, 65);
        text("Game Over", width / 2, 200)

        textFont(subFont);
        textSize(30);
        fill(235, 35, 26)
        text(robotName + " survived for " + pastArrows + " arrows.", width / 2, 400)

        this.isButtonClicked();
        this.showButton()

        if (this.replay) {
            this.nextState()
        }
        // fade to black rectangle
        fill(0, 0, 0, this.fade);
        rect(width / 2, height / 2, width, height);

    }

    // Displays the button
    showButton() {
        rect(this.buttonPosition.x, this.buttonPosition.y + 3, this.buttonWidth, this.buttonHeight, 5);
        fill(100, 65);
        textFont(subFont);
        textSize(30);
        strokeWeight(1);
        stroke(0);
        text("Replay", this.buttonPosition.x, this.buttonPosition.y);
        noStroke();
    }

    // Checks if the mouse was over the button when it clicked
    isButtonClicked() {

        let xBound = this.buttonWidth / 2;
        let yBound = this.buttonHeight / 2;

        if (mouseX > this.buttonPosition.x - xBound &&
            mouseX < this.buttonPosition.x + xBound &&
            mouseY > this.buttonPosition.y - yBound &&
            mouseY < this.buttonPosition.y + yBound) {
            fill(81, 28, 89)
            if (mouseIsPressed) {
                this.replay = true;
                click.play()
            }
        } else {
            fill(235, 35, 26);
        }
    }

    // Changes to next state
    nextState() {
        if (this.fade <= 100) {
            this.fade += 1;
        }

        if (this.fade > 100) {
            currentState = state4;
            gameMusic.play()
            this.replay = false
            this.fade = 0;
            pastArrows = 0;
        }
    }
}