import initialState from './initialState';

const phaseControl=(state=initialState,action)=>{
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

export default phaseControl