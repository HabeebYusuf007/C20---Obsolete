
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var ball2;
var ground2;

function setup()
{
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var ball_options={
    restitution: 0.95,
    frictionAir: 0.01,

  }
  ball = Bodies.circle(100,20,15,ball_options)
  World.add(world,ball)
  ball2 = Bodies.circle(250,10,15,ball_options)
  World.add(world,ball2)

  var ground_options={
    isStatic: true
  }
  ground = Bodies.rectangle(0,392,400,20,ground_options)
  World.add(world,ground)
  ground2 = Bodies.rectangle(200,300,200,10,ground_options)
  World.add(world,ground2)
}

function draw() 
{
  background(51);
 Engine.update(engine);
  ellipse(ball.position.x, ball.position.y, 15,15)
  rect(ground.position.x, ground.position.y, 400,20)
  ellipse(ball2.position.x, ball2.position.y, 15,15)
  rect(ground2.position.x, ground2.position.y, 200,10)
}

