
var monkey , monkeyRunning
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground;
function preload(){
  
  
  monkeyRunning =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}


function draw() {
createCanvas(400,400);
  background(220);
drawSprites();
ground.velocityX = -3;
  text("survival time: "+ score, 300,30);
    score = score + Math.round(getFrameRate()/60);
 if (ground.x < 200){
      ground.x = ground.width/2;
    }
  if(keyDown("space")&& monkey.y >= 310) {
        monkey.velocityY = -12;
    }
    
monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground); 
food();
  obs();
}
function setup() {
 monkey = createSprite(30,340,30,30); 
 //monkey.addImage(monkeyRunning);
ground = createSprite(200,365,400,10);
score = 0;


  

}
function food(){
  var posY = Math.round(random(200,290));

 if (frameCount % 80 === 0) {
   banana = createSprite(400,posY,10,10);
   banana.addImage(bananaImage);
   banana.scale = 0.1;
   banana.velocityX = -4;
   banana.lifetime = 400;
 }
  
}

function obs(){
 if(frameCount % 300 === 0) {
   obstacle = createSprite(400,342,10,10);
   obstacle.addImage(obstacleImage);
   obstacle.scale = 0.1;
   obstacle.velocityX = -3;
 }
}




