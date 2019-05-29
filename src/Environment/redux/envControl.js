
const envControl = (state={},action)=>{
	let newGrid={};
	const substrateGen=()=>{
		if (Math.random()<=action.waterProbability){
			return 'water'
		} else if(Math.random()<=action.rockProbability){
			return 'rock'
		} else {
			return 'soil';
		}
	}
	switch(action.type){
		case 'MAKE_GRID':
			for (var col=0;col<action.mapSize;col++){
				for (var row=0;row<action.mapSize;row++){
					newGrid[`X${row}Y${col}`]={
						substrate: substrateGen(),
					};
				}
			}
			return newGrid
		default:
			return state;
	}
}



export default envControl;