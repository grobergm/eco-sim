import React from 'react';

function GeneSelection({onSelect,organ,attribute,selectValue,data}){
	const highlight={
		color:data.selected?'white':'var(--red)',
		backgroundColor:data.selected?'var(--red)':'white',
		textAlign:'center',
		borderRadius:'1px'
	}
	return(
		<div style={highlight} onClick={()=>{onSelect(organ,attribute,selectValue)}}>
			<p>{data.value}</p>
		</div>
	)
}

export default GeneSelection