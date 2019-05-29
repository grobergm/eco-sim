import React from 'react';

function Habitat(props){
	function bkgColor(){
		switch (props.habitat.substrate){
			case 'rock':
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
		
	}
	return (
		<div onClick={()=>{props.onPlantSeed(props.location,props.habitat.substrate)}} style={background}>
			
		</div>
	)
}

export default Habitat