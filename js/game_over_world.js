class game_over_world extends world {
	constructor(name2) {
		super(name2);
		var t = this;

	}

	init() {
		var t = this;
		
		var btn_start_img = loadImage('img/play.png');
		//create start btn
		t.btn_start = new yentity(200,300,btn_start_img);
			
		//set btns hitbox/clicble area
		t.btn_start.sethb_wh(200,30);//set hitbox width height

		//add btns
		t.add(t.btn_start);
		
		//get score
		var game_world = yeng.get_world("game_world");
		t.score = game_world.points;
	} //end init
	
	update() {
		super.update();
		var t = this;
		//if start clicked
		if(t.btn_start.clicked(2))
		{
			t.change_world("game_world",true);
		}

	} //end update
	
	render() {
		super.render();

		fill(255);
		textAlign(CENTER);
		textSize(50);
		text('game over you lose! ', 250 , 100);
		textSize(24);
		text('your score is: '+this.score, 200 , 150);
	}//end render
}
