// creates one wave line
class Wave{
	constructor(index){
		
		// generates shade of blue
		this.hue = random(200,225);
		this.sat = random(50,100);
		
		// positioned randomly across bottom of screen
		this.x = random(-100,width+100);
		this.y = random(height/2,height);
		this.bright = map(this.y,height/2,height,55,100);

		// length and height of the wave line
		this.length = random(10,400);
		this.height = 1

		// it's position in the array
		this.index = index;
	}
	
	update(){
		
		// alter hue and saturation with noise
		this.hue = map(noise(waveOffsets[this.index]),0,1,200,225);
		this.sat = map(noise(waveOffsets[this.index]),0,1,50,100);
		
		// draw wave line
		noStroke();
		fill(this.hue,this.sat,this.bright);
		rect(this.x,this.y,this.length,map(this.y,height/2,height,0.5,3));
	}
}