import React from 'react';

function Habitat(props){
	console.log(props.x,props.y,props.locID)
	function bkgColor(){
		switch (props.habitat.substrate){
			case 'rock':
				return 'var(--rock)';
			case 'water':
				return 'var(--water)';
			default:
				return 'var(--soil)';
		}
	}
		const background={
		backgroundColor: bkgColor(),
		width:'100%',
		height:'10vw',
		
	}
	return (
		<div onClick={()=>{props.onPlantSeed(
			props.locID,
			props.x,
			props.y,
			props.habitat.substrate)}} style={background}>
			
		</div>
	)
}

export default Habitat