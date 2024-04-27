// Component Selection Screen

class State2 {
    constructor() {
        this.leftButtonPos = createVector(400, 400);
        this.rightButtonPos = createVector(750, 400);
        this.buttonHeight = 40;
        this.buttonWidth = 60;

        this.hoverL = false;
        this.hoverR = false;
        this.numComponent = 0;
        this.buttonUnderMouse = 0;

        this.nextButtonPosition = createVector(700,670);
        this.nextButtonWidth = 125;
        this.nextButtonHeight = 40;
        this.fade = 0;

        this.clickedFrameCount = 0;

        this.justPressed = false;

        this.componentButtons = [];

        this.addComponentButton = new addComponent();

        this.componentMenu = [new SelectionHead(575, 400), new SelectionBody(575, 400), new SelectionArms(575, 400), new SelectionLegs(575, 350)];

        this.colorPalette = [];

        this.currentComponentIndex = 0;

        this.currentColor = color(80);

        this.colorIndex = 9;

        this.changeState = false;

        this.buttonColors = [color(177, 76, 47), color(27, 70, 65), color(235, 35, 26), color(81, 28, 89)]


        for (let i = 0; i < 4; i++) {
            this.componentButtons.push(new ComponentButtons(425 + i * 100, 150, this.buttonColors[i], i));
        }

        this.colors = [color(0, 45, 75), color(40, 60, 75), color(55, 60, 90), color(100, 45, 75), color(200, 60, 55), color(290, 45, 55), color(340, 25, 75), color(100), color(30), color(75)]

        let inc = 0;
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 2; j++) {
                this.colorPalette.push(new ColorButton(375 + i * 50, 615 + j * 50, 25, this.colors[inc], inc));
                inc++
            }
        }


    }

    draw() {
        background(0);

        fill(81, 28, 89);
        rect(175, height / 2, 350, height);
        fill(207, 21, 62);
        rect(576, height / 2, 450, height);

        fill(235, 35, 26)
        textSize(35);
        stroke(81, 28, 89)
        text("Build Your Bot", 575, 50);
        stroke(0);

        this.displayButtons();


        this.buttonFunction();

        // get value of component button

        for (let i = 0; i < this.componentButtons.length; i++) {
            this.componentButtons[i].display();
            this.componentButtons[i].hover();
            this.componentButtons[i].clicked();

            if (this.componentButtons[i].buttonClicked) {
                this.currentComponentIndex = this.componentButtons[i].index;
                this.componentButtons[i].buttonClicked = false;
            }

        }

        this.componentMenu[this.currentComponentIndex].show(this.numComponent, this.colors[this.colorIndex])





        this.colorButtons();

        this.addComponentButton.displayButton();
        let clicked = this.addComponentButton.hoverButton();
        if (clicked) {
            let specsArray = this.componentMenu[this.currentComponentIndex].getSpecs();

            if (this.currentComponentIndex == 0) {
                parts[0] = new Head(175, 150, specsArray[0], specsArray[1]);
            } else if (this.currentComponentIndex == 1) {
                parts[2] = new Body(175, 350, specsArray[0], specsArray[1]);
            } else if (this.currentComponentIndex == 2) {
                parts[3] = new Arms(175, 350, specsArray[0], specsArray[1]);
            } else if (this.currentComponentIndex == 3) {
                parts[1] = new Legs(175, 500, specsArray[0], specsArray[1]);
            }

        }

        if (parts.length > 0) {
            for (let i = 0; i < parts.length; i++)
                if (parts[i] != null) {
                    parts[i].show();
                }
        }

        let numParts = 0;
        for (let i = 0; i < 4; i++){
            if (parts[i] != null){
                numParts += 1
            }
        }


        if (numParts == 4){
        this.isButtonClicked();
        this.changeStateButton();
        if (this.changeState){
        this.nextState();
        }
        fill(0,this.fade);
        rect(width/2,height/2,width,height);
    }
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

    buttonFunction() {
        this.buttonUnderMouse = this.overButtons();

        if (this.buttonUnderMouse == 1) {
            this.hoverL = true;
        } else if (this.buttonUnderMouse == 2) {
            this.hoverR = true
        } else {
            this.hoverL = false;
            this.hoverR = false;
        }

        if (this.buttonUnderMouse == 1 && mouseIsPressed && this.justPressed == false) {
            this.numComponent -= 1;
            this.justPressed = true;
            this.clickedFrameCount = frameCount;
        } else if (this.buttonUnderMouse == 2 && mouseIsPressed && this.justPressed == false) {
            this.numComponent += 1;
            this.justPressed = true;
            this.clickedFrameCount = frameCount;

        }

        if (this.numComponent > 3) {
            this.numComponent = 0;
        } else if (this.numComponent < 0) {
            this.numComponent = 3;
        }

        if (this.justPressed) {
            if (frameCount - this.clickedFrameCount > 15) {
                this.justPressed = false;
            }
        }

    }

    displayButtons() {

        stroke(0);
        strokeWeight(1);
        if (this.hoverL) {
            fill(81, 28, 89);
        } else {
            fill(27, 70, 65);
        }
        rect(this.leftButtonPos.x, this.leftButtonPos.y, this.buttonHeight, this.buttonWidth, 3);

        if (this.hoverR) {
            fill(81, 28, 89)
        } else {
            fill(27, 70, 65);

        }
        rect(this.rightButtonPos.x, this.rightButtonPos.y, this.buttonHeight, this.buttonWidth, 3);

        fill(235, 35, 26);
        triangle(this.leftButtonPos.x - 10, this.leftButtonPos.y, this.leftButtonPos.x + 10, this.leftButtonPos.y - 10, this.leftButtonPos.x + 10, this.leftButtonPos.y + 10)
        triangle(this.rightButtonPos.x + 10, this.rightButtonPos.y, this.rightButtonPos.x - 10, this.rightButtonPos.y - 10, this.rightButtonPos.x - 10, this.rightButtonPos.y + 10)

    }

    colorButtons() {
        for (let i = 0; i < this.colorPalette.length; i++) {
            this.colorPalette[i].display();
            this.colorIndex = this.colorPalette[i].clicked(this.colorIndex);
        }
    }

    changeStateButton(){
        console.log("entered")
        rect(this.nextButtonPosition.x,this.nextButtonPosition.y,this.nextButtonWidth,this.nextButtonHeight,5);
        fill(235, 35, 26);
        textFont(subFont);
        strokeWeight(0.5);
        textSize(15);
        text("Done", this.nextButtonPosition.x, this.nextButtonPosition.y)
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
            if (mouseIsPressed){
            this.changeState = true;
            }
        } else {
            fill(27, 70, 65)
        }
    }

    // Changes to next state
    nextState() {
        if (this.fade <= 100) {
            this.fade += 1;
        }

        if (this.fade > 100) {
            currentState = state3;
        }
    }

}

