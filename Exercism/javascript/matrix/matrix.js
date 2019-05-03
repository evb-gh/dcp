export const Matrix = class {
	constructor(string) {
		this.string = string;
	}

	createMatrix() {
		let tmp = this.string.split("\n");
		let matrix = []

		for (let i = 0; i < tmp.length; i++) {
			matrix.push(tmp[i].split(' '));
		}

		return (matrix);
	}

	rows(x) {
		let mtrx = this.createMatrix();
		
		return mtrx[x];
	}
}
