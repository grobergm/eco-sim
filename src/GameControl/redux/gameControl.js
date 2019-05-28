import {addPlayer, setGameLength, changeTurn } from './actionCreator';

const initialState={
	day:0,
	turn:0,
	players:[],
}
const gameControl=(state=initialState,action)=>{
	switch(action.type){
		case 'ADD_PLAYER':
			const newPlayers=state.players.concat(action.player);
			return Object.assign({},state,{players:newPlayers});
		case 'SET_GAME_LENGTH':
			return Object.assign({},state,{length:action.days});
			// Should be own reducer...
		case 'CHANGE_TURN':
			return Object.assign({},state,{turn:state.turn+1})
		case 'CHANGE_DAY':
			return Object.assign({},state,{day:state.day+1,turn:0})
		default: return state
	}
}

export default gameControl;
