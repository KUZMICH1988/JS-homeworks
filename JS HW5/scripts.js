// Задание 1.
// Сделайте функцию, которая отнимает от первого числа второе и делит на
// третье. Числа передаются параметром.

// function count(a,b,c) {
//     console.log((a-b)/c);
// }

// count (20,4,8)





//Задание 2.
// Сделайте функцию, которая возвращает куб числа и его квадрат. Число
// передается параметром.


// function step(number) {
//     console.log(number**2);
//     console.log(number**3);
// }

// step(10);





//Задание 3.
// Напишите функции min и max, которые возвращают меньшее и большее из
// чисел a и b.

// function minmax(a,b) {
//     if (a==b) console.log('Числа равны.')
//     else if (a<b)  console.log(a +" больше " + b); 
//     else console.log(b +" больше " + a);
// }

// minmax(10,2)




// Задание 4.
// Напишите две функции: первая ф-ция должна возвращать массив с
// числовыми значениями, диапазон которых должен вводиться пользователем
// с клавиатуры; вторая – выводить полученный массив.

// let n=+prompt('enter the first number of array', 1);
// let m=+prompt('enter the last number of array', 10);
// let arr=[];

// function takeArray(n,m) {
//     for (; n <= m; n++) {
//         arr.push(n);  
//     }

//     return arr;
// }

// function giveArray() {
//     console.log(arr);
// }


// takeArray(n,m);
// giveArray();






// Задание 5.
// Сделайте функцию isEven() (even - это четный), которая параметром
// принимает целое число и проверяет: четное оно или нет. Если четное - пусть
// функция возвращает true, если нечетное — false.

// let p = prompt("Введите число");

// function isEven(p) {
//     if (p % 2 == 0) {
//         // console.log('Число четное'); 
//         return true;
//     }
//    else {
//     // console.log('Число нечетное');
//     return false;
//     } 

// }

// let result = isEven(p);
// console.log(result);

// Задание 6.
// Напишите ф-цию, в которую передается массив с целыми числами.
// Верните новый массив, где останутся лежать только четные из этих чисел.
// Для этого используйте вспомогательную функцию isEven из предыдущей
// задачи.

// let arr=[1,2,3,4,5,6,7,8,9,10];
// let arr1=[];

// function evenArr(arr) {
//     for (let i = 0; i <= arr.length; i++) {
//      if (isEven(arr[i])) {
//     arr1.push(arr[i])
//      }  
       
//     }
// return arr1;
// }

// evenArr(arr)
// console.log(arr1) 






// Задание 7.
// Напишите ф-цию, которая рисует следующую пирамидку (исп. вложенные
//     циклы):
//     1
//     22
//     333
//     4444
//     55555
// Кол-во рядов должно вводиться параметром. Если пользователь ввел доп.
// параметр, непредусмотренный ф-цией по умолчанию - один любой символ,
// кроме пробела, то пирамида должна быть нарисована этим символом,
// например:
// *
// **
// ***


// let n=prompt("enter the number of rows", 5);


// function triangle(n) {

//     for (let i = 1; i <= n[0]; i++) {
//         let str='';
       
//         for (let j = 1; j <= i; j++) {
           
//             if (n[1]==' ' || n[1] == undefined) {
//                 str += i; 
//             }
//            else {
//             str += n[1];
//            }
//         }
        
//         console.log(str);   
//     }
// }

// triangle(n)



// Задание 8.
// Напишите ф-цию, которая рисует равнобедренный треугольник из
// звездочек:

//   *
//  ***
// *****

// Кол-во рядов должно вводиться с клавиатуры. Доп., напишите такую же ф-
// цию, но которая выведет перевернутый треугольник.



// let n=prompt('enter the hight of triangle', 5);   
// // isosceles triangle -равнобедренный тр.


// function isTr(n) { 
    
//     for (let i = 1; i <=n; i++) {
//         let str='';

//         for (let k = 1; k <=n-i; k++) {
//             str +=' ';
//         }

//         for (let j = 1; j <= i+i-1; j++) {
//             str +='*';    
//         }

//         console.log(str);
        
//     }
  
// }


// function isTrRevers(n) { 
    
//     for (let i = 1; i <=n; i++) {
//         let str='';
//         n=+n;

//         for (let k = 1; k <=i-1; k++) {
//             str +=' ';
//         }

//         for (let j = i; j <= n+n-i; j++) {
//             str +='*';    
//         }

//         console.log(str);
        
//     }
  
// }

// isTr(n);
// console.log('----------------------------------')
// isTrRevers(n);



// Задание 9.
// Напишите ф-цию, которая возвращает массив заполненный числами
// Фибоначи от 0 до 1000.

// function arr(a,b) {
//     let array=[0,1];
//     let m=0;
//     let n=1;
    
    
//     while (n+m < b) {

//        if (m+n < b) {
//         m=m+n;
//         array.push(m);
//        } 

//        if (m+n< b) {
//         n=m+n;
//         array.push(n);
//        }
      
//     }
//     console.log(array);
// }

// arr(0,1000)




// Задание 10.
// Дано число. Сложите его цифры. Если сумма получилась более 9-ти,
// опять сложите его цифры. И так, пока сумма не станет однозначным числом
// (9 и менее). Исп. Рекурсию.

// let n=+prompt('Enter everything number', 12345);

// function sumNumber(n) {
//   let sum=0;
//    n=String(n);
//     for (let i = 0; i < n.length; i++) { 
//         sum += +n[i];   
//     }

//    if (sum <= 9) {
//         return sum;
//    } 
//    else {

//         return sumNumber(sum);
//    }

   
// }


// let t= sumNumber(n);
// console.log(t);




// Задание 11.
// Дан массив с числами (передается параметром). Выведите
// последовательно его элементы, используя рекурсию и не используя цикл.

let array=[1,2,3,4,5,6];

function writeArr(array) {

    console.log(array[array.length-1])
    
}

writeArr(array);