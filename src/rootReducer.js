import { combineReducers } from 'redux';
import viewControl from './GameControl/redux/viewControl'
import gameControl from './GameControl/redux/gameControl'
import envControl from './Environment/redux/envControl'
import popControl from './Populations/redux/popControl'

const rootReducer=combineReducers({
	view:viewControl,
	game:gameControl,
	environment:envControl,
	populations:popControl
})

export default rootReducer;