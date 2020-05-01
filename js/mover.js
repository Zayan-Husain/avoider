class mover extends yentity {
	constructor(x2, y2, g) {
		super(x2, y2, g);
		var t = this;
		t.speed = 5;
		t.dir = 'right';
		t.rand_dir();
		t.type = 'mover';
	} //end constructor

	update() {
		var t = this;
		super.update();

		t.move();
	} //end update
	move() {
		var t = this;
		if (t.dir == 'right') {
			t.move_by(t.speed, 0);
		}
		if (t.dir == 'left') {
			t.move_by(-t.speed, 0);
		}
		if (t.dir == 'up') {
			t.move_by(0, -t.speed);
		}
		if (t.dir == 'down') {
			t.move_by(0, t.speed);
		}
		if (t.x > 690) {
			t.sx(0);
			t.sy(t.rand(490));
		}
		if (t.x < 0) {
			t.sx(690);
			t.sy(t.rand(490));
		}
		if (t.y > 490) {
			t.sy(0);
			t.sx(t.rand(690));
		}
		if (t.y < 0) {
			t.sy(473);
			t.sx(t.rand(690));
		}
	}
	rand_dir() {
		var rnum = 10 * Math.random() + 1;
		if (rnum < 2.5) {
			this.dir = 'left';
		}
		if (rnum > 2.5) {
			this.dir = 'right';
		}
		if (rnum > 5) {
			this.dir = 'up';
		}
		if (rnum > 7.5) {
			this.dir = 'down';
		}
	} //end randD
	isMine() {
		var t = this;
		t.speed = 0;
		//set to random pos
		var rx = t.rand(t.world.sw);//sw = screen width sh = screen height
		var ry = t.rand(t.world.sh);
		t.sx(rx);
		t.sy(ry);
		//get player
		var player = t.get_by_type("player")[0];
		//get distance from player
		var a = player.x1 - t.x;
		var b = player.y - t.y;
		var dist = Math.sqrt( a*a + b*b );
		//make sure it wont spawn on player or too close
		while(dist<30)
		{
			//set to random pos
			var rx = t.rand(t.world.sw);
			var ry = t.rand(t.world.sh);
			t.sx(rx);
			t.sy(ry);
		}
	}
}
