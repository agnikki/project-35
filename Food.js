class Food{
    constructor(){
        milk_img=loadImage("Milk.png");
        var foodStock,lastFed;
        foodStock=20}

       getFoodStock(){
        var getFoodStockRef=database.ref('food');
        getFoodStockRef.on("value",(data)=>{
            getFoodStock=data.val();
        })
       }
       updateFoodStock(foodStock){
           database.ref('/').update({
              foodStock:food 
           })
       }
       deductFood(){
           var deductFoodRef= database.ref('food');
           deductFoodRef.on("value",(data)=>{
            deductFoodRef=data.val();
           })
       }
   
        display(){
            var x=80,y=100;

            imageMode(CENTER);
            Image(this.image,720,220,70,70);
            if (this.foodStock!=0){
                for(var i=0,i<this.foodStock;i++){
                    if(i%10==0){
                        x=80;
                        y=y+50                
                     }
                     image(this.image,x,y,50,50);
                     x=x+30
                }
            }
            fill(255,255,554);
            textSize(15);
            if(lastFed>=12){
                text("Last Feed: "+ lastFed%12 + "PM", 350,30);
            }else if(lastFed==0){
                text("Last Feed : 12 AM",350,30)
            }else{
                text("Last Feed : "+ lastFed + "AM", 350,30);
            }
        }
}
  
