import { addOrganism } from './actionCreator';
import popControl from './popControl';

describe('Population Control',()=>{
	test('returns initial state if unknown action',()=>{
		expect(popControl({},{type:null})).toEqual({})
	})

	test('add an organism to Populations',()=>{
		const action=addOrganism('12345','X2Y1',{id:'22s2',leaves:0,roots:0,species:'forb'})
		const nextState={
			['X2Y1']:{
				player:'12345',
				organism:{
					id:'22s2',
					leaves:0,
					roots:0,
					species:'forb'
				}
			}
		}
		expect(popControl({},action)).toEqual(nextState);
	})
})	