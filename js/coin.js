class coin extends yentity {
	constructor(x2, y2) {
		super(x2, y2, '');
		var t = this;
		t.type = 'coin';
		t.grafic_type = 'none';
	} //end constructor

	update() {
		var t = this;
		super.update();
	} //end update
	render() {
		super.render();
		//set shape color to white
		this.sprite.shapeColor = color(255, 240, 0);
	}
}
