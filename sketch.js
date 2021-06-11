
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new Ground(600,680,1200,20);
	stone1 = new Stone(100,100,100,100);
	rubber1 = new Rubber(300,100,30);
	hammer1 = new Hammer(500,100,100,30);
	iron = new Iron(550,100,100,30);
	sand1 = new Sand(410,100,30);
	sand2 = new Sand(420,100,30);
	sand3 = new Sand(430,100,30);
	sand4 = new Sand(440,100,30);
	sand5 = new Sand(450,100,30);
	sand6 = new Sand(460,100,30);
	sand7 = new Sand(470,100,30);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightBlue");
  
  drawSprites();
  ground1.display();
  stone1.display();
  rubber1.display();
  hammer1.display();
  iron.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();

 
}
