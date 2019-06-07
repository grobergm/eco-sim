import React from 'react';
import { connect } from 'react-redux';
import { v4 } from 'uuid';

import { updatePlayer, selectOrganism  } from '../../GameControl/redux/actionCreator';

import Habitat from './Habitat'
import { makeGrid } from '../redux/actionCreator';

import Plant from '../../Populations/components/Plant';
import { addOrganism } from '../../Populations/redux/actionCreator';

function Environment(props){
	let currentPlayer=props.game.players[props.game.turn];

	function handlePlantSeed(locID,x,y,substrate){
		function setMinimum(organ){
			return currentPlayer.genetics[organ].min.value
		}
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
				color:currentPlayer.color,
				genetics:currentPlayer.genetics,
				leaves:setMinimum('leaves'),
				roots:setMinimum('roots'),
				sugar:2,
				water:2,
				flowers:0,
			}
			console.log(organism)
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
				Object.keys(props.environment).map(locID=>{

					return (
					<div key={locID} style={habitat}>
						<Habitat 
							habitat={props.environment[locID]}
							x={props.environment[locID].x}
							y={props.environment[locID].y}
							locID={locID}
							onPlantSeed={handlePlantSeed}
							/>
							{
								props.populations[locID] ? 
								<Plant 
									plant={props.populations[locID]}
									onSelect={handleSelect}
									selected={props.game.selectOrg}/>
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