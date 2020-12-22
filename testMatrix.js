function showTestsForMatrix(){
    console.log('MATRIX\n------------------------------------------');
    let matrix1 = new Matrix();
    matrix1.addRow([1, 2, 3], 0);
    console.log('Содержимое матрицы [[1, 2, 3]:')
    matrix1.print();

    console.log('Добавление строки на позицию больше, чем количество строк (=RangeError)')
    try {
        matrix1.addRow([1,2,3], 2);
    } catch (e) {
        console.log(e);
    }

    console.log('Добавление строки на отрицательную позицию (=RangeError)')
    try {
        matrix1.addRow([1,2,3], -2);
    } catch (e) {
        console.log(e);
    }


    console.log('Добавление строки по размерам меньше, чем строки в матрцие (=RangeError)')
    try {matrix1.addRow([1,3], 1);
    } catch (e) {
        console.log(e);
    }

    console.log('Добавление строки по размерам больше, чем строки в матрцие (=RangeError)')
    try {matrix1.addRow([9, 9, 9, 9], 1);
    } catch (e) {
        console.log(e);
    }

    console.log('Добавление столбца на позицию больше, чем количество столбцов (=RangeError)')
    try {
        matrix1.addColumn([1], 4);
    } catch (e) {
        console.log(e);
    }

    console.log('Добавление строки на отрицательную позицию (=RangeError)')
    try {
        matrix1.addRow([1,2,3], -2);
    } catch (e) {
        console.log(e);
    }

    console.log('Добавление столбца по размерам меньше, чем столбцы в матрцие (=RangeError)')
    try {matrix1.addRow([], 1);
    } catch (e) {
        console.log(e);
    }

    console.log('Добавление столбца по размерам больше, чем столбцы в матрцие (=RangeError)')
    try {matrix1.addRow([9, 9], 1);
    } catch (e) {
        console.log(e);
    }


    matrix1.addRow([4, 5, 6], 0);
    console.log('Добавление строки [4, 5, 6] в начало. Содержимое матрицы [[4, 5, 6], [1, 2, 3]:')
    matrix1.print();

    matrix1.addColumn([7,8], 2);
    console.log('Добавление столбца [7, 8] на место второго столбца.Содержимое матрицы [[4, 5, 7, 6], [1, 2, 8, 3]:')
    matrix1.print();

    matrix1.removeRow(0);

    console.log('Удаление строки №0. Содержимое матрицы [[1, 2, 8, 3]]:')
    matrix1.print();

    matrix1.removeColumn(0);

    console.log('Удаление столбца №0. Содержимое матрицы [[2, 8, 3]]:')
    matrix1.print();

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
    console.log('конец проверки Matrix')
}

showTestsForMatrix();