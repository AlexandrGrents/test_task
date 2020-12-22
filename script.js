class StringDictionary
{
    static allVowelInAlphabet = [..."уеыаоэяиюё"];
    constructor() {
        this.strStorage = [];
    }

    static isVowelSymbol(symbol){
        return this.allVowelInAlphabet.indexOf(symbol.toLowerCase()) !==0
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

    getAllDifferent(){
        return [... new Set(this.strStorage)];
    }


    getWithDoubleSymbols() {
        return this.strStorage.filter((str) => {
            for (let i =0; i< str.length-1; i++)
                if (str[i] === str[i+1]) return true;
            return false
        });
    }

    splitOnTwoParts(){
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

    getWithVowelSymbols(){
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

    getVowelSymbolsForEach() {
        return this.strStorage.map((str) => {
            let strArray = [...str]
            let strArrayFiltred = [...str].filter((symbol) =>{
                return this.allVowelInAlphabet.indexOf(symbol) !== -1;
            })
            return strArrayFiltred.join('')
        })
    }

    getVowelSymbolsCount(){
        let vowelSymbolsFromStrings = this.getVowelSymbols();
        return vowelSymbolsFromStrings.map((str) => {return str.length})
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
        if (!this.isEmpty && index > this.columnCount) throw new RangeError();
    }

    checkRowIndex(index){
        if (!this.isEmpty && index > this.rowCount) throw new RangeError();
    }

    checkRowsSize(newRowSize){
        if (!this.isEmpty && newRowSize !== this.columnCount) throw new RangeError();
    }

    checkColumnsSize(newColumnSize){
        if (!this.isEmpty&& newColumnSize !== this.rowCount) throw new RangeError();
    }

    addRow(row, index) {
        this.checkRowIndex(index);
        this.checkRowsSize(row.length);
        this.matrix.splice(index, 0, row);
    }

    addColumn(column, index){
        this.checkColumnIndex(index);
        this.checkColumnsSize(column.length);
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

let matrix1 = new Matrix();

matrix1.addRow([1, 2, 3], 0);
console.log(matrix1.rowCount, matrix1.columnCount)

matrix1.addRow([4, 5, 6], 0);
matrix1.addColumn([7,8], 2);
matrix1.print();
matrix1.removeColumn(0);
matrix1.removeRow(0);

console.log('Просуммируем содержимое матрицы (=13)', matrix1.sum());

matrix2 = new Matrix();
console.log('Просуммируем содержимое пустой матрицы (=0)', matrix2.sum());

matrix2.addRow([2, 8, 3], 0);

console.log('Проверка матриц на равенство (=true):\n', matrix1.isEqual(matrix2))

console.log('Содержимое двух матриц:\n');
matrix1.print();
console.log('-------');
matrix2.print();
console.log('-------');


matrix1.removeColumn(2);
matrix1.addColumn([2], 2);

console.log('Проверка матриц на равенство (=false):\n', matrix1.isEqual(matrix2))

console.log('Содержимое двух матриц:\n');
matrix1.print();
console.log('-------');
matrix2.print();
console.log('-------');


let stringDictionary = new StringDictionary();
stringDictionary.add('only english symbols');
stringDictionary.add('Я начинаюсь с гласной, но !самая длинная кккккккккккккккккккккккккккк');
stringDictionary.add('Не я начинаюсь с гласной, но самая длинная кккккккккккккккккккккккккккк');
stringDictionary.add('Воот тут две буквы о');
stringDictionary.add('Максимальное количество гласных в этой строкееееее');
stringDictionary.add('Одинаковая строка')
stringDictionary.add('Одинаковая строка')
stringDictionary.add('Одинаковая строка но с разным регистром')
stringDictionary.add('Одинаковая Строка Но С Разным Регистром')
stringDictionary.add('Ровно 10 с')
stringDictionary.add('Ровно 11 с.')
stringDictionary.add('Мало')

console.log('Содержимое словаря:\n', stringDictionary.strStorage)

console.log('Вывести строки с парными символами:\n', stringDictionary.getWithDoubleSymbols())
console.log('Вывести самую длинную строку:\n',stringDictionary.getLongest())
console.log('Вывести самую длинную строку:\n, которая начинается с гласной',stringDictionary.getLongestWithFirstVowel())
console.log('Вывести уникальные строки:\n',stringDictionary.getAllDifferent())

console.log('Получить строки длинную больше 10:\n', stringDictionary.getWithLengthMore(5))




stringDictionary2 = new StringDictionary()
stringDictionary2.add('abc')
stringDictionary2.add('abcgefda')
stringDictionary2.add('iopi')

console.log('Содержимое словаря:\n', stringDictionary2.strStorage)
console.log('Разделить на две части:\n', stringDictionary2.splitOnTwoParts())
console.log('Получить количество различных символов:\n', stringDictionary2.getAllDifferentSymbolCount())
console.log('Выводим содержимое хранилища посимвольно (надпись "add new str: newStr означает добавление строки в хранилище во время вывода его содержимого"):')
stringDictionary2.print().then(() => console.log('Вывод завершен'));

setTimeout(() => {
    stringDictionary2.add('newStr');
    console.log('add new str: newStr')
}, 2500)

