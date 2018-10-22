/*

The Game Project

2 - Game character

Use p5 drawing functions such as rect, ellipse, line, triangle and
point to draw the different states of your game character.

Write the code so that your character appears inside the box for each
state.

IMPORTANT: For each box the variables gameChar_x & gameChar_y are set to the bottom
center of the box. You must combine these variables with arithmetic to
determine the position of each shape that you draw. This will later allow
you to adjust the position of your game character.

Each state is worth two marks:

//standing front facing = 2
//jumping facing forwards = 2
//walking left = 2
//walking right = 2
//jumping left and jumping right = 2

0 marks = not a reasonable attempt
1 mark = attempted but it lacks detail and you didn't use gameChar_x and gameChar_y correctly
2 marks = you've used a selction of shape functions and made consistent use of gameChar_x and gameChar_y

WARNING: Do not get too carried away. If you're character takes more than 5 lines
of code to draw then you've probably over done it.

** Only submit your sketch.js **

*/

var gameChar_x = 0;
var gameChar_y = 0;

function setup()
{
	createCanvas(400, 600);
    angleMode(DEGREES);
}

function draw()
{
	background(255);

	//Standing, facing frontwards

	stroke(100);
	noFill();
	rect(20, 60, 50, 80);
	noStroke();
	fill(0);
	text("1. standing front facing", 20, 160);

	gameChar_x = 245;
	gameChar_y = 137;
	//Add your code here ...
    push();
    rect(42, 77, 9, 40);
    
    translate(gameChar_x -= 253,gameChar_y -= 118);
    ellipse(55, 49, 20, 20);

    
    translate(gameChar_x += 27,gameChar_y -= 20);
    rotate(10);
    rect(42, 80, 5, 30);
    
    translate(gameChar_x -= 45,gameChar_y += 30);
    rotate(-25);
    rect(50, 80, 5, 30);
    
    translate(gameChar_x += 108,gameChar_y -= 23);
    rotate(105);
    rect(60, 0, 5, 30);
    
    pop();
    
   



	//Jumping facing forwards
	stroke(100);
	noFill();
	rect(220, 60, 50, 80);
	noStroke();
	fill(0);
	text("2. jumping facing forwards", 220, 160);

	gameChar_x = 245;
	gameChar_y = 137;
	//Add your code here ...
    
    push();
    rotate(2);
    translate(gameChar_x -= 230,gameChar_y -= 160);
    rect(243, 77, 6, 40);
    ellipse(248, 68, 20, 20);
    rotate(90);
    rect(90, -267, 6, 40);
    rotate(25);
    rect(-2, -301, 5, 30);
    rotate(90);
    rect(-270, -30, 5, 30);
    pop();

	//Walking, turned left
	stroke(100);
	noFill();
	rect(20, 260, 50, 80);
	noStroke();
	fill(0);
	text("3. Walking left", 20, 360);

	gameChar_x = 45;
	gameChar_y = 337;
	//Add your code here ...
    
    push();
    rotate(3);
    translate(gameChar_x -= 230,gameChar_y -= 140);

    rect(243, 77, 6, 40);
    ellipse(248, 68, 20, 20);
    
    rotate(90);
    rect(90, -267, 6, 40);
    rotate(-35);
    rect(230, -135, 5, 30);
    rotate(-75);
    rect(190, 190, 4, 30);
    pop();
    


	//Walking, turned right
	stroke(100);
	noFill();
	rect(220, 260, 50, 80);
	noStroke();
	fill(0);
	text("4. Walking right", 220, 360);

	gameChar_x = 235;
	gameChar_y = 337;
	//Add your code here ...
    
    push();
    translate(gameChar_x -= 230,gameChar_y -= 140);


    rect(243, 77, 6, 40);
    ellipse(248, 68, 20, 20);
    
    rotate(90);
    rect(90, -267, 6, 40);
    rotate(-35);
    rect(2650, -135, 5, 30);
    rotate(-30);
    rect(268, 2, 4, 30);
    rotate(90);
    rect(-1, -303, 4, 30);
    pop();



	//Jumping right
	stroke(100);
	noFill();
	rect(20, 460, 50, 80);
	noStroke();
	fill(0);
	text("5. Jumping to the right", 20, 560);

	gameChar_x = 45;
	gameChar_y = 537;
	//Add your code here ...
    push();
    translate(gameChar_x -= 230,gameChar_y -= 160);


    rect(243, 77, 6, 40);
    ellipse(248, 68, 20, 20);
    
    rotate(90);
    rect(90, -267, 6, 40);
    rotate(-35);
    rect(2650, -135, 5, 30);
    rotate(-30);
    rect(268, 2, 4, 30);
    rotate(90);
    rect(-1, -303, 4, 30);
    pop();

	//Jumping to the left

	stroke(100);
	noFill();
	rect(220, 460, 50, 80);
	noStroke();
	fill(0);
	text("6. Jumping to the left", 220, 560);

	gameChar_x = 245;
	gameChar_y = 537;
	//Add your code here ...
    
    
    push();
    rotate(3);
    translate(gameChar_x -= 230,gameChar_y -= 160);

    rect(243, 77, 6, 40);
    ellipse(248, 68, 20, 20);
    
    rotate(90);
    rect(90, -267, 6, 40);
    rotate(-35);
    rect(230, -135, 5, 30);
    rotate(-75);
    rect(190, 190, 4, 30);
    pop();

}
