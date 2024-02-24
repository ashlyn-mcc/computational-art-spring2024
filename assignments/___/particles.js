class Particle{
    constructor(xVal,yVal,upwards){
        this.position = createVector(xVal,yVal)

        this.initialY = this.position.y;

        this.speed = createVector(0,random(1,5));

        if (upwards){
            this.speed.mult(0,-1);
            this.rotation = 0;
            this.offset = -10
        } else {
            this.rotation = PI;
            this.offset = 20;
        }

        this.distance = 0;


        this.index = 0;

        this.slowDown = false;

        this.carType = random(carTypes);

        this.color = random(colors);

        this.stop = true;

    }

    show(){
        this.stopLight();
        this.position.add(this.speed);
        if (this.carType == 1){
            this.bigTruck(this.position.x,this.position.y,this.rotation);
        } else if (this.carType == 2){
            this.littleTruck(this.position.x,this.position.y,this.rotation);
        } else if (this.carType == 3){
            this.roundCar(this.position.x,this.position.y,this.rotation);
        } else if (this.carType == 4){
            this.hatchBack(this.position.x,this.position.y,this.rotation);
        } else if (this.carType == 5){
            this.boxyCar(this.position.x,this.position.y,this.rotation);
        }
    }

    distanceCheck(){

        for (let i = 0; i < cars.length; i++){
            if (abs(this.position.x - cars[i].position.x) > 20){
                continue;
            }

            if (abs(this.position.y-cars[i].position.y) < 100){
                this.speed = cars[i].speed;
                break;
            }
        }

    }

    boundsCheck(){
        if (abs(this.initialY - this.position.y) > height + 200){
            this.destroy()  ;
        }
    }

    destroy(){
        cars.splice(this.index,1);
    }

    stopLight(){

        if (this.stop == true){
            if (this.position.y < 450){
                this.speed = createVector(0,0);
            }
        }
    }


    bigTruck(x,y,rotation){
        push();
        x = x + this.offset;
        translate(x,y)
        rotate(rotation);
        scale(0.75);
        fill(0);
        rect(-3,8,36,10,3);
        rect(-3,40,36,10,3);
        rect(-3,85,36,10,3);
        fill(this.color);
        rect(0,0,30,30,5);
        fill(this.color);
        rect(0,30,30,75);
        fill(0);
        rect(5,7,20,10,2);
        pop();
    }

    littleTruck(x,y,rotation){
        push();
        x = x + this.offset;
        translate(x,y);
        rotate(rotation);
        scale(0.75);
        fill(0);
        rect(-3,15,36,10,3);
        rect(-3,65,36,10,3);
        fill(this.color);
        rect(0,0,30,30,5);
        fill(this.color);
        rect(0,30,30,50);
        fill(0);
        rect(5,7,20,10,2);
        pop();
    }

    roundCar(x,y,rotation){
        push();
        x = x + this.offset;
        translate(x, y);
        rotate(rotation);
        scale(0.75);
        fill(0);
        rect(-3,15,36,10,3);
        rect(-3,40,36,10,3);
        fill(this.color);
        ellipse(15,0,30,30);
        rect(0,0,30,50);
        ellipse(15,50,30,30);
        fill(0);
        rect(5,7,20,10,2);
        pop();
    }

    hatchBack(x,y,rotation){
        push();
        x = x + this.offset;
        translate(x, y);
        rotate(rotation);
        scale(0.75);
        fill(0);
        rect(-3,15,36,10,3);
        rect(-3,40,36,10,3);
        fill(this.color);
        ellipse(15,0,30,30);
        rect(0,0,30,60,2);
        fill(0);
        rect(5,7,20,10,2);
        pop();
    }

    boxyCar(x,y,rotation){
        push();
        x = x + this.offset;
        translate(x, y);
        rotate(rotation);
        scale(0.75);
        fill(0);
        rect(-3,15,36,10,3);
        rect(-3,40,36,10,3);
        fill(this.color);
        rect(0,0,30,60,2);
        fill(this.color);
        rect(10,0,10,60);
        fill(0);
        rect(5,15,20,10,2);
        pop();
    }
}