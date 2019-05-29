import React from 'react';
import Summary from './Summary';
import { connect } from 'react-redux';
import { changeTurn , selectOrganism } from '../../redux/actionCreator';

function PlayerDetail(props){

	const turnChanger=()=>{
		props.dispatch(selectOrganism(null))
		if (props.day===props.gameLength){
			props.dispatch(changeTurn('lastTurn'))
		} else if(props.turn===props.players.length-1){
			props.dispatch(changeTurn('lastPlayer'));
		} else {
			props.dispatch(changeTurn('changeTurn'));
		}
	}
	return (
		<div>
			<p>{props.players[props.turn].name}</p>
			<p>Seed:{props.players[props.turn].seed}</p>
			<button onClick={turnChanger}>Change Turn</button>
		</div>
	)
}

const mapStateToProps=state=>{
	return{
		players:state.game.players,
		turn:state.game.turn,
		day:state.game.day,
		gameLength:state.game.length,
	}
}

export default connect(mapStateToProps)(PlayerDetail)