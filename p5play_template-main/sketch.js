var box;
function setup() {
  createCanvas(400,400);
  box = createSprite (250, 250, 20, 20)
  box.shapeColor = "yellow"
}

function draw() 
{ 

if (keyDown("g")){
background ("red")
}
if (keyDown("h")){
  background ("green")
}
if (keyDown("j")){
  background ("purple")
}
if (keyDown("up")){
  box.y = box.y -5;
}
if (keyDown("down")){
  box.y = box.y +5;
}
if (keyDown("left")){
  box.x = box.x -5;
}
if (keyDown("right")){
  box.x = box.x +5;
}
drawSprites ()
}

