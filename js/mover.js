class mover extends yentity {
	constructor(x2, y2, g) {
		super(x2, y2, g);
		this.speed = 5;
		this.dir = 'right';
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
		}
		if (t.x < 0) {
			t.sx(690);
		}
		if (t.y > 490) {
			t.sy(0);
		}
		if (t.y < 0) {
			t.sy(473);
		}
	}
	randD() {
		rnum = 10 * Math.random() + 1;
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
}
