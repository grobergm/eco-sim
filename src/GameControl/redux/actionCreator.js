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
	return {type:'ADD_PLAYER',player}
}

export const setGameLength=days=>{
	return {type:'SET_GAME_LENGTH',days}
}

export const setMapSize=mapSize=>{
	return {type:'SET_MAP_SIZE',mapSize}
}

export const setWaterLevel=waterLevel=>{
	return {type:'SET_WATER_LEVEL',waterLevel}
}

export const setRockLevel=rockLevel=>{
	return {type:'SET_ROCK_LEVEL',rockLevel}
}


export const changeTurn=turnCondition=>{
	switch(turnCondition){
		case 'lastPlayer':
			return {type:'CHANGE_DAY'}
		case 'lastTurn':
			return {type:'GAME_END'}
		default:
			return {type:'CHANGE_TURN'}
	}
}