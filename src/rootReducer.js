import { combineReducers } from 'redux';
import gameControl from './GameControl/redux/gameControl'
import envControl from './Environment/redux/envControl'
import popControl from './Populations/redux/popControl'

const rootReducer=combineReducers({gameControl,envControl,popControl})

export default rootReducer;