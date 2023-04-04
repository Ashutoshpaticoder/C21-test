const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
let ground;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  // rectMode(CENTER);
  // ellipseMode(RADIUS);

 ground = new Ground(200,380,400,20);
  
}

function draw() 
{
  background(51);
  Engine.update(engine);

  ground.display();

}
 
