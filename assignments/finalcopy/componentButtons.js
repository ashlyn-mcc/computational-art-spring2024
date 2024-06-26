// The buttons used to change component selection in state 2

class ComponentButtons {
    constructor(x, y, col, i) {
        this.color = col;
        this.x = x;
        this.y = y;
        this.size = 75;
        this.originalSize = this.size;
        this.overButton = false;
        this.index = i
        this.buttonClicked = false;
    }

    display() {
        fill(this.color);
        ellipse(this.x, this.y, this.size, this.size);
        image(partsImgs[this.index], this.x, this.y, this.size / 2, this.size / 2);

        if (this.overButton) {
            push();
            strokeWeight(0.5);
            textSize(20);
            text(partText[this.index], this.x, this.y + this.size / 1.5)
            pop();
        }
    }

    hover() {
        if (dist(mouseX, mouseY, this.x, this.y) < 32.5) {
            this.size = 90;
            this.overButton = true;
        } else {
            this.overButton = false;
            this.size = this.originalSize;
        }
    }

    clicked() {
        if (this.overButton && mouseIsPressed) {
            this.buttonClicked = true;
        }
    }
}

