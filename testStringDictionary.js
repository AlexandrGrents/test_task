function showTestsForStringDictionary(){
    console.log('STRING DICTIONARY\n------------------------------------------');
    let stringDictionary = new StringDictionary();
    stringDictionary.add('Воот тут две буквы о');
    stringDictionary.add('И воот тут две буквы о');
    stringDictionary.add('А тут две буквы о');

    console.log('Содержимое словаря:\n', stringDictionary.strStorage)

    console.log('Вывести строки с парными символами:\n', stringDictionary.getWithDoubleSymbols())

    stringDictionary.add('only english symbols');
    stringDictionary.add('Я начинаюсь с гласной и самая длинная такая, но с 1 согласной есть длиннее');
    stringDictionary.add('Не я начинаюсь с гласной, но самая длинная вообще .............................');
    stringDictionary.add('Воот тут две буквы о');
    stringDictionary.add('Максимальное количество гласных в этой строкееееее');
    stringDictionary.add('Одинаковая строка')
    stringDictionary.add('Одинаковая строка')
    stringDictionary.add('Одинаковая строка но с разным регистром')
    stringDictionary.add('Одинаковая Строка Но С Разным Регистром')
    stringDictionary.add('Тут ровно 51 символ ...............................')
    stringDictionary.add('Тут ровно 50 символов ............................')
    stringDictionary.add('Тут ровно 49 символов ...........................')

    console.log('Содержимое словаря:\n', stringDictionary.strStorage)

    console.log('Вывести самую длинную строку:\n',stringDictionary.getLongest())
    console.log('Вывести самую длинную строку, которая начинается с гласной:\n',stringDictionary.getLongestWithFirstVowel())


    console.log('Получить строки длиннее 50 символов:\n', stringDictionary.getWithLengthMore(50))


    stringDictionary2 = new StringDictionary()
    stringDictionary2.add('abc')
    stringDictionary2.add('xpoimul')
    stringDictionary2.add('abc')


    console.log('Содержимое словаря:\n', stringDictionary2.strStorage)
    console.log('Вывести уникальные строки ([abc, xpoimul]:\n',stringDictionary2.getAllDifferentStrings())
    console.log('Разделить на две части ([abc, abc][xpoimul]):\n', stringDictionary2.splitEqualParts())
    console.log('Получить количество различных символов (=10):\n', stringDictionary2.getAllDifferentSymbolCount())
    console.log('Выводим содержимое хранилища посимвольно (надпись "add new str: newStr означает добавление строки в хранилище во время вывода его содержимого"):')
    stringDictionary2.print().then(() => console.log('Вывод завершен'));

    setTimeout(() => {
        stringDictionary2.add('newStr');
        console.log('add new str: newStr')
    }, 2500)

    console.log('конец проверки StringDictionary')
}

showTestsForStringDictionary()