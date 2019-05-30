import React from 'react';
import Plant from '../../../Populations/components/Plant';
import PlantDetail from './PlantDetail';
import { connect } from 'react-redux';
import { changeTurn , selectOrganism } from '../../redux/actionCreator';



function PlayerDetail({game,dispatch}){

	const turnChanger=()=>{
		dispatch(selectOrganism(null))
		if (game.day===game.length){
			dispatch(changeTurn('lastTurn'))
		} else if(game.turn===game.players.length-1){
			dispatch(changeTurn('lastPlayer'));
		} else {
			dispatch(changeTurn('changeTurn'));
		}
	}

	const grid={
		position:'fixed',
		backgroundColor:'white',
		borderRadius:'1rem',
		padding:'1rem',
		margin:'1rem',
		bottom:'0',
		left:'0',
		width:'50%',
		display:'grid',
		gridTemplateColumns:'50% 50%'
	}
	return (
		<div style={grid}>
			<div>
				<h2>Day:{game.day} of {game.length}</h2>
				<p>{game.players[game.turn].name}</p>
				<p>Seed:{game.players[game.turn].seed}</p>
				<button onClick={turnChanger}>Change Turn</button>
			</div>
			{
				game.selectOrg ? 
				<PlantDetail locID={game.selectOrg} />: null
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