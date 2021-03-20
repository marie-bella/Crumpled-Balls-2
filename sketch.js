
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var paper,dustbin,ground;
var dustbinImg, paperImg;

function preload(){

dustbinImg = loadImage("images/dustbin.png");



}

	
function setup() {
	createCanvas(1600, 700);
    rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	
	ground = new Ground(800,680,1600,20);
	paper = new Paper(200,200,40);

    dustbin = createSprite(1150, 594, 20, 20);
    dustbin.addImage(dustbinImg);
	dustbin.scale = 0.45;

	leftWallBody = new Dustbin(902,520,10,120);
	bottomBody = new Dustbin(962,565,130,10);
	rightWallBody = new Dustbin(1024,505,10,120);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgrey");
  Engine.update(engine);

  console.log(paper);

  paper.display();
  dustbin.display();
  ground.display();

  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85 ,y:-85});
	}
}



