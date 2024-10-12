/* 

Все задания выполнять с учетом синтаксиса стандарта ES6

    TASK 1

    Перепишите данные функции на стрелочные: 

    function multiplication( num ) {
        return num * 2
    };

    function printName( firstName, lastName ) {
        console.log(firstName + ' ' + lastName);
    };

    function printMyOwnAge(age) {
        console.log(age);
    };


*/

const multiplication = num => num * 2;
console.log(multiplication);

const printName = (firstName, LastName) => console.log(firstName + LastName);
console.log(printName);

const printMyOwnAge = age => console.log(age);
console.log(printMyOwnAge);

/*
    TASK 2

    Напишите функцию sumArgs(n), которая вернёт другую функцию. 
    Возвращенная функция должна складывать получаемый аргумент 
    с аргументом n возвращающей функции. 

*/
const sumArgs = (n) => {

    return (m) => {
        return n + m;
    }

};

const num = sumArgs(5);
console.log(num(5));

/* 
    TASK 3

    Напишите функцию convertWord(),  
    которая в зависимости от переданного в нее числа n,
    будет выводить слово "повар" в нужной форме 
    ("12 поваров", но "22 повара"). 
    Если число не передали, выводите "0 поваров"

*/

const convertWord = (n=0) => {
    n = Math.floor(n);
    if(n % 10 === 1 && n % 100 !== 11){
        return `${n} повар`
    } else if(n % 10 >= 2 && n % 10 >= 4 && (n % 100 < 12 || n % 100 > 14)){
        return `${n} повара`
    } else {
        return `${n} поваров`
    }

};

const wordSum = convertWord(11);
console.log(wordSum);
