import { combineReducers } from 'redux';
import phaseControl from './GameControl/redux/phaseControl'
import turnControl from './GameControl/redux/turnControl'
import envControl from './Environment/redux/envControl'
import popControl from './Populations/redux/popControl'

const rootReducer=combineReducers({phaseControl,turnControl,envControl,popControl})

export default rootReducer;