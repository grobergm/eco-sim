import gameControl from './gameControl';
import initialState from './initialState';
import { gameSetup, gameStart, gameEnd, changeTurn } from './actionCreator';

describe('Game Controller',()=>{
	test('returns initial state if unknown action type',()=>{
		expect(gameControl(initialState,{type:null})).toEqual(initialState)
	});

	test('change game status to game-setup',()=>{
		expect(gameControl(initialState,gameSetup())).toEqual(Object.assign({},initialState,{view:'game-setup'}))
	})

	test('start game with initial setup',()=>{
		const gameLength=10;
		const players=[{name:'Mark',species:'forb',population:{}},{name:'Jen',species:'forb',population:{}},{name:'Henry',species:'shrub',population:{}}];

		expect(gameControl(initialState,gameStart(gameLength,players))).toEqual(Object.assign({},initialState,{view:'game-start',gameLength:gameLength,players:players}))
	})

	test('change game status to game-end',()=>{
		expect(gameControl(initialState,gameEnd())).toEqual(Object.assign({},initialState,{view:'game-end'}))
	})

})
