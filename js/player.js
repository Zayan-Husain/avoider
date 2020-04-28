class player extends yentity
{
  constructor(x2,y2,g) 
  {
	  super(x2,y2,g);
	  this.speed = 4;
  }//end constructor
  
  update()
  {
	var t = this;
	super.update();
	t.move();
	  
  }//end update
  
  move()
  {
	var t = this;
	if(keyDown('a')){t.move_by(-t.speed,0)}
	if(keyDown('d')){t.move_by(t.speed,0)}
	if(keyDown('s')){t.move_by(0,t.speed)}
	if(keyDown('w') ){t.move_by(0,-t.speed)}
  }
  
}