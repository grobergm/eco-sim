import React from 'react';
import { connect } from 'react-redux';
import { v4 } from 'uuid';

import { modifySeed , selectOrganism  } from '../../GameControl/redux/actionCreator';

import Habitat from './Habitat'
import { makeGrid } from '../redux/actionCreator';

import Plant from '../../Populations/components/Plant';
import { addOrganism } from '../../Populations/redux/actionCreator';



function Environment(props){

	function handlePlantSeed(location,substrate){
		if (substrate==='soil'
			&& props.game.players[props.game.turn].seed>0
			&& !props.populations[location]){
			const playerID=props.game.players[props.game.turn].id;
			const organism={
				id:v4(),
				playerID:playerID,
				leaves:0,
				roots:0,
				species:props.game.players[props.game.turn].species,
			}
			props.dispatch(addOrganism(location,organism));
			props.dispatch(modifySeed(-1,playerID));
		}
	}

	function handleSelect(organism){
		props.dispatch(selectOrganism(organism))
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
							onPlantSeed={handlePlantSeed}
							/>
							{
								props.populations[location] ? 
								<Plant 
									plant={props.populations[location]}
									onSelect={handleSelect} />
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