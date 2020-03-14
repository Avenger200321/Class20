var frect,mrect;
function setup() {
  createCanvas(1200,800);
  frect=createSprite(400, 200, 50, 50);
  mrect=createSprite(700,200,30,50);
  mrect.velocityX=-2;
  frect.velocityX=2;
}

function draw() {
  background(0);  
  if(mrect.x-frect.x<mrect.width/2+frect.width/2
    && frect.x-mrect.x<mrect.width/2+frect.width/2){
      mrect.velocityX=mrect.velocityX*(-1);
      frect.velocityX=frect.velocityX*(-1);
    }
  
  
  drawSprites();
}