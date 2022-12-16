x = 100
y=100
// Eyes
var eyeX = 220
var eyeY = 250
var eyeDirection = 8

var eyeX1 = 280
var eyeY1 = 250 
var eyeDirection1 = 4

// Head
var headX = 250;
var headY = 250;
var headDirection = 1;

// Hands
var bodyX = 200;
var bodyY = 350;
var bodyDirection = 3;

// Jewel 
var jewelX = 250
var jewelY = 150 
var jewelDirection = 1

var size = 22;
var count = 0;
var sizeDirection = 2;

var size1 = 80;
var count2 = 0;
var titleDirection = 2;

var headSize = 150;
var count1 = 0;
var headDirection1 = 2;

var xlocation = 300;
var ylocation = 500;

function setup()
{
    createCanvas(500, 600);
    eyeDirection = floor(random(0,10));
    eyeDirection1 = floor(random(0,20));
    headDirection = floor(random(0,20));
    bodyDirection = floor(random(0,20));
    jewelDirection = floor(random(0,11));
    headDirection1 = floor(random(0,10));
}

function draw()
{
    background(120,45,78);
    textSize(size1)
    text("Crissy Crossy", 10,80);
    size1+= titleDirection;
    count2++;
    if(count2 > 5)
    {
        titleDirection *=-1;
        count2 = 0;
    }
    textSize(20);
    text("X: " + mouseX,100,200 );
    text("Y: " + mouseY,100,220 );
    // head
    strokeWeight(10)
    fill("#E8BEAC");
    circle(headX,headY,headSize);
    headX+=headDirection;
    if(headX >= 418 || headX <= 82)
    {
        headDirection *= -1;
    }
    headSize+= headDirection1;
    count1++;
    if(count1 > 5)
    {
        headDirection1 *=-1;
        count1 = 0;
    }
   
    // eyes
    strokeWeight(5);
    fill(300)
    ellipse(eyeX,eyeY,40,20)
    fill(152,115,172);
    arc(228, 249, 15, 15, 0, PI + QUARTER_PI, CHORD);
    eyeX+=eyeDirection;
    if(eyeX >= 418 || eyeX <= 82)
    {
        eyeDirection *= -1;
    }
   
    strokeWeight(5);
    fill(300);
    ellipse(eyeX1,eyeY1,40,20);
    fill(152,115,172);
    arc(272, 249, 15, 15, 0, PI + QUARTER_PI, CHORD);
    eyeY1+=eyeDirection;
    if(eyeY >= 418 || eyeY1 <= 82)
    {
        eyeDirection *= -1;
    }


// neck thing

    strokeWeight(12);
    fill("pink");
    triangle(250,337,155,600,345,600)
    
// hat
fill("#C8A2C8")
strokeWeight(8)
triangle(180,180,250,60,314,180)

    // jewel
    strokeWeight(10);
    fill("pink");
    ellipse(jewelX, jewelY, 30, 45);
    jewelX+=jewelDirection;
    jewelY+=jewelDirection;
    if(jewelX>= 418 || jewelX <= 82)
    {
        jewelDirection *= -1;
    }
    if(jewelY>= 418 || jewelY <= 82)
    {
        jewelDirection *= -1;
    }


    // arms & hands
    strokeWeight(7);
    line(194,470,150,370);
    line(300,470,360,370);

    strokeWeight(3.5);
    fill("#E8BEAC");
    rect(130,bodyY,25,30);

    rect(355,bodyY,25,30);
    bodyY += bodyDirection;
    if(bodyY <= 0 || bodyY >= 450 )
    {
        bodyDirection *= -1;
    }

    // freckles
    strokeWeight(3);
    fill("purple");
    point(212, 284);
    point(233, 295);
    point(230, 272);
    point(261, 2270);
    point(262, 289);
    point(271, 292);
    point(302, 277);
    
    // hair
  //  line(130,175,175,50);
  //  line(325,50,360,175);
    // body
 //   fill(10, 24, 120);
 //   rect(200,185,100,150);
    
    // decoration
 //   fill(255);
 //   triangle(220,320,250,220,280,320)
    // right arm
 //   fill(10, 24, 120);
//    rect(300,195,50,10);
    // left arm
    // rect(150,195,50,10);
    // left leg
    // rect(200,335,10,50);
    // right leg
    // rect(290,335,10,50);
    
    fill("black");
    textSize(size);
    size+= sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-1;
        count = 0;
    }
    text("Jessica Henderson",330,500 );
    // for (let i = 0; i < 900; i++) {
    //    xlocation = xlocation + 300;
    //   ylocation = ylocation + 300;
    //    xlocation = xlocation - 300;
      //  ylocation = ylocation - 300;
    
      }