import gameControl from './gameControl';
import {
	addPlayer,
	removePlayer,
	updatePlayer,
 	setGameLength,
 	setMapSize,
 	changeTurn,
 	modifySeed,
 	selectOrganism } from './actionCreator';

describe("Setting up initial game stats",()=>{
	const initialState={
		day:0,
		turn:0,
		players:[]
	}

	test('returns initial state if unknown action type',()=>{
		const action={type:null};
		expect(gameControl(initialState,action)).toEqual(initialState)
	});


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

	test('sets map size',()=>{
		const action=setMapSize(15);
		const nextState={
			mapSize:15,
			day:0,
			turn:0,
			players:[],
		};
		expect(gameControl(initialState,action)).toEqual(nextState)
	});

	test('selects organism',()=>{
		const action=selectOrganism({id:'12333'});
		const nextState={
			day:0,
			turn:0,
			players:[],
			selectOrg:{id:'12333'},
		};
		expect(gameControl(initialState,action)).toEqual(nextState);
	})
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

describe('Modifying Player Stats',()=>{
	const initialState={
			players:[{id:'1211221',seed:3},{id:'12345',seed:3},{id:'55555',seed:3}]
		}
	test('adds a player',()=>{
		const newPlayer={id:'aaa12345',seed:3};
		const action=addPlayer(newPlayer)
		const nextState={
			players:[{id:'1211221',seed:3},{id:'12345',seed:3},{id:'55555',seed:3},{id:'aaa12345',seed:3}]
		}
		expect(gameControl(initialState,action)).toEqual(nextState)
	})

	test('removes a player',()=>{;
		const action=removePlayer(1);
		const nextState={
			players:[{id:'1211221',seed:3},{id:'55555',seed:3}],
		}
		expect(gameControl(initialState,action)).toEqual(nextState)
	})
	test('modifies seeds in given player',()=>{

		const action=updatePlayer(1,{id:'12345',seed:0},'seed',0);
		const nextState={
			players:[{id:'1211221',seed:3},{id:'12345',seed:0},{id:'55555',seed:3}]
		}
		expect(gameControl(initialState,action)).toEqual(nextState);
	})
})