import { addOrganism , addWater, addSugar } from './actionCreator';
import popControl from './popControl';

describe('Population Control',()=>{
	test('returns initial state if unknown action',()=>{
		expect(popControl({},{type:null})).toEqual({})
	})

	test('add an organism to Populations',()=>{
		const action=addOrganism('22s2',
			{location:'X2Y1',
			playerID:'12345',
			leaves:1,
			roots:1,
			water:1,
			sugar:1,
			species:'forb'})
		const nextState={
			['22s2']:{
					location:'X2Y1',
					playerID:'12345',
					leaves:1,
					roots:1,
					water:1,
					sugar:1,
					species:'forb'
				}
		}
		expect(popControl({},action)).toEqual(nextState);
	});

	test('add water to organism',()=>{

		const initialState={
			['22s2']:{
					location:'X2Y1',
					playerID:'12345',
					leaves:1,
					roots:1,
					water:1,
					sugar:1,
					species:'forb'
				}
		}
		const action=addWater('22s2',1)
		const nextState={
			['22s2']:{
					location:'X2Y1',
					playerID:'12345',
					leaves:1,
					roots:1,
					water:2,
					sugar:1,
					species:'forb'
				}
		}
		expect(popControl(initialState,action)).toEqual(nextState);
	})

		test('add sugar to organism',()=>{

		const initialState={
			['22s2']:{
					location:'X2Y1',
					playerID:'12345',
					leaves:1,
					roots:1,
					sugar:1,
					water:1,
					species:'forb'
				}
		}
		const action=addSugar('22s2',1)
		const nextState={
			['22s2']:{
					location:'X2Y1',
					playerID:'12345',
					leaves:1,
					roots:1,
					sugar:2,
					water:1,
					species:'forb'
				}
		}
		expect(popControl(initialState,action)).toEqual(nextState);
	})
})	