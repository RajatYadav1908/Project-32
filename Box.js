class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.image=loadImage("blue.png");
    this.visibility=255  
  }
  display(){
    if(this.body.speed<5){
      super.display()
    }
      else{
        this.visibility -= 5; 
        World.remove(world,this.body);
         push();
          tint(255,this.visibility);
              image(this.image,this.body.position.x, this.body.position.y); 
        pop();

      }
    }
    Score()  {
      if(this.visibility < 0 && this.visibility >= -100){
       score++ 
      }
    }

};


