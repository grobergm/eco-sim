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
			// Should be refactored to higher order function to cut repetition
		case 'SET_GAME_LENGTH':
			return Object.assign({},state,{length:action.days});
		case 'SET_MAP_SIZE':
			return Object.assign({},state,{mapSize:action.mapSize});
		case 'SET_WATER_LEVEL':
			return Object.assign({},state,{waterLevel:action.waterLevel});
		case 'SET_ROCK_LEVEL':
			return Object.assign({},state,{rockLevel:action.rockLevel});
			// Should be own reducer...
		case 'CHANGE_TURN':
			return Object.assign({},state,{turn:state.turn+1})
		case 'CHANGE_DAY':
			return Object.assign({},state,{day:state.day+1,turn:0})
		default: return state
	}
}

export default gameControl;
