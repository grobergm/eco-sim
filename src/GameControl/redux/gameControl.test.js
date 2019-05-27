import gameControl from './gameControl';
import initialState from './initialState';
import { changeView, addPlayer, setGameLength, changeTurn } from './actionCreator';

describe('Game Controller',()=>{
	test('returns initial state if unknown action type',()=>{
		expect(gameControl(initialState,{type:null})).toEqual(initialState)
	});

	test('change game status to game-setup',()=>{
		expect(gameControl(initialState,changeView('setup')))
		.toEqual(Object.assign({},initialState,{view:'game-setup'}))
	})

	test('start game',()=>{
		expect(gameControl(initialState,changeView('start')))
		.toEqual(Object.assign({},initialState,{view:'game-start'}))
	})

	test('change game status to game-end',()=>{
		expect(gameControl(initialState,changeView('end')))
		.toEqual(Object.assign({},initialState,{view:'game-end'}))
	})

})
