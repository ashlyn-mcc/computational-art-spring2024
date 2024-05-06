// Detail & power up selection screen

class State3 {
    constructor() {
        // set canvas hue
        this.gridHue = 357

        // create a grid
        this.cellGrid = new gridGenerator(0, 0, 25, 25, this.gridHue);

        this.nextButtonPosition = createVector(700, 650);
        this.nextButtonWidth = 150;
        this.nextButtonHeight = 40;
        this.fade = 0;
        this.changeState = false;

        this.input = createInput("My Bot");
        this.input.position(0, 0);
    }

    draw() {

        // update grid
        background((this.gridHue + 180) % 360, 76, 44);
        this.cellGrid.update();
        //fill(100, 50);
        //rect(width/2,height/2,width,height);



        for (let i = 1; i < 801; i++) {
            let alpha = map(i, 1, 801, 100, 0);
            strokeWeight(1);
            stroke(177, 76, 44, alpha);
            noFill();
            rect(width / 2, height / 2, i, i);
        }

        for (let i = 0; i < parts.length; i++) {
            push();
            translate(100, 100);
            scale(0.75);
            strokeWeight(5);
            stroke(0);
            parts[i].show();
            pop();
        }

        fill(81, 28, 89);
        strokeWeight(2);
        stroke(0);
        textFont(titleFont);
        textSize(75);
        text(this.input.value(), width / 2, 75);

        this.isButtonClicked();
        this.nextStateButton()
        if (this.changeState) {
            this.nextState();
        }
        

        push();
        strokeWeight(5);
        stroke(100);
        line(60,55,60,30)
        line(60,30,45,40)
        line(60,30,75,40)
        pop();
        fill(100);
        text("Give your bot \n a name",60,75);

        fill(0, this.fade);
        rect(width / 2, height / 2, width, height)
    }

    nextStateButton() {
        //fill(235, 35, 26);
        rect(this.nextButtonPosition.x, this.nextButtonPosition.y, this.nextButtonWidth, this.nextButtonHeight, 5);
        //fill(81, 28, 89);
        fill(85);
        stroke(0);
        strokeWeight(1);
        textSize(15);
        textFont(subFont);
        text("Test Your Skills", this.nextButtonPosition.x, this.nextButtonPosition.y);
    }

    // Checks if the mouse was over the button when it clicked
    isButtonClicked() {

        let xBound = this.nextButtonWidth / 2;
        let yBound = this.nextButtonHeight / 2;

        if (mouseX > this.nextButtonPosition.x - xBound &&
            mouseX < this.nextButtonPosition.x + xBound &&
            mouseY > this.nextButtonPosition.y - yBound &&
            mouseY < this.nextButtonPosition.y + yBound) {
            fill(81, 28, 89);
            if (mouseIsPressed) {
                this.changeState = true;
                this.input.hide();
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
        }
    }


}

// Button to go to next State
