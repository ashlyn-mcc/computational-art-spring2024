let cells = [];
let columns = 100;
let rows = 60;

class FlowField{

    constructor(){
        this.position = createVector(0,800);

        this.columns = columns;
        this.rows = rows;
        
        this.rays = [];

        this.generateGrid();
        this.generateRays();


        this.numRays = 100;
    }

    generateGrid(){
        
        for (let i = 0; i < this.columns; i++){
            cells[i] = []
            for (let j = 0; j < this.rows; j++){
                let xPos = map(i,0,this.columns,0,width);
                let angle = map(noise(i,j),0,1,0,2*PI)
                let yPos = map(j,0,this.rows,800,1600);
    
                cells[i][j] = (new FlowCell(xPos,yPos,angle,i,j));
            }
        }
    }

    displayGrid(){
        for (let cell of cells){
            for (let object of cell){
            object.display();
            }
        }
    }

    generateRays(){

        for (let i = 0; i < 50; i++){
            console.log("rays made");
            this.rays.push(new Ray());
        }
    }

    displayRays(){
        for (let ray of this.rays){
            ray.display();
            ray.swim();
        }
    }


}

