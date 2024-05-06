class ArrowEmitter{
    constructor(){
        this.position = createVector(0,35);
        this.arrows = [];
    }

    update(){
        if (frameCount % 20 == 0){
            this.arrows.push(new Arrow(this.position.x,this.position.y));
        }

        for (let i = 0; i < this.arrows.length;i++){
            this.arrows[i].show();
            this.arrows[i].move();
            this.arrows[i].range();
        }
    }

}