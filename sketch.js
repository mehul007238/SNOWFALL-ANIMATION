var Engine = Matter.Engine,
World = Matter.World,
Events = Matter.Events,
Bodies = Matter.Bodies;

var ground,groundImg;
var snow = [];

function preload() {
 groundImg = loadImage("snow1.jpg")
}

function setup() {
 createCanvas(800,400);
 engine = Engine.create();
 world = engine.world;

 
 ground = createSprite(400,250,800,800)
 ground.scale = 1.6
 ground.addImage(groundImg)
}

function draw() {
 background("green"); 
 Engine.update(engine);

 ground.display();

 if(frameCount%60===0){
   snow.push(new Snow(random(0,800),0))
 }

 for (var i = 0; i < snow.length; i++) {
   
   snow[i].display(); 
 }
}