var yscreen = { w: 640, h: 480 };
//init engine
var yeng = new yengine();

var tste, tste2;
var current_world;

function setup() {
	createCanvas(yscreen.w, yscreen.h);
	frameRate(60);

	var ph = loadImage('img/ph.jpg');

	//create worlds
	var ygame_world = new game_world('game_world');
	yeng.add_world(ygame_world);

	//set current world
	yeng.set_c_world('game_world');
}

function draw() {
	//clear screen
	background(0); //blak bg
	drawSprites(); //p5.play render

	//update render current world
	current_world = yeng.get_c_world();
	current_world.update();
	current_world.render();

	///old test/////
	/*	
	tste.update();
	tste.render();
	
	tste2.update();
	tste2.render();
	
	tste2.move_by(5,0);
	
	//if offscean to the right set x to 10
	if(tste2.x>yscreen.w){tste2.sx(10);}
	//rotate test
	tste2.rot+=0.1;
	//test collision detection
	console.log("hit test: "+tste.hit_test(tste2,0,0));
	*/
}
