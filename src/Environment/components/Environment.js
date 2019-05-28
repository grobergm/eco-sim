import React from 'react';
import Habitat from './Habitat'
import { makeGrid } from '../redux/actionCreator';
import { connect } from 'react-redux';

function Environment(props){
	const grid={
		display:'grid',
		gridTemplateColumns:`repeat(${props.game.mapSize},1fr)`,
	}
	return (
		<div style={grid}>
			{
				Object.keys(props.environment).map((id,index)=>{
					
					return <Habitat 
										key={index}
										habitat={props.environment[id]}
										id={id}
										/>
				})
			}
		</div>
	)
}

const mapStateToProps=state=>{
	return {...state}
}

export default connect(mapStateToProps)(Environment)