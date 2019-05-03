export const Matrix = class {
	constructor(string) {
		this.string = string;
		this.rows = [];
		this.columns = [];
	}

	createMatrix() {
		let tmp = this.string.split("\n");
		let matrix = []

		for (let i = 0; i < tmp.length; i++) {
			matrix.push(tmp[i].split(' '));
		}

		return (matrix);
	}

	rows = new Array(matrix.length);
	for (let i = 0; i < arr.length; i++){
		    let tmp = arrCol(arr, i);
		    rows[i].push(tmp);
	}

	getRows(x) {
		let mtrx = this.createMatrix();
		
		return mtrx[x];
	}
}
