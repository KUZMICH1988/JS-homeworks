// Задача 1.
// Дана строка 'aaa@bbb@ccc'. Замените все @ на ! с помощью глобального
// поиска и замены.

// let str='aaa@bbb@ccc';

// let str1 = str.replace(/@/gi, '!');

// console.log(str1);


// Задача 2.
// В переменной date лежит дата в формате 2025-12-31. Преобразуйте эту
// дату в формат 31/12/2025.

// let date = '2025-12-31';

// let date1 = date.replace(/-/gi, ' ').replace(/(2025) (12) (31)/, '$3/$2/$1');

// console.log(date1)




// Задача 3.
// Дана строка «Я учу javascript!». Вырежете из нее слово «учу» и слово
// «javascript» тремя разными способами (через substr, substring, slice).

// let str='Я учу javascript!';

// console.log(str.substring(0,1));
// console.log(str.substr(0,1));
// console.log(str.slice(0,1));



// Задача 4.
// Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень
// из суммы кубов его элементов. Для решения воспользуйтесь циклом for.

// let arr=[4, 2, 5, 19, 13, 0, 10];
// let sum=0;

// arr.forEach(function(elem) {

//     sum += Math.pow(elem,3);
// }
// )
// sum = Math.sqrt(sum);
// console.log(sum)



// let sum1=0;
// for (let i = 0; i < arr.length; i++) {
    
//     sum1 += Math.pow(arr[i],3);
// }

// console.log(Math.pow(sum1, 0.5))



// Задача 5.
// Даны переменные a и b. Отнимите от a переменную b и результат
// присвойте переменной c. Сделайте так, чтобы в любом случае в переменную
// c записалось положительное значение. Проверьте работу скрипта при a и b,
// равных соответственно 3 и 5, 6 и 1.

// // let a=3;
// // let b=5;
// // let c;

// let a=6;
// let b=1;
// let c;


//     c=Math.abs(a-b);

//     console.log(c);



// Задача 6.
// Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014.
// Для решения этой задачи напишите функцию, которая будет добавлять 0
// перед днями и месяцами, которые состоят из одной цифры (из 1.9.2014
// сделает 01.09.2014).

// let date= new Date();     

// function addNought(value) {
//     if (value<10) return '0'+value;
//     return value;
// }

// let year= date.getFullYear();
// let month= date.getMonth();
// let day= date.getDay();
// let hour= date.getHours();
// let minite= date.getMinutes();
// let sec= date.getSeconds();



// let myDate = `${hour}:${addNought(minite)}:${addNought(sec)} ${addNought(day)}.${addNought(month+1)}.${year}`

// console.log(myDate);




// Задача 7.
// Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая
// найдет строки aba, abba, abbba по шаблону: буква 'a', буква 'b' любое
// количество раз, буква 'a'.

// let str='aa aba abba abbba abca abea';

// console.log(str.match(/\ab+a/gm).join());



// Задача 8.
// Напишите ф-цию строгой проверки ввода номер телефона в
// международном формате (<код страны> <код города или сети> <номер
// телефона>). Функция должна возвращать true или false. Используйте
// регулярные выражения.


// function phoneCheck(number) {
//     let regul = /^\+?375 ?\(?(17|29|25|33|44)\)? ?-?(\d[ -]?)+\d$/gm;

//    return regul.test(number);
// }

// console.log(phoneCheck(+375295226565));
// console.log(phoneCheck('+375 (29) 8-222222'));
// console.log(phoneCheck('8029 714-89-89'));
// console.log(phoneCheck('375 29 8569699'));



// Задача 9.
// Напишите ф-цию строгой проверки адреса эл. почты с учетом следующих
// условия:
// - весь адрес не должен содержать русские буквы и спецсимволы, кроме
// одной «собачки», знака подчеркивания, дефиса и точки;
// - имя эл. почты (до знака @) должно быть длиной более 2 символов, причем
// имя может содержать только буквы, цифры, но не быть первыми и
// единственными в имени;
// - после последней точки и после @, домен верхнего уровня (ru, by, com и т.п.)
// не может быть длиной менее 2 и более 11 символов.
// Функция должна возвращать true или false. Используйте регулярные
// выражения.



// function emailCheck(number) {
//         let regul = /^[a-z0-9](\w+[\-\.\_]?)+\w+@((\w+[\-\.]?)+){2,11}\.[a-z]{2,11}$/gm;
    
//        return regul.test(number);
//     }
    
//     console.log(emailCheck('kuku1999@mail.ru'));
//     console.log(emailCheck('jhr@g.com'));




// Задача 10.
// Напишите ф-цию, которая из полного адреса с параметрами и без,
// например: https://tech.onliner.by/2018/04/26/smart-do-200/?
// utm_source=main_tile&utm_medium=smartdo200#zag3 , получит адрес
// доменного имени (https://tech.onliner.by), остальную часть адреса без
// параметров (/2018/04/26/smart-do-200/), параметры
// (utm_source=main_tile&utm_medium=smartdo200) и хеш (#zag3). В адресе
// может и не быть каких-либо составляющих. Ф-ция должна возвращать
// массив.

// НЕДОРЕШЕНО!!!

// function emailCheck(number) {

// let str = number;
// let ansver = str.match(/(https?:\/\/[a-z0-9\.]+)(\/?.+\/)(.+)(#\w+)/gm);

// return console.log(ansver);
    
// }
    
//     console.log(emailCheck('https://tech.onliner.by/2018/04/26/smart-do-200/?utm_source=main_tile&utm_medium=smartdo200#zag3'));