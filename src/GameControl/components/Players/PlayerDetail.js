import React from 'react';
import Plant from '../../../Populations/components/Plant';

import { connect } from 'react-redux';
import { changeTurn , selectOrganism } from '../../redux/actionCreator';

function PlayerDetail(props){

	const turnChanger=()=>{
		props.dispatch(selectOrganism(null))
		if (props.game.day===props.game.gameLength){
			props.dispatch(changeTurn('lastTurn'))
		} else if(props.game.turn===props.game.players.length-1){
			props.dispatch(changeTurn('lastPlayer'));
		} else {
			props.dispatch(changeTurn('changeTurn'));
		}
	}

	const grid={
		display:'grid',
		gridTemplateColumns:'50% 50%'
	}
	return (
		<div style={grid}>
			<div>
				<p>{props.game.players[props.game.turn].name}</p>
				<p>Seed:{props.game.players[props.game.turn].seed}</p>
				<button onClick={turnChanger}>Change Turn</button>
			</div>
			{
				props.game.selectOrg ? 
			<div style={grid}>
				<p>Leaves: {props.game.selectOrg.leaves}</p>
				<p>Roots: {props.game.selectOrg.roots}</p>
				<p>Water: {props.game.selectOrg.water}</p>
				<p>Sugar: {props.game.selectOrg.sugar}</p>
			</div> : null
			}
		</div>
	)
}

const mapStateToProps=state=>{
	return{
		game:state.game
	}
}

export default connect(mapStateToProps)(PlayerDetail)