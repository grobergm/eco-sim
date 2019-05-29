import { addOrganism } from './actionCreator';
import popControl from './popControl';

describe('Population Control',()=>{
	test('returns initial state if unknown action',()=>{
		expect(popControl({},{type:null})).toEqual({})
	})

	test('add an organism to Populations',()=>{
		const action=addOrganism('X2Y1',
			{id:'22s2',playerID:'12345',leaves:0,roots:0,species:'forb'})
		const nextState={
			['X2Y1']:{
					id:'22s2',
					playerID:'12345',
					leaves:0,
					roots:0,
					species:'forb'
				}
		}
		expect(popControl({},action)).toEqual(nextState);
	})
})	