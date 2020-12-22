class StringDictionary
{
    static allVowelInAlphabet = [..."уеыаоэяиюё"];
    constructor() {
        this.strStorage = [];
    }

    static isVowelSymbol(symbol){
        return this.allVowelInAlphabet.indexOf(symbol.toLowerCase()) !==-1
    }

    static getVowelSymbolCount(str){
        return str.reduce((sum, symbol) => {
            return sum + StringDictionary.isVowelSymbol(symbol);
        }, 0)
    }

    add(str) {
        this.strStorage.push(str);
    }

    getLongest() {
        return this.strStorage.reduce((maxStr, str) => {
            if (maxStr.length < str.length) return str;
            return maxStr;
        }, '');
    }

    getLongestWithFirstVowel(){
        return this.strStorage.reduce((maxStr, str) => {
            if (maxStr.length < str.length && StringDictionary.isVowelSymbol(str[0])) return str;
            return maxStr;
        }, '');
    }

    getAllDifferentSymbolCount(){
        return [... new Set(this.strStorage.join(''))].length;
    }

    getAllDifferentStrings(){
        return [... new Set(this.strStorage)];
    }

    getWithDoubleSymbols() {
        return this.strStorage.filter((str) => {
            for (let i =0; i< str.length-1; i++)
                if (str[i] === str[i+1]) return true;
            return false
        });
    }

    splitEqualParts(){
        this.strStorage.sort((str1, str2) => {return str2.length - str1.length});
        let partSumLength = [0, 0];
        let part = [[], []];

        this.strStorage.forEach((str) =>{
           if (partSumLength[0] < partSumLength[1]){
               part[0].push(str)
               partSumLength[0] += str.length;
           }
           else{
               part[1].push(str);
               partSumLength[1] += str.length;
           }
        });


        return part;
    }

    getStringWithMaxVowelCount(){
        return this.strStorage.reduce((answer, str) => {
            let vowelSymbolsCount = StringDictionary.getVowelSymbolsCount(str);
            if (!answer.str || vowelSymbolsCount > answer.count){
                answer.count = vowelSymbolsCount;
                answer.str = str;
            }
        }, {str:'', count:0}).str;
    }


    getWithLengthMore(minLength) {
        return this.strStorage.filter((str) =>{return str.length > minLength})
    }


    async print() {

        for (let i=0; i<this.strStorage.length; i++){
            await this.printStr(i);
            await new Promise(resolve => {
                setTimeout(resolve, 2000)
            })
        }
    }

    async printStr(index){
        for (let symbol of [...this.strStorage[index]]){
            await new Promise(resolve => setTimeout(()=>{
                console.log(symbol);
                resolve();
            }, 1000))
        }

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
        if (!this.isEmpty && index > this.columnCount || index <0) throw new RangeError();
    }

    checkRowIndex(index){
        if (!this.isEmpty && index > this.rowCount || index <0) throw new RangeError();
    }

    checkRowsLength(lengthOfNewRow){
        if (!this.isEmpty && (lengthOfNewRow !== this.columnCount)) throw new RangeError();
    }

    checkColumnsLength(lengthOfNewColumn){
        if (!this.isEmpty&& (lengthOfNewColumn !== this.rowCount)) throw new RangeError();
    }

    addRow(row, index) {
        this.checkRowIndex(index);
        this.checkRowsLength(row.length);
        this.matrix.splice(index, 0, row);
    }

    addColumn(column, index){
        this.checkColumnIndex(index);
        this.checkColumnsLength(column.length);
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
        console.log(this.matrix.map(row => {return row.join('\t')}).join('\n') )
    }
}