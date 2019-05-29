export const addOrganism=(location,organism)=>{
	return {
		type:'ADD_ORGANISM',
		location:location,
		organism:organism
	}
}