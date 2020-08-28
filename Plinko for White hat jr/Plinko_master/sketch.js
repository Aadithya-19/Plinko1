const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var division = [];

var divisionHeight = 300;

function setup() {
  createCanvas(480, 800);

  

  engine = Engine.create();

  world = engine.world;

  Ground = new ground(240, 780, 480, 10);

  division = new Division(0, 635, 5, 300);
  division1 = new Division(80, 635, 5, 300);
  division2 = new Division(160, 635, 5, 300);
  division3 = new Division(240, 635, 5, 300);
  division4 = new Division(320, 635, 5, 300);
  division5 = new Division(400, 635, 5, 300);
  division6 = new Division(480, 635, 5, 300);

  // For top part 9

  plinko1 = new Plinko(30, 100, 9);
  plinko2 = new Plinko(80, 100, 9);
  plinko3 = new Plinko(130, 100, 9);
  plinko4 = new Plinko(180, 100, 9);
  plinko5 = new Plinko(230, 100, 9);
  plinko6 = new Plinko(280, 100, 9);
  plinko7 = new Plinko(330, 100, 9);
  plinko8 = new Plinko(380, 100, 9);
  plinko9 = new Plinko(430, 100, 9);

  // For top part 10

  plinko10 = new Plinko(10, 200, 9);
  plinko11 = new Plinko(60, 200, 9);
  plinko12 = new Plinko(110, 200, 9);
  plinko13 = new Plinko(160, 200, 9);
  plinko14 = new Plinko(210, 200, 9);
  plinko15 = new Plinko(260, 200, 9);
  plinko16 = new Plinko(310, 200, 9);
  plinko17 = new Plinko(360, 200, 9);
  plinko18 = new Plinko(410, 200, 9);
  plinko19 = new Plinko(460, 200, 9);
  plinko20 = new Plinko(510, 200, 9);


  // For second part 9

  plinko21 = new Plinko(30, 300, 9);
  plinko22 = new Plinko(80, 300, 9);
  plinko23 = new Plinko(130, 300, 9);
  plinko24 = new Plinko(180, 300, 9);
  plinko25 = new Plinko(230, 300, 9);
  plinko26 = new Plinko(280, 300, 9);
  plinko27 = new Plinko(330, 300, 9);
  plinko28 = new Plinko(380, 300, 9);
  plinko29 = new Plinko(430, 300, 9);

  // For second part 10

  plinko30 = new Plinko(10, 400, 9);
  plinko31 = new Plinko(60, 400, 9);
  plinko32 = new Plinko(110, 400, 9);
  plinko33 = new Plinko(160, 400, 9);
  plinko34 = new Plinko(210, 400, 9);
  plinko35 = new Plinko(260, 400, 9);
  plinko36 = new Plinko(310, 400, 9);
  plinko37 = new Plinko(360, 400, 9);
  plinko38 = new Plinko(410, 400, 9);
  plinko39 = new Plinko(460, 400, 9);
  plinko40 = new Plinko(510, 400, 9);
  Engine.run(engine);
}

function draw() {
  background(0);

  Engine.update(engine);
  Ground.display();

  for(var j = 0; j < particles.length; j++){

    particles[j].display();

  }
  for(var k = 0; k < division.length; k++){

    division[k].display();

  }
  if (frameCount % 60 === 0){

    particles.push(new Particle(random(width/2 - 10, width/2 + 10), 10, 10));

  }


  plinko1.display();
  plinko2.display();
  plinko3.display();
  plinko4.display();
  plinko5.display();
  plinko6.display();
  plinko7.display();
  plinko8.display();
  plinko9.display();

  plinko10.display();
  plinko11.display();
  plinko12.display();
  plinko13.display();
  plinko14.display();
  plinko15.display();
  plinko16.display();
  plinko17.display();
  plinko18.display();
  plinko19.display();
  plinko20.display();

  plinko21.display();
  plinko22.display();
  plinko23.display();
  plinko24.display();
  plinko25.display();
  plinko26.display();
  plinko27.display();
  plinko28.display();
  plinko29.display();

  plinko30.display();
  plinko31.display();
  plinko32.display();
  plinko33.display();
  plinko34.display();
  plinko35.display();
  plinko36.display();
  plinko37.display();
  plinko38.display();
  plinko39.display();
  plinko40.display();

  division.display();
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();




  drawSprites();

}

function mousePressed() {
  if (gameState !== "end") {
    count++;
    particle = new Particle(mouseX, 10, 10, 10)
  }
}