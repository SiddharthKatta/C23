const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
function preload()  {
base = loadImage("./assets/base1.png") 
base2 = loadImage("./assets/base2.png")
player = loadImage("./assets/player.png")
computer = loadImage("./assets/player.png")


}

function setup() {
  canvas = createCanvas(1200,600);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
   base = new Base(300,random(450,height-300),180,150);
   base2 = new Base2(800,random(450,height-300),180,150);
   computer = new Computer(285,Base2.body.position.y - 153, 50, 180);
   player = new Player(285,Base.body.position.y - 153, 50, 180);

 }

function draw() {

  background(180);

  Engine.update(engine);

  base.display();

  base2.display();

  player.display();

  computer.display();

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 


   //display Player and computerplayer


}
