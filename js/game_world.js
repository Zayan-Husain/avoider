class game_world extends world {
	constructor(name2) {
		super(name2);
		var t = this;
		t.points = 0;
		t.numberOfMovers = 0;
		t.maxNumberOfMovers = 99;
	}

	init() {
		var t = this;
		//reset all
		t.entitys = [];
		t.points = 0;
		t.numberOfMovers = 0;
		//end reset
		var ph = loadImage('img/ph.jpg');
        
		var yplayer = new player(200, 300, '');
		yplayer.grafic_type = 'none';
		yplayer.debug = true;

		t.add(yplayer);
		t.create_movers(1);
	} //end init

	create_movers(number) {
		var t = this;
		if (t.numberOfMovers > t.maxNumberOfMovers) {
			return;
		}
		for (var i = 0; i < number; i++) {
			var ymover = new mover(100, 100, '');
			ymover.debug = true;
			ymover.grafic_type = 'none';
			t.add(ymover);
			t.numberOfMovers++;
		}
	} //end create_movers
	render() {
		var t = this;
		super.render();
		fill(255);
		textAlign(CENTER);
		text('Score: ' + t.points, 640 / 2, 20);
	} //end render
	update() {
		super.update();
		var t = this;
		t.points++;
		this.gameProgression();
	} //end update
	gameProgression() {
		var p = this.points;
		if (p == 100) {
			this.create_movers(1);
		}
		if (p == 500) {
			this.create_movers(1);
		}
		if (p == 1000) {
			this.create_movers(1);
			this.create_mine();
		}
		if (p == 1700) {
			this.create_movers(3);
		}
		if (p == 1900) {
			this.create_movers(4);
		}
		if (p == 4444) {
			this.create_movers(9);
		}
	} //end game progression
	create_mine() {
		var t = this;
		var mine = new mover();
		mine.grafic_type = 'none';
		mine.debug = true;
		t.add(mine);
		mine.isMine();
	}
}
