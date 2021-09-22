var girlImg, girl;
var background1, backgroundImg;
var stump, stumpImg, stumpGroup; 
var gameState = "play";
var invisibleground;

function preload(){
girlImg = loadImage("imageonline-co-transparentimage.jpg")
backgroundImg = loadImage("backdrop.jpg");
stumpImg = loadImage("tree stump.png");
}

function setup() {
createCanvas(600,600);

background1 = createSprite(300,300);
background1.addImage("background", backgroundImg);
background1.scale = 3;
background1.velocityX = -2

girl = createSprite(500,200,40,40);
girl.addImage("girl",girlImg);
girl.scale = .7;

invisibleground = createSprite(300,499,600,1);
invisibleground.visible = false;

stumpGroup = new Group();
}

function draw() {
  background(200)
  
  girl.collide(invisibleground);
  if(gameState == "play"){
    spawnStump();

    if(background1.x < 300){
      background1.x = 380;
    }

    if(keyDown("space")){
      girl.velocityY = -10
    }
    girl.velocityY = girl.velocityY + .8

    if(stumpGroup.isTouching(girl)){
       gameState = "end"
    }
  }

  if(gameState == "end"){
    textSize(50);
    fill("red")
    stroke("black");
    text("GAME OVER",150,300);
    girl.VelocityX = 0;
    background1.velocityX = 0;
    stump.lifetime = -1;

  }

  drawSprites();
}

function spawnStump(){
  if(frameCount%90 == 0){
    stump = createSprite(300,300);
    stump.addImage("stump", stumpImg)
    stump.x = Math.round(random(100,500));
    stump.velocityX = -2;
    stump.lifetime = 600;
    stump.setCollider = 20;
    stumpGroup.add(stump);
  }
}