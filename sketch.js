const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies
var engine,world,ball,ground
function setup() {
 var Canvas = createCanvas(400,400)
 engine = Engine.create() 
 world= engine.world
 var scam={
   restitution: 1.5
 }

 ball=Bodies.circle(80,100,15,scam)
 World.add(world,ball)

var grd={
  isStatic:true
}

 ground=Bodies.rectangle(200,350,400,20,grd)
 World.add(world,ground)
}

function draw() {

  background("green");  
  Engine.update(engine)
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,15,15)
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,20)
  drawSprites();
}