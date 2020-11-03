var paperball, ground
var paperbasketpart1, paperbasketpart2, paperbasketpart3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

/*function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}*/

function setup() {
	createCanvas(1600, 800);
	rectMode(CENTER);
	
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(222)
	engine = Engine.create();
	world = engine.world;
	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:true});
	//World.add(world, packageBody);
	ground = Bodies.rectangle(width/2, 650, width, 20 , {isStatic:true} );
 	World.add(world, ground);
  
  
  //paperball = createSprite
  paperball = new Paper(100, 550, 50)
  paperbasketpart1 = new Paperbasket(1200, 650-15, 10, 100, {isStatic:true})
  //Matter.Body.setAngle(paperbasketpart1, angle)
	paperbasketpart2 = new Paperbasket(1300, 697.5-50, 220, 10)  
  paperbasketpart3 = new Paperbasket(1400, 650-15, 10, 100)

  var render = Render.create({ 
    element: document.body, 
    engine: engine, options: 
    { width: 1600, 
      height: 800, 
      wireframes: false } });
  
   Engine.run(engine);

   Render.run(render)
}


function draw() {
  
  
  
  rectMode(CENTER);
  background(100);
  
  drawSprites();
  
  paperbasketpart1.display()
  paperbasketpart2.display()
  paperbasketpart3.display()
  
  paperball.display()
  
}

function keyPressed() {
 if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(paperball.body, paperball.body.position, {x:150, y:-150});
	
  }
}



