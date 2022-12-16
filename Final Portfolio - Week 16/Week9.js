

x = 100
y=100

function setup()
{
    createCanvas(500, 600);
}

function draw()
{
    background(120,45,78);
    textSize(22)
    text("Crissy Crossy", 10,80);
    textSize(20);
    text("X: " + mouseX,100,200 );
    text("Y: " + mouseY,100,220 );
    // head
    strokeWeight(10)
    fill("#E8BEAC");
    circle(250,250,150);
   
    // eyes
    strokeWeight(5);
    fill(300)
    ellipse(220,250,40,20)
    fill(152,115,172);
    arc(228, 249, 15, 15, 0, PI + QUARTER_PI, CHORD);
    
   
    strokeWeight(5);
    fill(300);
    ellipse(280,250,40,20);
    fill(152,115,172);
    arc(272, 249, 15, 15, 0, PI + QUARTER_PI, CHORD);


// neck thing

    strokeWeight(12);
    fill("pink");
    triangle(250,337,155,600,345,600)
    // nose
  //  point(245,90);
    
// hat
fill("#C8A2C8")
strokeWeight(8)
triangle(180,180,250,60,314,180)

    // jewel
    strokeWeight(10);
    fill("pink");
    ellipse(250, 150, 30, 45);


    // arms & hands
    strokeWeight(7);
    line(194,470,150,370);
    line(300,470,360,370);

    strokeWeight(3.5);
    fill("#E8BEAC");
    rect(130,350,25,30);

    rect(355,350,25,30);
  

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
    textSize(22);
    text("Jessica Henderson",330,500 );


}