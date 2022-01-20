var cat, mouse, fundo, ImagemDofundo, mouseDepoisdogatorelar, mouseParado, catParado, catMovendo, catDeitado, mouseProvocando;

function preload() {
    //load the images here
    mouseDepoisdogatorelar = LoadAnimation("images/mouse4.png");
    mouseProvocando = LoadAnimation("images/mouse2.png", "images/mouse3.png");
    mouseParado = LoadAnimation("images/mouse1.png");
    catParado = LoadAnimation("images/cat4.png");
    catMovendo = LoadAnimation("images/cat2.png","images/cat3.png");
    catDeitado = LoadAnimation("images/cat1.png");
    ImagemDofundo = LoadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(0,0,0,0);
    cat.addAnimation("running", catMovendo);
    cat.scale = 0.2;

    mouse = createSprite(0,0,0,0);
    mouse.addAnimation("provocando", mouseProvocando );
    mouse.scale = 0.2;

}

function draw() {

    background(ImagemDofundo);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < cat.width /2 - mouse.width /2){
        cat.velocityX=0
        cat.addAnimation("efetivoparalisado", catParado)
        cat.changeAnimation("efetivoparalisado", catParado)
        mouse.addAnimation("efetisadoparalisado", mouseParado)
        mouse.changeAnimation("efetisadoparalisado", mouseParado)
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
    cat.velocityX=-5
    cat.addAnimation("movendo", catMovendo)
    cat.changeAnimation("movendo", catMovendo)

    mouse.addAnimation("movendinho", mouseMovendo)
    mouse.changeAnimation("movendinho", mouseMovendo)
}

}
