const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var paper,ground,trash2;
var trashObj,paperObj;

function preload(){
      paperObj= loadImage("sprites/paper.png");
     // trashObj = loadImage("sprites/dustbin.png");
}

function setup(){
    var canvas = createCanvas(800,700);
    engine = Engine.create();
    world = engine.world;
    paper = new Paper(25,100,120);
    ground = new Ground(400,550,800,20);
    trash2 = new Trashbin(570,475,20,150);
    trash3 = new Trashbin(720,475,20,150);
    trashObj = new Trashbin( 10,10,1,1)
    
  }

function draw(){
    background(10000);
    Engine.update(engine);
    ground.display();
    paper.display();
    trash2.display();
    trash3.display();
    trashObj.display();
    keyPressed();

}


function keyPressed() {
	if(keyCode === UP_ARROW){
        Matter.Body.applyForce(paper.body,paper.body.position,{x:50,y:-100})
    }
    
    if(keyCode === DOWN_ARROW){
        Matter.Body.applyForce(paper.body,paper.body.position,{x:0,y:0})
    }
}