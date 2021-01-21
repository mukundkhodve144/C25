class Log extends BaseClass{
  constructor(x,y,angle,height){
  super(x,y,angle,20,height);
  this.image = loadImage("sprites/wood2.png");

  Matter.Body.setAngle(this.body,angle);
  }
}