class addComponent{
    constructor(){
        this.x = 700;
        this.y = 650
        this.width = 125
        this.height = 40

        this.regularCol = color(27, 70, 65)
        this.color = color(27, 70, 65)
        this.hoverCol = color(81, 28, 89)
    }

    displayButton(){
        fill(this.color);
        rect(700,650,125,40,5);
        fill(235, 35, 26);
        textFont(subFont);
        strokeWeight(0.5);
        textSize(15);
        text("Add to bot",700,650)

        this.hoverButton();
    }

    hoverButton(){
        let xBound = this.width/2;
        let yBound = this.height/2;

        if (mouseX < this.x+xBound &&
            mouseX > this.x-xBound &&
            mouseY < this.y+yBound &&
            mouseY > this.y-yBound){
                this.color = this.hoverCol;
                if (mouseIsPressed){
                    return true;
                }
            } else {
                this.color = this.regularCol;
            }

        return false;
    }

  


}