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

// let date= new Date();         //НЕ РЕШЕНО!!!

// date.setFullYear(2014, 2, 9)

// date.toLocaleString('ru')
// console.log(date);




// Задача 7.
// Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая
// найдет строки aba, abba, abbba по шаблону: буква 'a', буква 'b' любое
// количество раз, буква 'a'.

let str='aa aba abba abbba abca abea';

console.log(str.match(/a/gi));