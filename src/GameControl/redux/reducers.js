import initialState from './initialState';

export const phaseControl=(state=initialState,action)=>{
	switch(action.type){
		case 'GAME_SETUP':
			return Object.assign({},state,{view:'game-setup'});
		case 'GAME_START':
			return Object.assign({},state,{view:'game-start',gameLength:action.gameLength,players:action.players});
		case 'GAME_END':
			return Object.assign({},state,{view:'game-end'});
		default:
			return state;
	}
}

export const turnControl=(state,action)=>{
	switch(action.type){
		case 'CHANGE_TURN':
			return Object.assign({},state,{turn:state.turn+1})
		case 'CHANGE_DAY':
			return Object.assign({},state,{day:state.day+1,turn:0})
	}
}