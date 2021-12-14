var caixa;

function setup() {
  createCanvas(400,400);
  caixa=createSprite(100,100,50,50)
  caixa.shapeColor='red'
}

function draw() 
{
  background(30);
drawSprites()

if (keyIsDown(UP_ARROW)) {
  caixa.y-=5

}
if (keyIsDown(DOWN_ARROW)) {
  caixa.y+=5
}
if (keyIsDown(RIGHT_ARROW)) {
  caixa.x+=5
}
if (keyIsDown(LEFT_ARROW)) {
  caixa.x-=5
}
}




