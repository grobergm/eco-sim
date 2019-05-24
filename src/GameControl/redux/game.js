import initialState from './initialState';

export const viewControl=(state=initialState,action)=>{
	switch(action.type){
		case 'GAME_SETUP':
			return Object.assign({},state,{gameStatus:'game-setup'});
		case 'GAME_START':
			return Object.assign({},state,{gameControl:{gameStatus:'game-start',gameLength:action.gameLength,players:action.players}});
		case 'GAME_END':
			return Object.assign({},state,{gameStatus:'game-end'});
		default:
			return state;
	}
}

export const turnControl=(state,action)=>{
	switch(action.type){
		case 'CHANGE_TURN':
			return Object.assign({},state,{turn:state.turn+1})
		case 'CHANGE_DAY':
			return Object.assign({},state,{day:state.day+1})
		case 'RESET_TURN':
			return Object.assign({},state,{turn:0})
	}
}