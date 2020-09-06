//Create variables here
var dog,dog_img,happyDog,database,foodStock,foodS=0;
var foodObj,feedDog,addFood,fedTime,lastFed;
function preload()
{
  dog_img=loadImage("Dog.png");
  happyDog=loadImage("happydog.png");
}

function setup() {
  database = firebase.database();
	createCanvas(500, 500);
  dog=createSprite(200,300,10,10);
  dog.addImage(dog_img);
  dog.scale=0.1;

  foodObj=new Food();
  foodStock=database.ref('food');
  foodStock.on("value",(data)=>{
    foodS=data.val();
  });
  //function to update food stock and last fed time
  addFood=createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);

  feed=createButton("Feed the dog");
feed.position(700,95);
feed.mousePressed(feedDog);
}


function draw() {  
background(46,139,87);

foodObj.display();
FedTime=database.ref('FeedTime');
FedTime.on("value",function(data){
 lastFed=data.val();
});


  drawSprites();
  //add styles here
  stroke("black");
  textSize(20);
 //text("foodStock:"+ foodS, 200,100);
 
 //text("Note:Press up arrow key to feed dog milk!",100,50);

}
function writeStock(x){
  if(x<=0){
    x=0
  }
  else{x=x-1}
  database.ref('/').update({
    food:x
  })
}

  //function to add food in stock
  function addFoods(){
    foodS++;
    database.ref('/').update({
      food:foodS
    })
  }
  function feedDog(){
    dog.addImage(happyDog);

    foodObj.updateFoodStock(foodS-1);
    database.ref('/').update({
      food:foodS,
      FeedTime:hour()
    })
  }


