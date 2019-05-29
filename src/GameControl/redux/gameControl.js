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
		case 'SET_MAP_SIZE':
			return Object.assign({},state,{mapSize:action.mapSize});
			// Should be own reducer...
		case 'MODIFY_SEED':
			const newPlayersSeed=state.players.map(player=>{
				return playerControl(player,action)
			})
			return Object.assign(
				{},
				state,
				{players:newPlayersSeed}
			)
		case 'CHANGE_TURN':
			return Object.assign({},state,{turn:state.turn+1})
		case 'CHANGE_DAY':
			return Object.assign({},state,{day:state.day+1,turn:0});
		default: return state
	}
}

const playerControl=(player,action)=>{
	switch(action.type){
		case 'MODIFY_SEED':
			if (player.id!==action.playerID){
				return player
			}
			return Object.assign({},player,{seed:player.seed+action.amount})
		default:
			return player
	}
}


export default gameControl;
