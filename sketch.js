//Create variables here
var dog;
var happyDog;
var database;
var foodS;
var foodStock;

function preload()
{
  //load images here
  image = loadImage("images/dogImg.png");
  image = loadImage("images/happyDog.png");
}

function setup() {
  createCanvas(500, 500);
  dog = createSprite(10, 10, 200, 200);
  dog.addImage("images/dogImg.png");

  firebase.database = database;
  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
  
}


function draw() {  
  background(46, 139, 87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage("images/happyDog.png")
  }

  drawSprites();
  //add styles here
  textSize(20);
  fill("red");
  stroke("red");
}

//Function to read values from DB
function readStock(data){
  foodS = data.val();
}
function writeStock(x){
  if(x <= 0){
    x = 0;
  }else{
    x = x-1;
  }

  database.ref('/').update({
    Food: x
  })
}





