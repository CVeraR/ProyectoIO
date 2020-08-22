var socket;

var x = 0;
var y = 50;
var speedX = 0;
var speedY = 0;

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

    
}

function draw()
{
    createCanvas(windowWidth, windowHeight);
    background(51,51,255);

    translate(width/2 - x, height/2 - y);

    fill(51);
    rect(0,0,600,600);

    fill(255,50,50);
    beginShape();
    vertex(x + 0,y + 0);
    vertex(x + (-30),y + 90);
    vertex(x + 0, y + 75);
    vertex(x + 30, y + 90);
    endShape(CLOSE);

    x = x + speedX;
    y = y + speedY;
}

function keyPressed() 
{
  if(key == "w")
  {
    speedY = -1;
  }
  if(key == "s")
  {
    speedY = 1; 
  }
  if(key == "a")
  {
    speedX = -1; 
  }
  if(key == "d")
  {
    speedX = 1;  
  }
}

function keyReleased() 
{
  if(key == "w")
  {
    speedY = 0;
  }
  if(key == "s")
  {
    speedY = 0;
  }
  if(key == "d")
  {
    speedX = 0;
  }
  if(key == "a")
  {
    speedX = 0;
  }
}
