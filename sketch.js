const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var log1,log2,log3,log4;
var bird;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);

    bird = new Bird(100,100);

    box1 = new Box(800,300);
    box2 = new Box(1000,300);

    pig1 = new Pig(900,300);
    log1 = new Log(900,200,300,PI/2);

    box3 = new Box(800,180);
    box4 = new Box(1000,180);

    pig2 = new Pig(900,190);
    log2 = new Log(900,160,300,PI/2);

    box5 = new Box(900,140);
    log3 = new Log(860,140,150,PI/7);
    log4 = new Log(940,140,150,-PI/7);
}

function draw(){
    background(0);
    Engine.update(engine);
    
    ground.display();
    bird.display();
    box1.display();
    box2.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    
}