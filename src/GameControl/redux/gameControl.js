const initialState={
	day:0,
	turn:0,
	players:[],
}
const gameControl=(state=initialState,action)=>{
	switch(action.type){
		case 'ADD_PLAYER':
			const newPlayers=state.players.concat(action.player);
			return {
				...state,
				players:newPlayers
			}
		case 'REMOVE_PLAYER':
			const removeIndex=state.players.findIndex(player=>{
				return action.id===player.id
			})
			return {
				...state,
				players:state.players.filter((player,index)=> index!==removeIndex)
			}
		case 'SET_GAME_LENGTH':
			return {
				...state,
				length:action.days
			};
		case 'SET_MAP_SIZE':
			return {
				...state,
				mapSize:action.mapSize
			};
		case 'SELECT_ORGANISM':
			return {
				...state,
				selectOrg:action.organism
			}
		case 'MODIFY_SEED':
			const newPlayersSeed=state.players.map(player=>{
				return playerControl(player,action)
			})
			return {
				...state,
				players:newPlayersSeed
			}
		case 'CHANGE_TURN':
			return {
				...state,
				turn:state.turn+1
			}
		case 'CHANGE_DAY':
			return {
				...state,
				day:state.day+1,turn:0
			}
		default: return state
	}
}

const playerControl=(player,action)=>{
	switch(action.type){
		case 'MODIFY_SEED':
			if (player.id!==action.playerID){
				return player
			}
			return {
				...player,
				seed:player.seed+action.amount
			}
		default:
			return player
	}
}


export default gameControl;
