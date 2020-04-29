class player extends yentity {
	constructor(x2, y2, g) {
		super(x2, y2, g);
		var t = this;
		t.speed = 4;
		t.type = 'player';
	} //end constructor

	update() {
		var t = this;
		super.update();
		t.move();
		t.collideCheck();
	} //end update

	move() {
		var t = this;
		if (keyDown('a')) {
			t.move_by(-t.speed, 0);
		}
		if (keyDown('d')) {
			t.move_by(t.speed, 0);
		}
		if (keyDown('s')) {
			t.move_by(0, t.speed);
		}
		if (keyDown('w')) {
			t.move_by(0, -t.speed);
		}
	} //end move
	collideCheck() {
		var t = this;
		if (t.hit_test('mover', 0, 0)) {
			console.log('Hit Mover');
			//go to game over world
			t.world.change_world("game_over",true);
		}
	}
}
// var t = this;
