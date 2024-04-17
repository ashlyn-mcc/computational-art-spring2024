     class Mushroom {
            constructor(x, y,scale,hue) {
              this.x = x;
              this.y = y;
              this.scaleFactorX = scale;
              this.hue = hue;

    
            }
          
            display() {
                push();
                translate(this.x,this.y);
                scale(this.scaleFactorX)
                noStroke();
                rectMode(CENTER); // mushroom stem
                fill(40, 25, 95);
                rect(0, 80, 50, 150, 5);
                fill(40, 25, 90);
                rect(0, 80, 55, 70, 5);
                fill(40, 25, 60, 30);
                rect(20, 80, 15, 150, 5);
            
                fill(this.hue, 85, 60);
                ellipse(0, 0, 200, 50); // mushroom red top
                fill(this.hue, 85, 65);
                ellipse(0, -3, 195, 50);
                fill(this.hue, 85, 70);
                ellipse(0, -6, 190, 50);
                fill(this.hue, 80, 70);
                ellipse(0, -9, 185, 50);
                fill(this.hue, 75, 70);
                ellipse(0, -12, 180, 50);
                arc(0, -12, 160, 120, 180, 0);
            

                fill(0, 0, 100);
                ellipse(-75, 10, 15, 10); // white mushroom dots
                ellipse(-50, -10, 12, 7);
                ellipse(-25, -30, 10, 8);
                ellipse(-45, -40, 7, 6);
                ellipse(-55, -25, 10, 4);
                ellipse(0, -60, 15, 8);
                ellipse(0, 5, 16, 13);
                ellipse(65, -10, 8, 4);
                ellipse(10, 25, 13, 5);
                ellipse(-50, 5, 7, 7);
                pop();
              }
          

    }

 