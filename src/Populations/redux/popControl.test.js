import { addOrganism , updateOrganism, addWater, addSugar, growLeaf, growRoot } from './actionCreator';
import popControl from './popControl';

describe('Population Control',()=>{
	test('returns initial state if unknown action',()=>{
		expect(popControl({},{type:null})).toEqual({})
	})

	test('add an organism to Populations',()=>{
		const action=addOrganism('22s2',
			{location:'X2Y1'})
		const nextState={
			['22s2']:{location:'X2Y1'}
		}
		expect(popControl({},action)).toEqual(nextState);
	});


	test('add water to organism',()=>{
		const initialState={
			['22s2']:{water:1}
		}
		const action=updateOrganism('22s2','water',2)
		const nextState={
			['22s2']:{water:2}
		}
		expect(popControl(initialState,action)).toEqual(nextState);
	})

	test('add sugar to organism',()=>{
		const initialState={
			['22s2']:{sugar:1}
		}
		const action=updateOrganism('22s2','sugar',4)
		const nextState={
			['22s2']:{sugar:4}
		}
		expect(popControl(initialState,action)).toEqual(nextState);
	})

	test('grow leaf',()=>{
		const initialState={
			['22s2']:{leaves:1}
		}
		const action=updateOrganism('22s2','leaves',2)
		const nextState={
			['22s2']:{leaves:2}
		}
		expect(popControl(initialState,action)).toEqual(nextState);
	})

	test('grow roots',()=>{
		const initialState={
			['22s2']:{roots:1}
		}
		const action=updateOrganism('22s2','roots',2)
		const nextState={
			['22s2']:{roots:2}
		}
		expect(popControl(initialState,action)).toEqual(nextState);
	})
})	