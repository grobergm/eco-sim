const popControl = (state={},action)=>{
	const stateArray=Object.keys(state)
	switch(action.type){
		case 'ADD_ORGANISM':
			return Object.assign({},state,{
				[action.id]:action.organism
			});
		case 'REMOVE_ORGANISM':
			return {
				...state,
				[action.id]:null
			}		
		case 'UPDATE_ORGANISM':
			return {
				...state,
				[action.id]:{
					...state[action.id],
					[action.key]:action.value
				}
			}
		default:
			return state;		
	}
}

export default popControl;