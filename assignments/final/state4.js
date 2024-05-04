// Game Screen

class State4{
    constructor(){
        

    }

    draw(){
        lava.show();

    background(0)


    image(room,width/2,height/2,width,height);
    lava.position(0,height-300)
    lava.size(width,300)
    
    for (let i = 0; i < parts.length; i++) {
        push();
        translate(350, 300);
        scale(0.2);
        strokeWeight(5);
        stroke(0);
        parts[i].show();
        pop();
    }

    }
    
}

/*
    Game Plan:
    
        * Space stuff flying in the screen

        * Bad stuff you die -- good stuff you get a power up or something?

        * Use left and right arrow keys to apply steering forces
            | 
            -- > Automatically go forward or have to press "up" arrow key?

        * On collision game ends, screen pops up
            | 
            -- > Can either go back to start and make a new character or replay the game with current character

*/