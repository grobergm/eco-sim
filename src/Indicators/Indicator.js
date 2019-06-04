import React from 'react';
import './Indicator.css'

function Indicator({location,indicateArr,badge}){
	
	const badgeStyles={
		color:'white',
		borderRadius:'50%',
		border:'1px solid white',
		backgroundColor: badge.color,
		position:'absolute',
		top:'50%',
		left:'50%',
		transform:'translate(-50%,-50%)',
		zIndex:'1',
		padding:'0.5rem',
	}

	if(indicateArr.includes(location)){
		return (
			<div style={badgeStyles}>
				{badge.icon}
			</div>
		)
	} else return null
	
}

export default Indicator;