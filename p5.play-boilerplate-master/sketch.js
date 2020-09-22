function preload(){
  sound = loadSound("clock.mp3");
}

function setup() {
  createCanvas(400,400);
 // createSprite(400, 200, 50, 50);
 angleMode(DEGREES);
 
   
  }

function draw() {
  background(0,0,0); 
  
  translate(200,200);
  rotate(-90);
  hr = hour();
  mn = minute();
  sc = second(); 
   strokeWeight(10);
   stroke("red");

    noFill();
  scAngle = map(sc,0,60,0,360); 
  arc(0,0,300,300,0,scAngle);
  push();
  rotate(scAngle);
  line(0,0,100,0);
  sound.play();
  pop();
  stroke("blue");
  
  mnAngle = map(mn,0,60,0,360);
  arc(0,0,270,270,0,mnAngle);
  push();
  rotate(mnAngle);
  line(0,0,80,0);
  pop();
  stroke("green");
  

  hrAngle = map(hr,0,1,0,360); 
  arc(0,0,240,240,hrAngle);
    push();
    rotate(hrAngle);
     line(0,0,60,0);
     pop();
   
 
 
}