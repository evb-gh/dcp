// @format
export const Matrix = class {
  constructor(string) {
    this.string = string;
    this.rows = [];
    this.columns = [];
  }

  //const cols = [];

  static matrix(str) {

    let tmp = str.split(' ');

    while (tmp.length > 0) {
      if (tmp.includes('\n')) {
        this.rows.push([tmp.splice(0, tmp.indexOf('\n'))]);
        tmp.shift();
      } else {
        this.rows.push([tmp.splice(0, tmp.length)]);
      }
    }
  }
	static getCol = (arr, n) => arr.map(x => x[n]);
	static cols(rows){
		let i = 0;
		while (i < rows[0].length){
			this.columns.push(getCol(rows, i)); 
		}
	}
}
