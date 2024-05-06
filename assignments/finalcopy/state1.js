// The home screen

class State1 {
    constructor() {
        this.titlePosition = createVector(width / 2, height / 3);
        this.buttonPosition = createVector(width / 2, height / 1.5);
        this.buttonWidth = 250;
        this.buttonHeight = 40;
        this.fade = 0;
        this.changeState = false;
        userStartAudio();
        buildMusic.play();

    }

    draw() {


        // title
        textFont(titleFont);
        textSize(50);
        fill(20);
        text("ROBOT LABORATORY", this.titlePosition.x + 3, this.titlePosition.y + 3);
        strokeWeight(1);
        stroke(0);
        fill(27, 70, 65);
        text("ROBOT LABORATORY", this.titlePosition.x, this.titlePosition.y);
        noStroke();


        this.showImages();

        // If mouse is clicked, check if mouse was over the button
        this.isButtonClicked();

        // draws the button
        this.showButton();


        // If its time to go to state 2, change the current state
        if (this.changeState == true) {
            this.nextState();
        }

        // fade to black rectangle
        fill(0, 0, 0, this.fade);
        rect(width / 2, height / 2, width, height);

    }

    // Displays the "Enter the Lab" button
    showButton() {
        rect(this.buttonPosition.x, this.buttonPosition.y + 3, this.buttonWidth, this.buttonHeight, 5);
        fill(100, 65);
        textFont(subFont);
        textSize(30);
        strokeWeight(1);
        stroke(0);
        text("Enter the lab", this.buttonPosition.x, this.buttonPosition.y);
        noStroke();
    }

    showImages() {
        push();
        translate(700, 65);
        rotate(0)
        tint(255, 50);
        image(wrenchPic, 0, 0, 500, 500);
        pop();

        push();
        translate(50, 650);
        tint(255, 50);
        image(gearPic, 0, 0, 500, 500);
        pop();
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
                this.changeState = true;
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
            currentState = state2;
        }
    }

}