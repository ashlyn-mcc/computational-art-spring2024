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

        this.clickedFrameCount = 0;

        this.justPressed = false;

        this.componentButtons = new ComponentButtons();

        this.head = new SelectionHead(575,400);

        this.colorPalette = [];

        this.currentColor = color(80);

        this.colorIndex = 9;

        this.colors = [color(0,45,55),color(40,60,75),color(55,60,90),color(100,45,55),color(200,60,55),color(290,45,55),color(340,25,75),color(100),color(30),color(75)]

        let inc = 0;
        for (let i = 0; i < 5; i++){
            for (let j=0; j < 2; j++){
                this.colorPalette.push(new ColorButton(375+i*50,635+j*35,30,this.colors[inc],inc));
                inc++
            }
        }
    }

    draw() {
        background(0);

        fill(90);
        rect(175, height / 2, 350, height);
        fill(207, 21, 62);
        rect(576, height / 2, 450, height);

        this.displayButtons();

        this.buttonFunction();

        this.componentButtons.display();

        this.head.showHead(this.numComponent,this.colors[this.colorIndex]);
        
        console.log();
        this.colorButtons();
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

    buttonFunction(){
        this.buttonUnderMouse = this.overButtons();

        if (this.buttonUnderMouse == 1) {
            this.hoverL = true;
        } else if (this.buttonUnderMouse == 2) {
            this.hoverR = true
        } else {
            this.hoverL = false;
            this.hoverR = false;
        }

        if (this.buttonUnderMouse == 1 && mouseIsPressed && this.justPressed == false){
            this.numComponent -= 1;
            this.justPressed = true;
            this.clickedFrameCount = frameCount;
        } else if (this.buttonUnderMouse == 2 && mouseIsPressed && this.justPressed == false){
            this.numComponent += 1;
            this.justPressed = true;
            this.clickedFrameCount = frameCount;

        }

        if (this.numComponent > 3){
            this.numComponent = 0;
        } else if (this.numComponent < 0){
            this.numComponent = 3;
        }

        if (this.justPressed){
            if (frameCount - this.clickedFrameCount > 15){
                this.justPressed = false;
            }
        }

    }

    displayButtons() {

        stroke(0);
        strokeWeight(1);
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

    colorButtons(){
        this.displayColorButtons();
    }

    displayColorButtons(){

       for (let i = 0; i < this.colorPalette.length; i++){
        this.colorPalette[i].display();
        this.colorIndex = this.colorPalette[i].clicked(this.colorIndex);
       }

    }

}

class ColorButton{
    constructor(x,y,size,color,index){
        this.position = createVector(x,y);
        this.size = size;
        this.color = color;
        this.index = index;
    }

    display(){
        fill(this.color);
        circle(this.position.x,this.position.y,this.size);
    }

    clicked(currentIndex){
        if (mouseIsPressed && dist(mouseX,mouseY,this.position.x,this.position.y) < this.size/2){
            return this.index;
        } else {
            return currentIndex;
        }
    }

}