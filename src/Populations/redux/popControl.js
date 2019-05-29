const popControl = (state={},action)=>{
	const stateArray=Object.keys(state)
	switch(action.type){
		case 'ADD_ORGANISM':
			return Object.assign({},state,{
				[action.location]:action.organism
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

const metabolismControl = (state,action,key)=>{
	switch(action.type){
		case 'WATER_UPTAKE':
			if(state[key].id===action.id){
				Object.assign(
					{},
					state,
					{
						[key]:{
						...state[key],
						water:state[key].water+action.water
					}
					}
				)
			}
			
		default :
			return state
	}
	
}

export default popControl;