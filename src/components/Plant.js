import React from 'react';
import shrubSeedling from '../img/plants/shrub-seedling.png';
import forbSeedling from '../img/plants/forb-seedling.png';


function Plant(props){
	function returnImage(){
		if (props.plant.type==='forb'){
			switch(props.plant.stage){
				case 1:
					return forbSeedling;
			}
		} 
		if (props.plant.type==='shrub') {
			switch(props.plant.stage){
				case 1:
					return shrubSeedling;
			}
		}
	}
	let image=returnImage();
	const styles={
		position:'absolute',
		top:'50%',
		left:'50%',
	}
	return (
		<img style={styles} src={image} />
	)
}

export default Plant