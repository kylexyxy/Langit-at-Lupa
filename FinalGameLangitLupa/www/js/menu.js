menuGame={
	create:function(){
		     

		      bg_menu = game.add.sprite(0,0,"bg_menu");
             // bg_menu.scale .x =1; 
              // bg_menu.scale .y =1.3; 
 		     laro = game.add.button(560,500,"laro",this.laro);
		     about = game.add.button(630,500,"about",this.about);
             help = game.add.button(700,500,"help",this.help);



	},
	update:function(){
		   
	},
	laro:function(){
		game.state.start("playGame");
	},
	about:function(){
     game.state.start("aboutGame");
	},
	help:function(){
       game.state.start("helpGame");
	},

}

