class game_world extends world
{
	constructor(name2) 
	{
		super(name2)
	}
	
	init()
	{
		var ph = loadImage("img/ph.jpg");
		

		
		var yplayer = new player(200,300,"");
		yplayer.grafic_type = "none"
		yplayer.debug = true;
		
		
		this.add(yplayer);
		this.create_movers();
		
	}
	
	create_movers()
	{
		for(var i=0 ; i<5;i++)
		{
			var ymover = new mover(100,100*i,"");
			ymover.debug = true;
			ymover.grafic_type = "none";
			this.add(ymover);
		}
	}//end create_movers
	
}