var rider, riderImg;
var rockImg;
var tallGrass, tallGrassImg;
var ground;
var bg, bgImg;
var barrier, barrierImg;
var bird, birdImg;

function preload() {
  riderImg = loadImage("assets/rider.png")
  rockImg = loadImage("assets/rock.png")
  tallGrassImg = loadImage("assets/tall_grass.png")
  barrierImg = loadImage("assets/barrier.png")
  bgImg = loadImage("assets/bg_grassland.png")
  birdImg = loadImage("assets/bird.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  rider = createSprite(width / 2 - 570, height / 2 + 200, 50, 50);
  rider.addImage(riderImg);
  rider.scale = 0.5;

  ground = createSprite(width / 2, height / 2 + 340, windowWidth + 500, 43)
  ground.visible = false;;
  ground.velocityX = -5;

}

function draw() {
  background(bgImg);

  if (ground.x <= 0) {
    ground.x = width / 2;
  }

  if (keyIsDown(UP_ARROW)) {
    rider.velocityY = -15
  }
  rider.velocityY = rider.velocityY + 1;

  rider.collide(ground);

  spawnObstacles();
  spawnBirds();
  spawnGrass();

  if (rider.y < 100) {
    rider.y = 120
  }

  drawSprites();
}

function spawnObstacles() {
  if (frameCount % 250 == 0) {
    barrier = createSprite(width, height - 100);
    barrier.addImage(barrierImg)
    barrier.scale = 0.4;
    barrier.velocityX = -5;
    barrier.y = random(height / 2 + 100, height - 100)

    var x = Math.round(random(1, 2));
    if (x == 1) {
      barrier.addImage(barrierImg);
    }
    else {
      barrier.addImage(rockImg);
    }
  }
}

function spawnBirds() {
  if (frameCount % 170 == 0) {
    bird = createSprite(width, random(30, 150));
    bird.addImage(birdImg);
    bird.velocityX = -6;
    bird.scale = 0.2;
  }
}

function spawnGrass() {
  if (frameCount % 300 == 0) {
    tallGrass = createSprite(width, random(height / 2 + 100, height - 100))
    tallGrass.addImage(tallGrassImg);
    tallGrass.velocityX = -10;
    tallGrass.scale = 0.4
  }
}