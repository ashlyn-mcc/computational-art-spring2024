class Ray {

    constructor() {
        this.position = createVector(random(width), random(800, 1600));
        this.velocity = createVector(0, 0);

        this.maxSpeed = random(1,5)
    }

    display() {
        push();
        translate(this.position.x, this.position.y);
        let angle = this.velocity.heading();
        rotate(angle)
        tint(100,map(this.position.y,800,1600,20,100))
        let size = map(this.position.y,800,1600,75,125)
        image(stingray, 0, 0, size, size);
        pop();

    }

    swim() {
        this.wrap();
        this.checkAngle();
        this.velocity.setMag(this.maxSpeed);
        this.position.add(this.velocity)
    }

    checkAngle() {
        let xElement = Math.floor(map(this.position.x, 0, width, 0, columns-1));
        if (xElement < 0){
            xElement = 0;
        } else if (xElement > 40){
            xElement = 40;
        }
        let yElement = Math.floor(map(this.position.y, 800, 1600, 0, rows-1));
        if (yElement < 0){
            y = 0;
        } else if (yElement > 20){
            yElement = 20;
        }

        console.log()

       let radianVal = cells[xElement][yElement].angle

        this.calculateMovement(radianVal);
        //console.log(angle);
    }

    calculateMovement(angle){
        let targetX = cos(angle);
        let targetY = sin(angle);

        this.velocity.add(targetX,targetY)
    }

    wrap() {
        this.position.x = (this.position.x + width) % width;
        if (this.position.y > 1600){
            this.position.y = 800;
        } else if (this.position.y < 800){
            this.position.y = 1600
        }
      }
}