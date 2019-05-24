import initialState from './initialState';

const game=(state=initialState,action)=>{
	switch(action.type){
		case 'PLAYING':
			return Object.assign({},state,{gameStatus:'playing'});
		default:
			return state;
	}
}

export default game;