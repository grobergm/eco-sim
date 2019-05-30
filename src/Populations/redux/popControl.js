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

		default:
			return state;		
	}
}

export default popControl;