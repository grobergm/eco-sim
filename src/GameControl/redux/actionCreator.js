export const gameSetup=()=>{
	return {type:'GAME_SETUP'}
}

export const gameStart=(gameLength,players)=>{
	return {
		type:'GAME_START',
		gameLength:gameLength,
		players:players
	}
}

export const gameEnd=()=>{
	return {type:'GAME_END'}
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