export const changeView=view=>{
	switch(view){
		case 'setup':
			return {type:'GAME_SETUP'}
		case 'start':
			return {type:'GAME_START'}
		case 'end':
			return {type:'GAME_END'}
		default:
			return {type:'GAME_INTRO'}
	}
}

export const addPlayer=player=>{
	return {type:'ADD_PLAYER',player:player}
}

export const setGameLength=days=>{
	return {type:'SET_GAME_LENGTH',days:days}
}

export const changeTurn=({turn, gameLength, day, players})=>{
	if (turn < players.length) {
		return { type:'CHANGE_TURN' }
	} else if ( day < gameLength){
		return { type:'CHANGE_DAY' }
	} else {
		return { type: 'GAME_END'}
	}
}