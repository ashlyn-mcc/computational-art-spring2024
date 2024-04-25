// Component Selection Screen

class State2 {
    constructor() {
        this.leftButtonPos = createVector(400, 400);
        this.rightButtonPos = createVector(750, 400);
        this.buttonHeight = 40;
        this.buttonWidth = 60;

        this.hoverL = false;
        this.hoverR = false;
        this.head = 0;
        this.buttonUnderMouse = 0;

        this.justPressed = false;
    }

    draw() {
        background(0);

        fill(90);
        rect(175, height / 2, 350, height);
        fill(207, 21, 62);
        rect(576, height / 2, 450, height);

        this.displayButtons();

        this.buttonUnderMouse = this.overButtons();

        if (this.buttonUnderMouse == 1) {
            this.hoverL = true;
        } else if (this.buttonUnderMouse == 2) {
            this.hoverR = true
        } else {
            this.hoverL = false;
            this.hoverR = false;
        }

        if (this.buttonUnderMouse == 1 && mouseIsPressed){
            this.head -= 1;
            this.justPressed = true;
        } else if (this.buttonUnderMouse == 2 && mouseIsPressed){
            this.head += 1;
            this.justPressed = true;
        }

        //console.log(this.head)
        
    }

    overButtons() {

        let xBound = this.buttonWidth / 2
        let yBound = this.buttonHeight / 2

        if (mouseX > this.leftButtonPos.x - xBound &&
            mouseX < this.leftButtonPos.x + xBound &&
            mouseY > this.leftButtonPos.y - yBound &&
            mouseY < this.leftButtonPos.y + yBound) {
            return 1;
        } else if (mouseX > this.rightButtonPos.x - xBound &&
            mouseX < this.rightButtonPos.x + xBound &&
            mouseY > this.rightButtonPos.y - yBound &&
            mouseY < this.rightButtonPos.y + yBound) {
            return 2;
        } else {
            return 0;
        }
    }


    displayButtons() {

        if (this.hoverL) {
            fill(75);
        } else {
            fill(27, 70, 65);
        }
        rect(this.leftButtonPos.x, this.leftButtonPos.y, this.buttonHeight, this.buttonWidth, 3);

        if (this.hoverR) {
            fill(75)
        } else {
            fill(27, 70, 65);

        }
        rect(this.rightButtonPos.x, this.rightButtonPos.y, this.buttonHeight, this.buttonWidth, 3);

        fill(235, 35, 26);
        triangle(this.leftButtonPos.x - 10, this.leftButtonPos.y, this.leftButtonPos.x + 10, this.leftButtonPos.y - 10, this.leftButtonPos.x + 10, this.leftButtonPos.y + 10)
        triangle(this.rightButtonPos.x + 10, this.rightButtonPos.y, this.rightButtonPos.x - 10, this.rightButtonPos.y - 10, this.rightButtonPos.x - 10, this.rightButtonPos.y + 10)

    }

    displayHead() {
        if (this.head == 0) {

        } else if (this.head == 1) {

        } else if (this.head == 2) {

        } else {

        }
    }

}