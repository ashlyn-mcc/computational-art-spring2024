
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

        this.minHue = hue-60;
        this.maxHue = hue+60;

        this.bright = 70;
        this.sat = 70;

        this.increase = 0;
    }

    update() {
        noStroke();

        this.sine();

    }

    hexagon(fillOrStroke){

        push();

        if (fillOrStroke == 'fill'){
        fill(this.hue, this.sat-50, this.bright,100);
        noStroke();
        } else {
        noFill();
        strokeWeight(3);
        stroke(this.hue, this.sat, this.bright,100);
        }
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
        endShape(CLOSE);
        pop();
    }

    circular(){
        push();
        translate(this.x,this.y);
        stroke(this.hue, this.sat, this.bright,75);
        strokeWeight(2);
        noFill();
        ellipse(0,0,this.width,this.height);
        pop();
    }

    sine(){
        let sinVal = sin((frameCount * 0.04) + (this.x * 0.04));
        let cosVal = cos((frameCount * 0.04) + (this.y * -0.04));
        this.width = map(sinVal, -1, 1, this.maxWidth/3,this.maxWidth);
        this.height = map(cosVal, -1, 1, this.maxHeight/3,this.maxHeight);
        this.hue = map(sinVal * cosVal,-1,1,this.minHue,this.maxHue);
        this.sat = map(-sinVal * cosVal,-1,1,100,50);

        this.hexagon('fill');

        this.width = map(-sinVal, -1, 1, this.maxWidth/3,this.maxWidth);
        this.height = map(-cosVal, -1, 1, this.maxHeight/3,this.maxHeight);
        this.hue = (this.hue + 180) % 360;

        this.circular();
    }
}
