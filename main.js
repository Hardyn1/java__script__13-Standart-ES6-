
/*
    ES6

    Стандарт ES6 это просто более новая версия. Наподобе Windows 10/11.
    Babel js - это транспайлер, переписывающий код на ES-2015 в код предыдущем стандарте ES5.
    Переписывает код на ES6
    Official site BABEL.JS
    Компилирует старый в обновленный код.
*/
  
/*
    var / let / const

*/

var condition = true;

if(condition){
    // При вызове через var ошибки нет, но при новом стандарте ES6 let будет undefined.
    // var n = 9 (declared - обьявлено);
    // let видны только в районе скобок в которых они обьявлены.
    let n = 9;
    console.log(n); // 9
    // Если внутри условия обьявили let то за пределами условия работать уже не будет.
    // Не важно {} скобки или условие, видно не будет.
};

// console.log(n); - 23 строка n is not defined.

/* 
    HOSTING - ЭТО ПОДНЯТИЕ ИЛИ СПЛЫТИЕ ПЕРЕМЕННЫХ.
    После того как ее обьявляем то она поднимается в консоль, но будет все равно undefined.
    Ее будет видно, но ошибки не какой не будет.
    СПЛЫТИЕ ОТНОСИТСЯ ТОЛЬКО К ИНИЦИАЛИЗАЦИИ ПЕРЕМЕННЫХ.
    
    НО ПРИ КЛЮЧЕВОМ СЛОВЕ LET БУДЕТ ОШИБКА ИНИАЛИЗАЦИИ.
    Переменная не поднимается.
*/
console.log(b); // b is not defined.
var b; // Уже при выводе ошибки не будет, про сто undefined.

function foo(){
    // Есть область видимости внутри скобок.
    name = 'Sergey';
};

let name;
foo();
console.log(name); // undefined.

/*
*/
var buttons = document.querySelectorAll('.button'); // (Коллекция).

for(let i = 0; i < buttons.length; i++){
    // Прослушка событий на каждый button в цикле for.
    buttons[i].addEventListener('click', function(){
        // Выводим индекс каждой кнопки.
        console.log(i);
        // ПРИ VAR ВЫВОДИТ ПО КЛИКЕ НА КАЖДЫЙ BUTTON 5.
        // КАК БЫ НЕ НАЖАЛ ВСЕГДА БУДЕТ 5.
    })
 };

/*
    CONST
    Константа это величина которую нельзя изменить, она постоянная.
    Чтобы в сущности сохранялась одно и тоже значение то CONST.
*/

const car = 'bmw';
// car = 'audi';
console.log(car); // Assignment to constant variable. CONST изменить нельзя оставляем так.

const cities = ['Moscow', 'New Yourk', 'Lissabon', 'Kiev'];
console.log(cities);
// Надо добавить в массив что-то, через метод push.
// В случае const работы с массивом то массив изменить удастся.
cities.push('Kaliningrad');
console.log(cities);
// CONST В РАБОТЕ С ОБЬЕКТАМИ.
// Дает возможность менять обьект и массив. 
const auto = {
    model : 'Toyota',
    color : 'Red'
};

auto.model = 'audi';
console.log(auto);

// ПАРАМЕТРЫ ПО УМОЛЧАНИЮ.
// ЕСЛИ ВНУТРИ B НИЧЕГО НЕ ПЕРЕДАСТСЯ, МОЖНО ПО УМОЛЧАНИЮ ПОСТАВИТЬ ПАРАМЕТР ПО УМОЛЧАНИЮ.
// И B РАВНО СРАЗУ 3.
// ТАК ЖЕ МОЖНО ЗАДАВАТЬ СТРОКОВЫЕ ЗНАЧЕНИЯ.
const oper = (a = 'string', b = 3, c = {name: 'Sergey', age: 39}) => {
    console.log(a * b);
};

oper();

const operation = (a = 4, b = 3) => {
    console.log(a * b); // NaN (АРГУМЕНТЫ НЕ ПЕРЕДАНЫ).
}

// ТЕ ЗНАЧЕНИЯ ЧТО УКАЗАНЫЕ В АРГУМЕНТАХ ПЕРЕБИВАЮТ ПАРАМЕТРЫ ПО УМОЛЧАНИЮ.
operation(2, 6); // 12.
