let cars = [];

class ParticleSystem{

    constructor(direction, laneXvals){
        
        if (direction == "up"){
            this.upwards = true;
            this.yVal = height + 500;
        } else if (direction == "down"){
            this.upwards = false;
            this.yVal = -500;
        }

        this.xVals = laneXvals;

        this.lane1 = [];
        this.lane2 = [];
        this.lane3 = [];


    }

    update(){

        if (frameCount % 50 == 0 && stopCars == false){
            let x = random(this.xVals);
            if (x == this.xVals[0]){
                cars.push(new Particle(x,this.yVal,this.upwards))
            } else if (x == this.xVals[1]){
               cars.push(new Particle(x,this.yVal,this.upwards))
            } else if (x == this.xVals[2]){
               cars.push(new Particle(x,this.yVal,this.upwards))
            }
           
        }

        this.indices();

        for (let i = 0; i < cars.length; i++){
            cars[i].boundsCheck();
            cars[i].distanceCheck();
            cars[i].show();
        }


    }

    indices(){
        for (let i = 0; i < cars.length; i++){
            cars[i].index = i;
        }
    }

}