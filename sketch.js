const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var blocks=[];
var engine, world;
var BlockHeights=50
function preload() {
//preload the images here
bgImage = loadImage("images/GamingBackground.png");
}

function setup() {
  createCanvas(1500,800);
  // create sprites here
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(950,450,450,10);
  hero = new Hero(400,300,250,100);
  block1 = new Block(800,400,50,50);
  block2 = new Block(800,100,50,50);
  block3 = new Block(900,100,50,50);
  block4 = new Block(900,100,50,50);
  block5 = new Block(900,100,50,50);
  block6 = new Block(900,100,50,50);
  block7 = new Block(900,100,50,50);
  block8 = new Block(900,100,50,50);
  block9 = new Block(900,100,50,50);
  block10 = new Block(900,100,50,50);
  block11 = new Block(800,100,50,50);
  block12 = new Block(800,100,50,50);
  block13 = new Block(800,100,50,50);
  block14 = new Block(1000,100,50,50);
  block15 = new Block(1000,100,50,50);
  block16 = new Block(1000,100,50,50);
  block17 = new Block(1000,100,50,50);
  block18 = new Block(1100,100,50,50);
  block19 = new Block(1100,100,50,50);
  block20 = new Block(1100,100,50,50);

  chain = new Chain(hero.body, { x : 400 , y : 300});

}

function draw() {

  background(bgImage);

  Engine.update(engine);
  hero.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();

  ground.display();

}
function mouseDragged(){
   Matter.Body.setPosition(hero.body , {x : mouseX, y : mouseY});
}
function mouseReleased(){
       chain.fly();
}

function keyPressed(){
 if (keyCode===32 ){
 chain.attach(hero.body);
 }
}   
