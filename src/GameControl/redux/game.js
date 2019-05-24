import initialState from './initialState';

const game=(state=initialState,action)=>{
	switch(action.type){
		case 'PRE_GAME':
			return Object.assign({},state,{gameStatus:'pre-game'});
		case 'START_GAME':
			return Object.assign({},state,{gameStatus:'playing'});
		case 'GAME_OVER':
			return Object.assign({},state,{gameStatus:'game-over'});
		default:
			return state;
	}
}

export default game;