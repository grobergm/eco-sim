export const makeGrid=(size,water,rock)=>{
	return {
		type:'MAKE_GRID',
		mapSize:size,
		waterProbability:water,
		rockProbability:rock
	}
}