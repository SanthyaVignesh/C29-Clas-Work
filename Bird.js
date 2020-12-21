class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.positisuper.display();
    if(this.body.position.y >= height -10 ){
      push();
      //World.remove(world,this.body)
      pop();
      Matter.Body.setPosition(this.body , {x: this.body.position.x , y: this.body.position });
  }
  else{
    super.display();
    
  }
  }
}
