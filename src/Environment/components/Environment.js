import React from 'react';
import { connect } from 'react-redux';
import { v4 } from 'uuid';

import Habitat from './Habitat'
import { makeGrid } from '../redux/actionCreator';

import Plant from '../../Populations/components/Plant';
import { addOrganism } from '../../Populations/redux/actionCreator';



function Environment(props){
	function plantSeed(location){
		console.log('test')
		const playerID=props.game.players[props.game.turn].id;
		const organism={
			id:v4(),
			leaves:0,
			roots:0,
			species:props.game.players[props.game.turn].species,
		}
		props.dispatch(addOrganism(playerID,location,organism));
	}
	const grid={
		display:'grid',
		gridTemplateColumns:`repeat(${props.game.mapSize},1fr)`,
	}
	const habitat={
		position:'relative',
		width:'100%',
		height:'100%'
	}
	return (
		<div style={grid}>
			{
				Object.keys(props.environment).map(location=>{
					return (
					<div key={location} style={habitat}>
						<Habitat 
							habitat={props.environment[location]}
							location={location}
							plantSeed={plantSeed}
							/>
							{
								props.populations[location] ? 
								<Plant plant={props.populations[location]} />
								:
								null
							}
					</div>
					)
				})
			}
		</div>
	)
}

const mapStateToProps=state=>{
	return {...state}
}

export default connect(mapStateToProps)(Environment)