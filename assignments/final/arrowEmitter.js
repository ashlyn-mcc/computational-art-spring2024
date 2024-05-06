class ArrowEmitter{
    constructor(){
        this.position = createVector(0,35);
        this.arrows = [];
        this.arrows.push(new Arrow(this.position.x,this.position.y));
    }

    update(){
        if (frameCount % 90 == 0){
            this.arrows.push(new Arrow(this.position.x,this.position.y));
        }

        for (let i = 0; i < this.arrows.length;i++){
            this.arrows[i].show();
            this.arrows[i].move();
            this.arrows[i].range();
        }
    }

}