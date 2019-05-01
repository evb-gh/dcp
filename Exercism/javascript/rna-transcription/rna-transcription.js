export function toRna (x) {

	let transcript = (i) => {
		if (i === '')
			return i;
		else if (i === 'C')
			return ('G');
		else if (i === 'G')
			return ('C');
		else if (i === 'T')
			return ('A');
		else if (i === 'A')
			return ('U');
	};

	let res = x.split('');

	return (res.map(transcript).join(''));

}
