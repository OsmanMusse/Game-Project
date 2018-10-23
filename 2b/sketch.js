/*

The Game Project

2b - using variables

*/

var floorPos_y;

var gameChar_x = 1
var gameChar_y = 1
var movehigh = 0;
var movelow = 0;
var heightvalue;
var checkvalue
var treePos_x;
var treePos_y;

var canyon;
var collectable;

var mountain;
var cloud;
var x = 0;


function setup()
{
	createCanvas(1024, 576);
    angleMode(DEGREES);
    noLoop();
     
	floorPos_y = 432; //NB. we are now using a variable for the floor position

	//NB. We are now using the built in variables height and width
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

	treePos_x = width/2;
	treePos_y = floorPos_y;
    
}

function draw() {
	background(100, 155, 255); //fill the sky blue

	noStroke();
	fill(0, 155, 0);
	rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground
    

    
    
    //Draw the Tree
    push();
    fill(0,0,0);

    
     translate(760,-138);
     fill(139,69,19);
     rect(treePos_x -780, treePos_y - -17, 40, 120);
     fill(0,128,0);
     translate(40,375);
     ellipse(treePos_x - 798, treePos_y - 376, 75, 75);
     
    pop();
    
    //Draw Character Stickman
    
	//Add your code here ...
    
    push();
    fill(0,0,0)
    translate(gameChar_x - 177,gameChar_y - 50);


    rect(243, 77, 6, 40);
    ellipse(248, 68, 20, 20);
    
    rotate(0);
    translate(230,40);
    rect(8, 67, 6, 40);

     rotate(-8);
    translate(0,6);
    rect(8, 67, 6, 40);
    
    rotate(-84);
    rect(-50, -6, 6, 40);

    pop();
    
    fill(0,0,0);
    line(x, 10, x, 100);
    
}




function mousePressed() {
    gameChar_x = mouseX + -70;
    gameChar_y = mouseY + -70;
    console.log(gameChar_x);
    console.log(gameChar_y);
  redraw(); 
}