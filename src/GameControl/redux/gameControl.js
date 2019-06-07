const initialState={
	day:1,
	turn:0,
	players:[],
}
const gameControl=(state=initialState,action)=>{
	switch(action.type){
		case 'ADD_PLAYER':
			return {
				...state,
				players: playerControl(state.players,action)
			}
		case 'REMOVE_PLAYER':
			return {
				...state,
				players: playerControl(state.players,action)
			}
		case 'UPDATE_PLAYER':
		console.log(action)
			return {
				...state,
				players: playerControl(state.players,action)
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
		case 'CHANGE_TURN':
			return {
				...state,
				turn:state.turn+1
			}
		case 'CHANGE_DAY':
			return {
				...state,
				day:state.day+1,
				turn:0
			}
		default: return state
	}
}

const playerControl=(players,action)=>{
	switch(action.type){
		case 'ADD_PLAYER':
			return players.concat(action.player);
		case 'REMOVE_PLAYER':
			return players.filter((player,index)=> index!==action.index)
		case 'UPDATE_PLAYER':
			return players.map((player,index)=>{
				if (index !==action.index){
					return player;
				}
				return {
					...player,
					...action.player
				}
			})
	}
}


export default gameControl;
