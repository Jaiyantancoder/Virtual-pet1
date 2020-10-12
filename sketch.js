//Create variables here
var dog,dogimg;
var happydog;
var database;
var foodS;
var foodstock;

function preload()
{
  //load images here
  dogimg = loadImage("Dog.png");
  happydog = loadImage("happydog.png");
}

function setup() {

//Creating the canvas  
	createCanvas(500, 500);

dog = createSprite(250,250,25,25);
dog.addImage(dogimg);

database = firebase.database();  
foodStock = database.ref('food');
foodStock.on("value",readStock);


}


function draw() {  

//Creating the background
background(46,139,87);

//text to display instructions
text("Note: Press Up arrow key to feed the dog",150,25);

if(keyWentDown(UP_ARROW)){

writeStock(foodS);  
dog.addImage(happydog);

}

//Code to find the coordinates of the canvas
text ("(x:"+mouseX,70,450);
text ("(y:"+mouseY,80,450);

  drawSprites();
  //add styles here

}

//function to read data from db
function readStock(data){
foodS = data.val();
}

//function to read data from db
function writeStock(x){

if(x<=0){
  x=0
}  
else{
x=x-1
}

database.ref('/').update({
  food:x
})

}