const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var world, engine;
var pendulum1, pendulum2, pendulum3, pendulum4, pendulum5;
var sling1, sling2, sling3, sling4, sling5;

function setup() {
  canvas = createCanvas(1000,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(460,200, 280,20);

  pendulum1 = new Pendulum(340, 450,30);
  pendulum2 = new Pendulum(400, 450,30);
  pendulum3 = new Pendulum(460, 450,30);
  pendulum4 = new Pendulum(520, 450,30);
  pendulum5 = new Pendulum(580, 450,30);

  sling1 = new Sling(pendulum1.body, { x: 340, y: 200 });
  sling2 = new Sling(pendulum2.body, { x: 400, y: 200 });
  sling3 = new Sling(pendulum3.body, { x: 460, y: 200 });
  sling4 = new Sling(pendulum4.body, { x: 520, y: 200 });
  sling5 = new Sling(pendulum5.body, { x: 580, y: 200 });
}

function draw() {
  background(220);
  Engine.update(engine);

  ground.display();

  pendulum1.display();
  pendulum2.display();
  pendulum3.display();
  pendulum4.display();
  pendulum5.display();

  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();

}

function keyPressed() {
	if (keyCode === UP_ARROW) {
   
	   Body.applyForce(pendulum1.body,pendulum1.body.position,{x:-0.1, y:0});
   
	 }
   }
