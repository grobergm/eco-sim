const popControl = (state={},action)=>{
	switch(action.type){
		case 'ADD_ORGANISM':
			let newState=Object.assign({},state);
			newState[action.organism.id]={
				location:action.location,
				player:action.player,
				organism:action.organism,
			}
				return newState
		default:
			return state;		
	}
}

export default popControl;