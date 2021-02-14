const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var roof,ball1,ball2,ball3,ball4,ball5,ball6,ball7
var line1,line2,line3,line4,line5,line6,line7

function setup(){
    createCanvas(600,600);
    engine = Engine.create();
    world = engine.world;
    
    roof = new Ground(300,200,350,20);
    ball1 = new paper(170,500,50);
    ball2 = new paper(215,500,50);
    ball3 = new paper(260,500,50);
    ball4 = new paper(305,500,50);
    ball5 = new paper(350,500,50);
    ball6 = new paper(395,500,50);
    ball7 = new paper(440,500,50);

    line1 = new Chain(ball1.body,{x:170,y:200})
    line2 = new Chain(ball2.body,{x:215,y:200})
    line3 = new Chain(ball3.body,{x:260,y:200})
    line4 = new Chain(ball4.body,{x:305,y:200})
    line5 = new Chain(ball5.body,{x:350,y:200})
    line6 = new Chain(ball6.body,{x:395,y:200})
    line7 = new Chain(ball7.body,{x:440,y:200})
    
}

function draw(){
    background("gray");
    Engine.update(engine);
 
    roof.display();
    ball1.display();
    ball2.display();
    ball3.display();
    ball4.display();
    ball5.display();
    ball6.display();
    ball7.display();

    line1.display();
    line2.display();
    line3.display();
    line4.display();
    line5.display();
    line6.display();
    line7.display();
}

