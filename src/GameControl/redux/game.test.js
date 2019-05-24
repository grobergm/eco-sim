import { viewControl } from './game';
import initialState from './initialState';
import { gameSetup, gameStart, gameEnd } from './actionCreator';

describe('game reducer',()=>{
	test('returns initial state if unknown action type',()=>{
		expect(viewControl(initialState,{type:null})).toEqual(initialState)
	});

	test('change game status to game-setup',()=>{
		expect(viewControl(initialState,gameSetup())).toEqual(Object.assign({},initialState,{gameStatus:'game-setup'}))
	})

	test('start game with initial setup',()=>{
		const gameLength=10;
		const players=[{name:'Mark',species:'forb',population:{}},{name:'Jen',species:'forb',population:{}},{name:'Henry',species:'shrub',population:{}}];

		expect(viewControl(initialState,gameStart(gameLength,players))).toEqual(Object.assign({},initialState,{gameControl:{gameStatus:'game-start',gameLength:gameLength,players:players}}))
	})

	test('change game status to game-end',()=>{
		expect(viewControl(initialState,gameEnd())).toEqual(Object.assign({},initialState,{gameStatus:'game-end'}))
	})
})