/*

The Game Project

1 - Background Scenery

Use p5 drawing functions such as rect, ellipse, line, triangle and
point to draw the scenery as set out in the code comments. The items
should appear next to the text titles.

Each bit of scenery is worth two marks:

0 marks = not a reasonable attempt
1 mark = attempted but it's messy or lacks detail
2 marks = you've used several shape functions to create the scenery

I've given titles and chosen some base colours, but feel free to
imaginatively modify these and interpret the scenery titles loosely to
match your game theme.


WARNING: Do not get too carried away. If you're shape takes more than 5 lines
of code to draw then you've probably over done it.


*/

function setup() {
	createCanvas(1024, 576);
}

function draw() {
	background(100, 155, 255); //fill the sky blue

	noStroke();
	fill(0,155,0);
	rect(0, 432, 1024, 144); //draw some green ground

	//1. a cloud in the sky
	//... add your code here

	noStroke();
	fill(255);
	text("cloud", 200, 100);

	//2. a mountain in the distance
	//... add your code here

	noStroke();
	fill(255);
	text("mountain", 670, 70);

	//3. a tree
	//... add your code here

	noStroke();
	fill(255);
	text("tree", 800, 346);

	//4. a canyon
	//NB. the canyon should go from ground-level to the bottom of the screen

	//... add your code here

	noStroke();
	fill(255);
	text("canyon", 180, 460);

	//5. a collectable token - eg. a jewel, fruit, coins
	//... add your code here

	noStroke();
	fill(255);
	text("collectable item", 400, 400);


	// Cloud Shape being modeled
    beginShape();
     fill(250);
     ellipse(250, 150, 140, 90);
     ellipse(160, 175, 100, 100);
     ellipse(340, 145, 120, 110);
     ellipse(370, 210, 105, 90);
     ellipse(250, 220, 200, 100);
	endShape();
    
    fill(139,69,19);
    rect(780, 450, 100, 155);
    beginShape();
    translate(769, 350);
    fill(0,128,0);
    triangle(10, 100, 58, 10, 112, 100);
    endShape();
    
    // Cloud Shape ends here
    
    
    // Mountain Shape Starts here

    beginShape();
    fill(66,65,73);
    translate(100, -230);
    triangle(0, -120, 158, 185, -100, 185);
    

    fill(62,69,73);
    translate(-150, 10);
    triangle(20, -100, 158, 175, -100, 175);
    
    fill(64,65,73);
    translate(-180, 0);
    triangle(80, -100, 158, 175, -100, 175);
    
    endShape();
    

// Mountain Shape End Here
    
    
    
// Canon Shape Start Here
    beginShape();
    
    fill(0,0,0);
    rect(-400, 345, 120, 50);
    
    
    fill(50,0,0);
    ellipse(-380, 390, 55, 55);
    
    
    endShape();
// Canon Shape Ends Here

}








// Tree Shape being modeled










// Tree
