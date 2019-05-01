export const isPangram = x => {
	const str = x.toUpperCase();	

	const letterIndex = [];

	let i = 0;
	while ( i < str.length) {
		let char = str.charCodeAt(i);
		if (char >= 65 && char <= 90){
			if (!letterIndex.includes(char))
				letterIndex.push(char);	
			i++;
		}
		else 
			i++;

	}
	return (letterIndex.length === 26 ? true : false);
}
