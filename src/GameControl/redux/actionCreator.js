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

export const removePlayer=index=>{
	return {type:'REMOVE_PLAYER',index}
}

export const updatePlayer=(index,player,key,value)=>{
	return {
		type:'UPDATE_PLAYER',
		index,
		player:{
			...player,
			[key]:value
		}
	}
}
export const setGameLength=days=>{
	return {type:'SET_GAME_LENGTH',days}
}

export const setMapSize=mapSize=>{
	return {type:'SET_MAP_SIZE',mapSize}
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

export const modifySeed=(amount,playerID)=>{
	return{
		type:'MODIFY_SEED',
		playerID:playerID,
		amount:amount
	}
}

export const selectOrganism=organism=>{
	return{
		type:'SELECT_ORGANISM',
		organism:organism
	}
}