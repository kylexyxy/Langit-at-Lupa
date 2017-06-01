helpGame={
	create:function () {
		game.stage.backgroundColor="#ffffff";
		 helpText = game.add.text(200, 100, 'Instruction', {font: '40px serif', fill: 'black'}); 
         help2Text = game.add.text(20, 300, '1. Get all the flying stars to earn points.', {font: '40px serif', fill: 'black'}); 
         help3Text = game.add.text(20, 400, '2. Avoid all the ball fire to enjoy the game.', {font: '35px serif', fill: 'black'}); 

         back = game.add.button(10,10,"back",this.back);
	},
	update:function(){
	},
	back:function(){
   	     game.state.start("menuGame");
   },

}