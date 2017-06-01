winGame = {
	create:function(){
     game.stage.backgroundColor="#ffffff";
      gameover = game.add.text(220,270, 'Game Over!',{ font: '80px Serif', fill: 'black' });
       labelhi = game.add.text(300, 170, "Highest Score: " +getScore(),{font: '30px serif', fill: 'black'}); 
      
        restart = game.add.button(350,370,"restart",this.restart);
	},
	update:function(){

	},
	restart:function(){
		 window.location.href=window.location.href;
	}	
}
