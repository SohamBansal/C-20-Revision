var movingRect,fixedRect;
var gameObj1,gameObj2;

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400, 50, 50, 50);
  movingRect.shapeColor = "red";
  movingRect.velocityY = 3;
  fixedRect = createSprite(400, 350, 50, 50);
  fixedRect.shapeColor = "green";
  fixedRect.velocityY = -3;
}

function draw() {
  background(0);
  bounceoff(movingRect,fixedRect);
  drawSprites();
}
