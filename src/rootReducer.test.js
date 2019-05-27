import rootReducer from './rootReducer';
import { createStore } from 'redux';
import { changeTurn } from './GameControl/redux/actionCreator';
describe('Root Reducer',()=>{
	const initialState={
		view:'game-intro',
		game:{
			day:0,
			length:null,
			players:[],
			turn:0
		},
		populations:{},
		environment:{},
	}

	const store=createStore(rootReducer);

	test('store returns initialState unknown action is dispatched',()=>{
		const action={type:null};
		store.dispatch(action)
		expect(store.getState()).toEqual(initialState);
	});

	test('store changes view when last turn action is dispensed',()=>{
		const action=changeTurn('lastTurn');
		store.dispatch(action);
		const nextState={
		view:'game-end',
		game:{
			day:0,
			length:null,
			players:[],
			turn:0
		},
		populations:{},
		environment:{},
	}
		expect(store.getState()).toEqual(nextState)
	})
})