import game from './game';
import initialState from './initialState';

describe('game reducer',()=>{
	test('returns initial state if unknown action type',()=>{
		console.log(initialState)
		expect(game(initialState,{type:null})).toEqual(initialState)
	})
})