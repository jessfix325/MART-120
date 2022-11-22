// x and y for my character
var characterX = 100;
var characterY = 100;
// define the key codes for each letter
var w = 87; 
var s = 83;
var a = 65;
var d = 68;

// x and y for Moving Obstacles 1 & 2
var x = 30;
var y = 50;
var diameter = 25
var xSpeed;
var ySpeed;

var o = 400;
var p = 400;
var oSpeed;
var pSpeed;


// create a shape when the mouse is clicked
var mouseShapeX;
var mouseShapeY;
function setup()
{
    createCanvas(500, 600);
    // get a random speed when the it first starts
    xSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    ySpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
}

function draw()
{
    background(98,50,44);
    stroke(0);
    fill("#fa8072");
    // top border
    rect(0,0,width,10);
    // left border
    rect(0,0,10,height);
    // bottom border
    rect(0, height-10,width, 10);
    // right upper border
    rect(width-10,0,10,height-50);

    // exit message
    textSize(16);
    text("Exit", width-50,height-50)

    //character
    fill(223,255,0);
    rect(characterX,characterY,20);



    // handle the keys
    if(keyIsDown(w))
    {
        characterY -= 10;   
    }
    if(keyIsDown(s))
    {
        characterY += 10;   
    }
    if(keyIsDown(a))
    {
        characterX -= 10;   
    }
    if(keyIsDown(d))
    {
        characterX += 10;   
    }

    // Moving Obstacle 1
    fill("#26453e");
    // draw the shape
    circle(x, y, diameter);

    // if else stuff

      if (diameter <= 50) {
        diameter += 8;
      } else if (diameter == 100 || diameter <= 150) {
        diameter += 2;

      } else if (diameter != 200) {
        diameter = 25;
      }


     // get a random speed when the it first starts
     xSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
     ySpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    // move the shape
    x += xSpeed;
    y += ySpeed;
    // check to see if the shape has gone out of bounds
    if(x > width)
    {
        x = 0;
    }
    if(x < 0)
    {
        x = width;
    }
    if(y > height)
    {
        y = 0;
    }
    if(y < 0)
    {
        y = height;
    }

    // Moving Obstacle 2
    fill("#fa8072");
    // draw the shape
    rect(o, p, 60);


     // get a random speed when the it first starts
     oSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
     pSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    // move the shape
    o += oSpeed;
    p += pSpeed;
    // check to see if the shape has gone out of bounds
    if(o > width)
    {
        o = 0;
    }
    if(o < 0)
    {
        o = width;
    }

    if(p > height)
    {p = 0;}

    if(p < 0)
    {p = height;}

    // check to see if the character has left the exit
    if(characterX > width && characterY > width-50)
    {
        fill("#fa8072");
        textSize(20);
        text("You did it! You beautiful square!", 100, 250);
    }

    // create the shape based on the mouse click
    fill("#fa8072");
    rect(mouseShapeX, mouseShapeY, 30);
}

function mouseClicked()
{
    fill("#fa8072")
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}