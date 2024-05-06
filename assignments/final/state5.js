class State5{
    constructor(){
    }

    draw(){
        lava.hide();

        //background(200,100,100);
        textFont(titleFont);
        textSize(75);
        strokeWeight(1);
        stroke(0);
        fill(20);
        text("Game Over",width/2 + 3,203)
        fill(27, 70, 65);
        text("Game Over",width/2,200)

        textFont(subFont);
        textSize(30);
        fill(235, 35, 26)
        text("Your bot survived for "+ pastArrows+ " arrows.",width/2,400)
    }
}