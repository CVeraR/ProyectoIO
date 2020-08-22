var socket;
var playerNum1;
var playerNum2;

function preload()
{

}

function setup()
{
    socket = io();
    socket.emit('message', 'Hello I am Fake Chris connecting to your server');
    socket.on('messageFromServer', function(data)
    {
        console.log(data);
    });

    playerNum1 = new Player('FakeCris',0,50);


    playerNum2 = new Player('FakeCris2',40,110);

    createCanvas(windowWidth, windowHeight);
    
    
}

function draw()
{
    
    background(51,51,255);

    translate(width/2 - playerNum1.x, height/2 - playerNum1.y);

    fill(51);
    rect(0,0,600,600);
    
    playerNum1.draw();
    playerNum2.draw();

}

function keyPressed() 
{
  if(key == "w")
  {
    playerNum1.speedY = -5;
  }
  if(key == "s")
  {
    playerNum1.speedY = 5; 
  }
  if(key == "a")
  {
    playerNum1.speedX = -5; 
  }
  if(key == "d")
  {
    playerNum1.speedX = 5;  
  }
}

function keyReleased() 
{
  if(key == "w")
  {
    playerNum1.speedY = 0;
  }
  if(key == "s")
  {
    playerNum1.speedY = 0;
  }
  if(key == "d")
  {
    playerNum1.speedX = 0;
  }
  if(key == "a")
  {
    playerNum1.speedX = 0;
  }
}

var Player = function(name, x, y)
{
  this.name = name;
  this.x = x;
  this.y = y;
  this.speedX = 0;
  this.speedY = 0;

  this.draw = function()
  {
    

    fill(255,50,50);
    beginShape();
    vertex(this.x + 0,this.y + 0);
    vertex(this.x + (-30),this.y + 90);
    vertex(this.x + 0, this.y + 75);
    vertex(this.x + 30, this.y + 90);
    endShape(CLOSE);

    this.x = this.x + this.speedX;
    this.y = this.y + this.speedY; 
  }

  return this;
}