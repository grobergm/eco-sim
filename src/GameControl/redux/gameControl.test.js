import gameControl from './gameControl';
import {addPlayer, setGameLength, changeTurn } from './actionCreator';

describe("Setting up initial game stats",()=>{
	const initialState={
		length:null,
		day:0,
		turn:0,
		players:[],
	}

	test('returns initial state if unknown action type',()=>{
		const action={type:null};
		expect(gameControl(initialState,action)).toEqual(initialState)
	});

	test('adds a player',()=>{
		const newPlayer={name:'Matt',species:'forb',population:[]};
		const action=addPlayer(newPlayer)
		const nextState={
			length:null,
			day:0,
			turn:0,
			players:[{name:'Matt',species:'forb',population:[]}],
		}
		expect(gameControl(initialState,action)).toEqual(nextState)
	})

	test('sets game length',()=>{
		const action=setGameLength(10);
		const nextState={
			length:10,
			day:0,
			turn:0,
			players:[],
		};
		expect(gameControl(initialState,action)).toEqual(nextState)
	});

})	

describe('Turn Changing',()=>{
	test('increments turn if not last players turn',()=>{
		const initialState={
			length:10,
			day:0,
			turn:1,
			players:[{name:'Matt'},{name:'Bob'},{name:'Jill'}],
		}
		const action=changeTurn('change');
		const nextState={
			length:10,
			day:0,
			turn:2,
			players:[{name:'Matt'},{name:'Bob'},{name:'Jill'}],
		}
		expect(gameControl(initialState,action)).toEqual(nextState)
	});

	test('increments day and rests turn when round over',()=>{
		const initialState={
			length:10,
			day:0,
			turn:2,
			players:[{name:'Matt'},{name:'Bob'},{name:'Jill'}],
		}
		const action=changeTurn('lastPlayer');
		const nextState={
			length:10,
			day:1,
			turn:0,
			players:[{name:'Matt'},{name:'Bob'},{name:'Jill'}],
		}
		expect(gameControl(initialState,action)).toEqual(nextState)
	});

})	