// ШАБЛОННЫЕ СТРОКИ.
// Если какая то строка использовать одинарную ковычку.
let nam = 'Anatoly' ;

// Строка здороваться с Анатолеем.
let str = 'Hello ' + nam;
console.log(str);

let salary = 10;
let rezult = nam + ' ' + ' Have biggest salary, which accords to ' + salary;
console.log(rezult);

// ЧТОБЫ ТАК ДЛИННО И ДОЛГО НЕ ПИСАТЬ, НУЖНО ПОСТАВИТЬ ОБРЫТЫНЕ КОВЫЧКИ.
// И ПОСЛЕ ОБРАТНЫХ КОВЫЧЕК СТРОКА ТЕПЕРЬ ДИНАМИЧЕСКАЯ И МОЖЕТ ПРИНИМАТЬ РАЗНЫЕ ПЕРЕМЕННЫЕ. 
let strr = `Hello ${nam}`;
console.log(strr); // Hello Anatoly.

// СТАРЫЙ ВАРИАНТ.
let maxSalary = 5000,
    nameOfEmployee = 'Maria';
const rez = nameOfEmployee + ' Have salary ' + maxSalary;
console.log(rez); // Maria Have salary 5000.

// НОВЫЙ ВАРИАНТ ES6
// ТАК РАБОТАЮТ ШАБЛОННЫЕ СТРОКИ.
const rezz = `${nameOfEmployee} Have salary ${maxSalary}`;
console.log(rezz);

// НОВЫЕ МЕТОДЫ СТРОК.
// TEMPLATE ОЗНАЧАЕТ КАКОЙ ТО КУСОЧЕК КОДА ИЛИ ШАБЛОН HTML.
// В ДИНАМИЧЕСКОЙ СТРОКЕ МОЖНО ДЕЛАТЬ УСЛОВИЯ ИЛИ ВЫЧИСЛЕНИЯ.
// если numb > 10, то будет класс ? red если нет то класс green.

let numb = 9;

let template =  `
     <h1 class='${numb > 10 ? "red" : "green"}'> Hello World</h1>
`;
// ДОБАВИЛИ НА HTML СТРАНИЦУ.
document.body.innerHTML = template; // class = green.

let strang = 'ILoveJavaScript';
// startsWith это метод возвращающий строку.
// ВОЗВРАЩАЕТ TRUE ИЛИ FALSE В ЗАВИСИМОСТИ ЕСТЬ ТАКИЕ СИМВОЛЫ ИЛИ НЕТ.
// startsWith - начинается с.

// МЕТОД STARTSWITH ПРОВЕРЯЕТ ЕСТЬ ЛИ ТАКИЕ СИМВОЛЫ В НАЧАЛЕ. 
let res1 = strang.startsWith('ILove'); 

// МЕТОД ENDSWITH ПРОВЕРЯЕТ ЕСТЬ ЛИ ТАКИЕ СИМВОЛЫ В КОНЦЕ.
let res2 = strang.endsWith('pts'); // false.

//МЕТОД INCLUDES ПРОВЕРЯЕТ ЕСТЬ ЛИ ТАКОЕ СЛОВО.
let res3 = strang.includes('Java');

// МЕТОД REPEAT ПОВТОРЯЕТ НАШЕ СЛОВО 5 РАЗ.
let res4 = strang.repeat(5);

// МЕТОД TRIM УБИРАЕТ ВСЕ ПРОБЕЛЫ.
let res5 = strang.trim();

console.log(res1); // true.
console.log(res2); // true.
console.log(res3); // true.
console.log(res4); // 5 раз повторит наше слово 5 раз.
console.log(res5); // 'IloveJavaScript.
