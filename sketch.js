const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var polygon,sling;
var block1,ground1;

function preload(){
    polygon = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(700,600);

    engine = Engine.create();

    world = engine.world;

    polygon = new Polygon(150,300,40,40);

    sling = new Chain(polygon.body, {x : 100, y : 200});
    ground1 = new Ground(330,420,90,10);

    ground2 = new Ground(530,290,70,10);

    block1 = new Block(300,400,20,30);
    block2 = new Block(320,400,20,30);
    block3 = new Block(340,400,20,30);
    block4 = new Block(360,400,20,30);
    block5 = new Block(310,370,20,30);
    block6 = new Block(330,370,20,30);
    block7 = new Block(350,370,20,30);
    block8 = new Block(320,340,20,30);
    block9 = new Block(340,340,20,30);
    block10 = new Block(330,310,20,30);
    block11 = new Block(510,270,20,30);
    block12 = new Block(530,270,20,30);
    block13 = new Block(550,270,20,30);
    block14 = new Block(520,240,20,30);
    block15 = new Block(540,240,20,30);
    block16 = new Block(530,210,20,30);
}

function draw(){
    background("darkblue");
    polygon.display();

    ground1.display();
    ground2.display();

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

    sling.display();

    drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x : mouseX, y : mouseY})
    
}
    
function mouseReleased(){
   sling.fly();
}