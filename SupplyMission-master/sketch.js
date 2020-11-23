var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var stick1,stick2,stick3,stick1body,stick2body,stick3body;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;
function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2,height-35,width,10);
	groundSprite.shapeColor=rgb(255);

	stick1=createSprite(width/2,height-50,200,20);
	stick1.shapeColor="red";

	stick2=createSprite(300,height-90,20,100);
	stick2.shapeColor="red";

	stick3=createSprite(500,height-90,20,100);
	stick3.shapeColor="red";




	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.2, isStatic:true});
	World.add(world, packageBody);
	
	stick1body=Bodies.rectangle(width/2,height-50,200,20,{isStatic:true});
	World.add(world,stick1body);

	stick2body=Bodies.rectangle(300,height-90,20,100,{isStatic:true});
	World.add(world,stick2body);

	stick3body=Bodies.rectangle(500,height-90,20,100,{isStatic:true});
	World.add(world,stick3body);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	ground.shapeColor="white";
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x; 
  packageSprite.y= packageBody.position.y ;
  keyPressed();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
       Matter.Body.setStatic(packageBody,false);
    
  }
}



