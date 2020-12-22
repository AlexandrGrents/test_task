class StringDictionary
{
    constructor() {
        this.strStorage = [];
        this.vowelSymbols = [..."уеыаоэяиюё"];
    }

    add(str) {
        this.strStorage.push(str);
    }

    getLongest() {
        return this.strStorage.reduce(maxLengthStr, (str) => {
            if (maxLengthStr.length < str.length) return str;
            return maxLengthStr;
        });
    }

    getWithDoubleSymbols() {
        let strs = this.strStorage.filter((str) => {
            for (let i =0; i< str.length-1; i++)
                if (str[i] === str[i+1]) return true;
            return false
        });
        return strs;
    }

    getWithMaxGSymbols(){
        return this.strStorage.reduce(data, (str) > {

        })
    }

    getVowelSymbolCount(str){
        return str.reduce()
    }

    getLengthMore(minLength = 5) {
        return this.strStorage.filter((str) =>{return str.length > minLength})
    }

    getVowelSymbols() {
        return this.strStorage.map((str) => {
            let strArray = [...str]
            let strArrayFiltred = [...str].filter((symbol) =>{
                return this.vowelSymbols.indexOf(symbol) !== -1;
            })
            return strArrayFiltred.join('')
        })
    }

    getVowelSymbolsCount(){
        let vowelSymbolsFromStrings = this.getVowelSymbols();
        return vowelSymbolsFromStrings.map((str) => {return str.length})
    }

    print() {
        let  promise = new Promise(() =>{

            return true;
        })

    }

}


class Matrix {
    constructor() {
        this.matrix = [];
    }

    get isEmpty(){
        return this.matrix.length === 0;
    }

    get columnCount(){
        if (this.isEmpty) return 0;
        return this.matrix[0].length;
    }

    get rowCount(){
        return this.matrix.length;
    }

    checkColumnIndex(index){
        if (!this.isEmpty && index > this.columnCount) throw new RangeError();
    }

    checkRowIndex(index){
        if (!this.isEmpty && index > this.rowCount) throw new RangeError();
    }

    // мб переименовать
    // checkColumnSize(size){
    //
    // }
    //
    // checkRowSize(){
    //
    // }
    //

    addRow(row, index) {
        this.checkRowIndex(index);
        if (!this.isEmpty && row.length !== this.columnCount) throw new RangeError();
        this.matrix.splice(index, 0, row);
    }

    addColumn(column, index){
        this.checkColumnIndex(index);
        if (!this.isEmpty&& column.length !== this.rowCount) throw new RangeError();
        this.matrix.forEach((row, i) => {
            row.splice(index, 0, column[i])
        })
    }

    removeRow(index){
        this.checkRowIndex(index);
        this.matrix.splice(index, 1);
    }

    removeColumn(index){
        this.checkColumnIndex(index);
        this.matrix.forEach((row) => row.splice(index, 1));
    }

    isEqual(other){
        if (this.columnCount !== other.columnCount || this.rowCount !== other.rowCount) return false;
        return this.matrix.every((row, i) =>{
            return row.every((elem, j) =>{
                return elem === other.matrix[i][j];
            })
        })
    }

    sum(){
        return this.matrix.reduce((matrixSum, row) =>{
            return matrixSum + row.reduce((rowSum, elem) =>{
                return  rowSum + elem;
            },0);
        },0);
    }


    print(){
        this.matrix.forEach((row) => console.log(row.join('\t')))
    }
}

let m1 = new Matrix();

m1.addRow([1, 2, 3], 0);
console.log(m1.rowCount, m1.columnCount)

m1.addRow([4, 5, 6], 0);
m1.addColumn([7,8], 2);
m1.print();
m1.removeColumn(0);
m1.removeRow(0);

console.log('sum = ', m1.sum())

m2 = new Matrix();
m2.addRow([2, 8, 3], 0);

console.log(m1.isEqual(m2))

m1.print();
