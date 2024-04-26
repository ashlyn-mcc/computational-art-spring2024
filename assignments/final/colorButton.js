class ColorButton {
    constructor(x, y, size, color, index) {
        this.position = createVector(x, y);
        this.size = size;
        this.orignalSize = size;
        this.color = color;
        this.index = index;
        this.expanded = size * 1.75;
    }

    display() {
        fill(this.color);
        circle(this.position.x, this.position.y, this.size);
    }

    clicked(currentIndex) {

        if (dist(mouseX, mouseY, this.position.x, this.position.y) < this.size / 2){
            this.size = this.expanded
            if (mouseIsPressed){
                return this.index;
            } else {
                return currentIndex
            }
        } else {
            this.size = this.orignalSize
            return currentIndex;
        }
        // if (mouseIsPressed && dist(mouseX, mouseY, this.position.x, this.position.y) < this.size / 2) {
        //     return this.index;
        // } else {
        //     ;
        // }
    }

}