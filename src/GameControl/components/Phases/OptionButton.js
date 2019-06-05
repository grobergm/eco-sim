import React from 'react';

function OptionButton(props){
	const styles={
		backgroundColor:props.level===props.selected?'var(--red)':'white',
		color:props.level===props.selected?'white':'var(--red)'
	}
	return(
		<button style={styles} onClick={()=>{props.onSelect(props.level)}}>
			{props.level}
		</button>
	)
}

export default OptionButton