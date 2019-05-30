const popControl = (state={},action)=>{
	const stateArray=Object.keys(state)
	switch(action.type){
		case 'ADD_ORGANISM':
			return Object.assign({},state,{
				[action.id]:action.organism
			});
		case 'WATER_UPTAKE':
			return Object.assign({},state,
				{
					[action.id]:{
						...state[action.id],
						water:state[action.id].water+action.water
					}
				}
			)
		case 'ADD_SUGAR':
		return Object.assign({},state,
				{
					[action.id]:{
						...state[action.id],
						sugar:state[action.id].sugar+action.sugar
					}
				}
			)
		default:
			return state;		
	}
}

export default popControl;