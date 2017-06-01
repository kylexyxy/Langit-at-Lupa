aboutGame={
	 create:function(){
	 	game.stage.backgroundColor="#ffffff";
	 	     devs = game.add.text(260, 80, 'Langit Lupa', {font: '50px serif', fill: 'black'});
	 	     text =game.add.text(35,180, "This game is originated in the Philippines.", {font: '45px serif', fill: 'black'});
             namesText = game.add.text(230, 470, 'Dennis Catubig', {font: '40px serif', fill: 'black'})
             dev = game.add.text(250, 290, 'Created By:', {font: '40px serif', fill: 'black'}); 
            nameText = game.add.text(230, 400, 'Marvin Manuel', {font: '40px serif', fill: 'black'}); 

            back2 = game.add.button(30,30,"back2",this.back);
	 },
	 update:function(){
	 	 
	 },
     back:function(){
      game.state.start("menuGame");
     },
}
 