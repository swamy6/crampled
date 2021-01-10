
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,surface4,surface3,surface2;
var world;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("yellow")

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	

	engine = Engine.create();
	world = engine.world;
	ball = new Ball(50,30,20);
	
	surface4=createSprite(700,610,30,100);
	surface4.shapeColor = "green";
	surface3=createSprite(780,610,30,100);
	surface3.shapeColor = "green";
	surface2=createSprite(740,650,100,30);
	surface2.shapeColor = "green";



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ball.display();
  drawSprites();
  ball.body.position.x = 0;
	ball.body.position.y = 0;
  KeyPressed();

}
function KeyPressed(){
if (keyCode === UP_ARROW){	
	  Matter.Body.applyForce(ball.body,ball.body.position,{
		  x:85,y:85}
		  );
	console.log('Hello');  
  }	
}



