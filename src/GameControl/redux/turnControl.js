const turnControl=(state={},action)=>{
	switch(action.type){
		case 'CHANGE_TURN':
			return Object.assign({},state,{turn:state.turn+1})
		case 'CHANGE_DAY':
			return Object.assign({},state,{day:state.day+1,turn:0})
		default:
			return state;
	}
}

export default turnControl