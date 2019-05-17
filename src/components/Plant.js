import React from 'react';
import shrubSeedling from '../img/plants/shrub-seedling.png';
import forbSeedling from '../img/plants/forb-seedling.png';


function Plant(props){
	function returnImage(){
		if (props.plant.type==='forb'){
			switch(props.plant.leaves){
				case 1:
					return forbSeedling;
			}
		} 
		if (props.plant.type==='shrub') {
			switch(props.plant.leaves){
				case 1:
					return shrubSeedling;
			}
		}
	}
	let image=returnImage();
	const leaves={
		position:'absolute',
		top:'30%',
		left:'50%',
		transform:'translate(-50%,-50%)'
	}
	const roots={
		position:'absolute',
		top:'50%',
		left:'50%',
		transform:'translate(-50%,-50%)',

		backgroundColor:'rgba(0,0,0,0.5)',
		borderRadius:'50%',
		width:`${props.plant.roots*2}vw`,
		height:`${props.plant.roots*2}vw`
	}
	return (
		<div>
			<img style={leaves} src={image} />
			<span style={roots}></span>
		</div>
	)
}

export default Plant