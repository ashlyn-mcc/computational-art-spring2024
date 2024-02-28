
class Cell {

    constructor(x, y, cellWidth, cellHeight,indexX,indexY,hue) {
        this.x = x;
        this.y = y;

        this.width = cellWidth;
        this.height = cellHeight;

        this.maxWidth = cellWidth;
        this.maxHeight = cellHeight;

        this.xIndex = indexX;
        this.yIndex = indexY;

        this.minHue = hue-20;
        this.maxHue = hue+20;

        this.bright = 70;
        this.sat = random(0,100);

        this.increase = 0;
    }

    update() {
        noStroke();
        fill(this.hue, this.sat, this.bright);

        this.sine();
        this.hexagon();
    }

    hexagon(){

        push();
        translate(this.x,this.y);
        beginShape();
        vertex(0,-this.height/2);
        vertex(this.width/3.5,-this.height/2);
        vertex(this.width/2,0);
        vertex(this.width/3.5,this.height/2);
        vertex(0,this.height/2);
        vertex(-this.width/3.5,this.height/2);
        vertex(-this.width/2,0)
        vertex(-this.width/3.5,-this.height/2);
        endShape();
        pop();
    }

    sine(){
        let sinVal = sin((frameCount * 0.04) + (this.x * 0.04));
        let cosVal = cos((frameCount * 0.04) + (this.y * -0.04));
        let wSize = map(sinVal, -1, 1, this.maxWidth/3,this.maxWidth);
        let hSize = map(cosVal, -1, 1, this.maxHeight/3,this.maxHeight);
        this.hue = map(sinVal * cosVal,-1,1,this.minHue,this.maxHue);
        this.sat = map(-sinVal * cosVal,-1,1,100,50);
        this.width = wSize;
        this.height = hSize;
    }
}
