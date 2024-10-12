/*
    ARROW FUNCTIONS
*/
function hello(text){
    console.log('Hello');
};
// Теперь превращаем обычную функцию в стрелочную функцию.
// Новый формат стрелочной функции в ES6.
// Название переменной через const и будет функция, с {} скобками
const helloo = (/* пустые скобки так как параметра нету*/) => {
    console.log('Hello');
}; 
// Если есть параметр, то можно убрать () и вписать сам параметр.
// Но это при условии, если есть только 1 параметр.
const hellooo = text => {
    console.log('Hello' + text);
};
// Если 2 или больше параметра то использовать () скобки.
const helloooo = (a, b, c) => {
    console.log('Hello' + text);
};
// Если внутри функции код состоит из 1 строки, то можно так.
// Если много строк внутри функции то так уже не получится сделать.
// ФУНКЦИЯ HELLO С 2 ПАРАМЕТРАМИ И ОНА ВЫВОДИТ В КОНСОЛЬ СУММУ 2 ПАРАМЕТРОВ.
const helloooooo = (a, b) => console.log(a + b);

// Если функция возвращает через return.
function hi(){
    return a + b;
};
// Если функция что то возвращает через return ОБЯЗАТЕЛЬНО ЗАПИСАТЬ ФУНКЦИЮ В ПЕРЕМЕННУЮ.
let result = hello(7, 8);

// В НОВОМ ФОРМАТЕ ES6 ЭТО БУДЕТ ТАК.
// Если одна строка то ключевого слова return может уже не быть.
const hii = (a, b) => /* - return*/ a + b;

setTimeout(function(){
    console.log(123);  
},);

// В НОВОМ ФОРМАТЕ ES6.
setTimeout(() =>{
    console.log(123);
},);

// Перебор массива.
let arr = [1, 2, 3, 4, 5, 6];

arr.forEach(function(item, index){
    console.log(item);
});

// Перебор массива ES6.
arr.forEach(() => {

});

arr.reduce(() => {

});
// Если параметра нету.
arr.map((item, index) => {

});

const user = {
    name: 'Artem',
    age: 38,
    // КЛЮЧЕВОЕ СЛОВО В КОНТЕКСТЕ КАК ОБОЛОЧКА ДЛЯ ВНУТРЕННИХ ФУНКЦИЙ И ОН СОХРАНИТ КОНТЕКСТ.
    userInfo : function(){
        // undefined надо использовать стрелочную функцию.
        setTimeout(() => {
            console.log(this.name + ' ' + this.age);
        }, 1000)
    },
    // МЕТОД С ПОМОЩЬЮ СРЕЛОЧНОЙ ФУНКЦИИ.
    // КОГДА УКАЗЫВАЕМ СЛОВО FUNCTION ТО ОНА СОЗДАЕТ СВОЙ КОНТЕКСТ.
    printThis1 : function() {
        // ВЫВОДИТ ССЫЛКУ НА ТЕКУЩИЙ ОБЬЕКТ.
        console.log(this); // ВЫВЕЛО ТЕКУЩИЙ ОБЬЕКТ.
    },
    printThis2: () => console.log(this) // СТРЕЛ ФУНКЦИЯ ПОТЕРЯЛА КОНТЕКСТ И ОБРАТИЛАСЬ К ГЛОБАЛЬНОМУ WINDOW.

};

user.userInfo();
user.printThis1();
user.printThis2();