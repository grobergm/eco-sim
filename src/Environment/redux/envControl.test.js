import envControl from './envControl';
import { makeGrid } from './actionCreator';

describe('Making the grid',()=>{

test('returns initial state if unknown action type',()=>{
	expect(envControl({},{type:null})).toEqual({})
})

test('returns a an object with key combinations of X and Y up to mapsize',()=>{
const mapSize=10
const action=makeGrid(mapSize,0.3,0.3);
const firstObject={X0Y0:{}};
const lastObject={[`X${mapSize-1}Y${mapSize-1}`]:{}}
expect(envControl({},action)).toMatchObject(firstObject);
expect(envControl({},action)).toMatchObject(lastObject);
})

})
