const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine, world;
var ground;
var ball ; 
function setup() {
  createCanvas(400,400);

  engine = Engine.create()
  world = engine.world

var options = {

  isStatic : true

}

  ground = Bodies.rectangle(200,390,200,20,options)
  World.add(world,ground)

var ball_options = {

  restitution : 1.0

}

  ball = Bodies.circle(200,10,15,ball_options)
  World.add(world,ball)
  
}

function draw() {
  background("black");  
 
  Engine.update(engine)

  rectMode(CENTER)
  fill ("green")
  rect(ground.position.x, ground.position.y,400,20)
  ellipseMode(RADIUS)

  ellipse(ball.position.x,ball.position.y,20,20)
}