var ground;
var tom ,jerry;
var catImg2,catImg3,catImg1;
var mImg1,cat_running,c4;



function preload() {
    //load the images here
    ground=loadImage("images/garden.png");
   catImg1=loadImage("images/cat1.png");
   mImg1=loadImage("images/mouse1.png");
   cat_running=loadAnimation("images/cat2.png","images/cat3.png");
   c4=loadImage("images/cat4.png");

    
    
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
g=createSprite(100,100,0,0);
g.addImage(ground);
c1=createSprite(450,300,1,1);
c1.addImage(catImg1);
c1.scale=0.1
m1=createSprite(100,330,1,1);
m1.addImage(mImg1);
m1.scale=0.1;

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
if(c1.x-m1.x<(c1.width-m1.width)/2){
    c1.addImage(c4);
    c1.changeAnimation(c4);
    c1.velocityX=0;
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode=== LEFT_ARROW){
      c1.velocityX=-5;
      c1.addAnimation(cat_running);
      c1.changeAnimation("cat_running");
  }
  


}
