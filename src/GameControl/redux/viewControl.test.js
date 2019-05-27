import viewControl from './viewControl';
import { changeView } from './actionCreator';

const initialState='game-intro';

describe('View Controller',()=>{
	
	test('returns initial state if unknown action type',()=>{
		const action={type:null};
		expect(viewControl(initialState,action)).toEqual(initialState)
	});

	test('change game status to game-setup',()=>{
		const action=changeView('setup');
		const nextState='game-setup';
		expect(viewControl(initialState,action)).toEqual(nextState);
	})

	test('start game',()=>{
		const initialState={view:'game-setup'};
		const action=changeView('start');
		const nextState='game-start';
		expect(viewControl(initialState,action)).toEqual(nextState);
	})

	test('change game status to game-end',()=>{
		const initialState={view:'game-setup'};
		const action=changeView('end');
		const nextState='game-end';
		expect(viewControl(initialState,action)).toEqual(nextState);
	})

})
