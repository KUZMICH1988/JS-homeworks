
// Задача 1.
// Выведите числа от 1 до 50 и от 35 до 8.

// for (let i = 1; i <= 50; i++) {
//     console.log(i);
// }

// for (let i = 35; i <= 35 && i >=8; i--) {
//     console.log(i);
// }




// Задача 2.
// Выведите столбец чисел от 89 до 11 - воспользуйтесь циклом while и отделите числа
// тегом <br /> друг от друга, чтобы получить столбец, а не строку.

// let i=89;
// while (i>=11) {
//     document.write(i);
//     i--;
//     document.write("<br/>");
// }




// Задача 3.
// С помощью цикла найдите сумму чисел от 0 до 100.

// let sum=0;
// for (let a = 0; a <=100; a++) {
//     sum += a;
// }
// console.log(sum);




// Задача 4.
// Найдите сумму чисел в каждом числе от 1 до 5, например: в числе 3 сумма составляет 6
// (1+2+3).

// for (let b = 1; b <=5; b++) {
//     let sum=0;
//  for (let c = 0; c <= b; c++) {
//    sum += c;   
//  }
//  console.log('sum ' + b + '=' + sum);
// }




// Задача 5.
// Выведите чётные числа от 8 до 56. Решить задание через while и for.

// for (let a = 8; a <= 56; a++) {
// if (a % 2 ==0) {
//     console.log(a); 
// }  
// }

// // let b = 8;
// // while (b>=8 && b<=56) {
// //   if( b % 2 ==0) {
// //     console.log(b)
// //   }
// //     b++;
// // }




// Задача 6.
// Необходимо вывести на экран полную таблицу умножения (от 2 до 10) в виде: 
// 2*2 = 4
// 2*3 = 6
// 2*4 = 8
// 2*5 = 10

// for (let x = 2; x <=10 ; x++) {
//     let multi=0;
//     for (let y = 2; y <= 10; y++) {
//         multi = x*y;
//         console.log(x +"*" + y +"=" + multi);      
//     }  
// }




// Задача 7.
// Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет
// меньше 50. Какое число получится? Посчитайте количество итераций, необходимых
// для этого (итерация - это проход цикла), и запишите его в переменную num.

// let n=1000;
// let a=0;
// while (n >= 50) {
//     n /=2;
//     a++;
// }

// console.log(n);
// console.log(a);




// Задача 8.
// Запустите цикл, в котором пользователю предлагается вводить число с клавиатуры, до
// тех пор, пока не будет введена пустая строка или 0. После выхода из цикла выведите
// общую сумму и среднее арифметическое введённых чисел. Если пользователь ввел не
// число, то вывести сообщение об ошибке ввода. При подсчете учесть, что пользователь
// может ввести отрицательное значение.


// let sum = 0;
// let sum2 =0;
// let num =1;
// let a =0;

// while (num) {
//     num = +prompt("Введите число", 10);
//     sum += num;
//     ++a;
// }

// sum2 = sum /(a-1);

// console.log(sum);
// console.log(sum2);



// Задача 9.
// Дана строка с числами разделенными пробелами «4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36
// 8 57». Найдите самое большое и самое маленькое число в строке, используя цикл.

// let a = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57'

// let min = a[0];
// let max = a[0];

// let num='';

// for (let i = 0; i < a.length; i++) {
//     if (a[i] == " ") {
//          num = +num;
//         if (min > num) {
//            min = num; 
//         }
//         if (max < num) {
//           max = num;  
//         }
//          num ='';
//         continue;  
//     }

//     else {
//         num += a[i];
//     }
   
// }


// console.log(min,max);




// Задача 9.
// Дано произвольное целое число n. Написать программу, которая:
// a. разбивает число n на цифры и выводит их на экран;
// b. подсчитывает сколько цифр в числе n;
// c. находит сумму цифр числа n;
// d. меняет порядок цифр числа n на обратный.
// Пример: вводится число 123: цифр в числе = 3; сумма = 6; обратный порядок 321.

// let n=prompt("Enter the number", 123);
// let a=0;
// let sum=0;
// for (let i = 0; i < n.length; i++) {
//     console.log(n[i]);
//     a++;
//     sum +=+n[i];
// }

// let ret ='';
// for (let i = n.length-1; i >= 0; i--) {
//     ret +=n[i];  
// }


// console.log('цифр в числе n='+ a);
// console.log('сумма цифр в числе n='+ sum);
// console.log('обратный порядок числа n='+ ret);



