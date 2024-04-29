// Game Screen

class State4{
    constructor(){
        this.stars = [];
        for (let i = 0; i < 200; i++){
            this.stars.push(new Star());
        }
    }

    draw(){
    background(0)

    for (let i = 0; i < this.stars.length; i++){
        this.stars[i].show();
    }
    
    }
    
}

/*
    Game Plan 
        Space stuff flying in the screen
        Bad stuff you die -- good stuff you get a power up or something?
        Use arrow keys to apply steering forces
        On collision game ends, screen pops up
            | 
            -- > Can either go back to start and make a new character or replay the game with current character

*/