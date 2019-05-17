import React from 'react';
import Plant from './Plant';

function Habitat(props){
	function bkgColor(){
		switch (props.habitat.substrate){
			case 'rocks':
				return 'gray';
			case 'water':
				return 'blue';
			default:
				return 'brown';
		}
	}
		const background={
		backgroundColor: bkgColor(),
		width:'100%',
		height:'10vw',
		position:'relative'
	}
	return (
		<div style={background}>
			{
				props.habitat.plant?<Plant plant={props.habitat.plant} />:null
			}
		</div>
	)
}

export default Habitat