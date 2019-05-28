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
		position:'relative'
	}
	return (
		<div style={background}>
			
		</div>
	)
}

export default Habitat