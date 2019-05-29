const popControl = (state={},action)=>{
	switch(action.type){
		case 'ADD_ORGANISM':
			return Object.assign({},state,{
				[action.location]:action.organism
			});
		default:
			return state;		
	}
}

export default popControl;