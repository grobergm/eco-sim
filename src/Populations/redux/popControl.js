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
		case 'GROW_LEAF':
			return Object.assign({},state,
					{
						[action.id]:{
							...state[action.id],
							leaves:state[action.id].leaves+1,
							sugar:state[action.id].sugar-(state[action.id].leaves*2)
						}
					}
				)
			case 'GROW_ROOT':
			return Object.assign({},state,
					{
						[action.id]:{
							...state[action.id],
							roots:state[action.id].roots+1,
							sugar:state[action.id].sugar-(state[action.id].roots*2)
						}
					}
				)
		default:
			return state;		
	}
}

export default popControl;