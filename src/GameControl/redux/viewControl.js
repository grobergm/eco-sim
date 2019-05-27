const viewControl=(state='game-intro',action)=>{
	switch(action.type){
		case 'GAME_SETUP':
			return'game-setup';	
		case 'GAME_START':
			return 'game-start';
		case 'GAME_END':
			return 'game-end';
		default:
			return state;
	}
}

export default viewControl