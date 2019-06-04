import React from 'react';
import { connect } from 'react-redux';
import { v4 } from 'uuid';

import { updatePlayer, selectOrganism  } from '../../GameControl/redux/actionCreator';

import Habitat from './Habitat'
import { makeGrid } from '../redux/actionCreator';

import Plant from '../../Populations/components/Plant';
import { addOrganism } from '../../Populations/redux/actionCreator';

import Indicator from '../../Indicators/Indicator'

function Environment(props){
	let currentPlayer=props.game.players[props.game.turn];

	function handlePlantSeed(locID,x,y,substrate){
		if (substrate==='soil'
			&& currentPlayer.seed>0
			&& !props.populations[locID]){
			const id=v4();
			const organism={
				id:id,
				locID:locID,
				x:x,
				y:y,
				playerID:currentPlayer.id,
				leaves:1,
				roots:1,
				water:2,
				sugar:2,
				flowers:0,
				species:currentPlayer.species,
			}
			props.dispatch(addOrganism(locID,organism));
			props.dispatch(updatePlayer(
				props.game.turn,
				currentPlayer,
				'seed',
				currentPlayer.seed-1
				));
		}
	}

	function handleSelect(locID){
		if(currentPlayer.id=== props.populations[locID].playerID){
			props.dispatch(selectOrganism(locID))
		}
	}

	function handleHighlight(plant){
		if(plant.playerID===currentPlayer.id){
			return true
		} else return false
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

	let indicateArr=['XOYO','X1Y1','X2Y2','X3Y3','X4Y4','X5Y5'];

	return (
		<div style={grid}>
			{
				Object.keys(props.environment).map(locID=>{
					let badge={
						color: props.environment[locID].substrate === 'water' ? 'var(--water)' : 'var(--red)',
						icon: props.populations[locID] ? '-' : '+'
					}
					return (
					<div key={locID} style={habitat}>
						<Habitat 
							habitat={props.environment[locID]}
							x={props.environment[locID].x}
							y={props.environment[locID].y}
							locID={locID}
							onPlantSeed={handlePlantSeed}
							/>
						<Indicator location={locID} badge={badge} indicateArr={indicateArr} />
							{
								props.populations[locID] ? 
								<Plant 
									plant={props.populations[locID]}
									onSelect={handleSelect}
									selected={props.game.selectOrg} 
									onHighlight={handleHighlight}/>
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