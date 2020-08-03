//variables 
ballX = Math.floor(Math.random() * 300) + 50;
ballY = 40;
ballDia = 55;
ballXspeed = 70;
ballYspeed = 17.5;
ballY2speed = 16.5;
paddleX = 450;
paddleY = 850;
paddleWidth = 150;
paddleHeight = 40;
r = -250;
z = 50;
var textX = 150;
var textY = 400;
var score = 0;
var fr = 100;

function setup() {
  ballX2speed = random(50,55);
  createCanvas(1000, 1000);
  noCursor();
  frameRate(fr);
  let button = createButton('restart');
  button.mousePressed(resetSketch);
}

function draw() {
  //background with transparancy
  background(0,0,35,25); 
  fill(255,255,255);
  noStroke();
  var galaxy = { 
  locationX : random(width),
  locationY : random(height),
  size : random(6,12)} 
  
ellipse(galaxy.locationX ,galaxy.locationY, galaxy.size, galaxy.size)//stars
  
drawBall()
moveBall()
drawPaddle() 
ballCollision()
drawScore()
drawTitle()
}

function drawBall() {
stroke(215,220,5);
strokeWeight(10);
ellipse(ballX,ballY,ballDia,ballDia);
}

function moveBall() {
  ballX += ballXspeed;
  ballY += ballYspeed;
  if(ballX >= width + z || ballX < z) {
ballXspeed = -ballXspeed;
ballXspeed = ballXspeed;
  }
  if(ballY >= height- r || ballY < r ) {
ballYspeed = -ballYspeed;
  }
  if(ballY >= 1050) {
  ballYspeed = 0;
  ballXspeed = 0;
  ballX2speed = 0;
  ballY2speed = 0;
  score = 0
  stroke(215,220,5);
  strokeWeight(20);
  rect(textX,textY,700,350,10);
  
  stroke(5);
  fill(255,255,255);
  textSize(50);
  text("SORRY, YOU'VE FOLDED",textX + 50,textY + 150);
  
  textSize(30);
  strokeWeight(10);
  text("RESTART TO PLAY AGAIN", textX + 150, textY + 250);
  }
  

}

function drawPaddle() {
  background(0,0,35,25);
  stroke(255,255,255);
  fill(0,0,0);
  rect(mouseX,paddleY,paddleWidth,paddleHeight,10);
}


function ballCollision() {
  if ((ballX > mouseX && ballX < mouseX + paddleWidth) &&
      (ballY + (ballDia/2) >= paddleY)) {
    ballXspeed = -ballX2speed;
    ballYspeed = -ballY2speed;
    score += 1;
  }
}
function drawScore() {
  fill(215,220,5);
  stroke(255,255,255);
  textSize(45);
  text("Score: " + score, 10, 40)}

function drawTitle() {
fill(215,220,5);
stroke(5);
textSize(100);
text("SPACE PONG",175,200);}

function resetSketch() {
  ballX = Math.floor(Math.random() * 300) + 50;
  ballY = 40;
  score = 0;
  ballXspeed = 65;
  ballYspeed = 17.5;
  ballX2speed = 42;
  ballY2speed = 20.5;}
