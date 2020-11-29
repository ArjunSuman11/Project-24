
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1;
var dustbin1, dustbin2, dustbin3;
var ground;


function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1 = new Paper(420, 200, 4);
	dustbin1= new Dustbin(1070, 720, 20, 100);
	dustbin2= new Dustbin(850,720, 20, 100);
	dustbin3= new Dustbin(960,760, 200, 20 );

	ground = Bodies.rectangle(width/2, 550, 1200, 10 , {isStatic:true} );
 	World.add(world, ground);
	

	Engine.run(engine);
  
}


function draw() {
	
  background(0);
  rectMode(CENTER);
  paper1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode=== UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x: 85,y:-85});
	}
}

