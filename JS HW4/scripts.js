//Задание 1.
// Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти
// элементы на экран.

// let arr=[1,2,3,4,5];
// for (let i = 0; i < arr.length; i++) {
//    console.log(arr[i]);   
// }



// Задание 2.
// Дан массив с числами [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7]. Числа могут
// быть положительными и отрицательными. Выведите на экран только отрицательные
// числа, которые больше -10, но меньше -3.

// let arr=[-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];

// for (let i = 0; i < arr.length; i++) {
//    if (arr[i]<-3 && arr[i]> -10) {
//       console.log(arr[i]);  
//    }  
// }



//Задание 3.
// Создайте новый массив и заполните его значениями от 23 до 57, используя цикл for и
// while. Выведите оба массива. С помощью цикла for найдите сумму элементов этого
// массива. Запишите ее в переменную result и выведите.

// let arr=[];
// let i=23;
// while (i>=23 && i<=57) {
//    arr.push(i);
//    i++;
// }
// console.log(arr);

// let arr1=[];
// for (let j = 23; j >= 23 && j <= 57; j++) {
//    arr1.push(j);  
// }
// console.log(arr1);

// let sum=0;
// for (let n = 0; n < arr1.length; n++) {
//    sum += arr[n];
// }
// console.log(sum);




//Задание 4.
// Дан массив числами (строчного типа), например: [‘10’, ‘20’, ‘30’, ‘50’, ‘235’, ‘3000’].
// Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или
// 5.


// let arr=['10', '20', '30', '50', '235', '3000'];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i][0] == 1 || arr[i][0] == 2 || arr[i][0] == 5) {
//       console.log(arr[i]);  
//    }  
// }





//Задание 5.
// Составьте массив дней недели (ПН, ВТ, СР и т.д.). С помощью цикла for выведите все
// дни недели, а выходные дни выведите жирным.

// let array=['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];

// for (let i = 0; i < array.length; i++) {
//    if (i<=4) {
//       document.write(array[i]+' '); 
//    }
//    else  document.write("<b>" + array[i] +' '); 
// }



//Задание 6.
// Создайте массив с произвольными данными. Добавьте в конец массива любой элемент,
// и получите последний элемент массива, используя свойство length.

// let array=[1, 45, "bot", true, -84, "string"];
// array.push("rest");

// console.log(array[array.length-1]);
// console.log(array.at(-1));





//Задание 7.
// Запросите у пользователя по очереди числовые значения при помощи prompt и
// сохраните их в массив. Собирайте числа до тез пор пока пользователь не введет пустое
// значение. Выведите получившийся массив на экран. Выполните сортировку чисел
// массива, и выведите его на экран.

// let n;
// let array=[];

// while (n != " "){
//    n=+prompt("Enter any number", 3)
//    array.push(n);
// }
// array.pop();
// array.sort(function(a,b) {
//    return a-b;
// })

// console.log(array);





//Задание 8.
// Переверните массив [12, false, ‘Текст’, 4, 2, -5, 0] (выведите в обратном порядке),
// используя цикл while и метод reverse.

// let array=[12, false, 'Текст', 4, 2, -5, 0];
// let array1=[];
// let a=array.length-1;

// while (a>=0) {
//    array1.push(array[a])
//    a--;
// }
// console.log(array1);


// console.log(array.reverse());





//Задание 9.
// Напишите скрипт, считающий количество нулевых (пустых) элементов в заданном
// целочисленном массиве [5, 9, 21, , , 9, 78, , , , 6].

// let array=[5, 9, 21, , , 9, 78, , , , 6];
// let n=0;

// for (let i = 0; i < array.length; i++) {
//    if (array[i] >= 0) n++;
// }
// n= array.length - n;
// console.log(n);




//Задание 10.
// Найдите сумму элементов массива между двумя нулями (первым и последним нулями
//    в массиве). Если двух нулей нет в массиве, то выведите ноль. В массиве может быть
//    более 2х нулей. Пример массива: [48,9,0,4,21,2,1,0,8,84,76,8,4,13,2] или
   // [1,8,13,76,8,7,0,22,0,2,3,2].

// let array=[1,8,13,76,8,7,0,48,9,0,4,21,2,1,0,8,84,76,8,4,22,0,2,3,2];
// let array1=[];
// let i=0;
// let j;

// for (i = 0; i < array.length; i++) {
//    if (array[i] == 0) {
//       i += 1;
//    console.log(i);   //первый ноль
//    break;
//    }
   
// }

// for (j = array.length; j > 0; j--) {
//    if (array[j] == 0) {
//    console.log(j);     //последний ноль
//    break;
//    }

// }

// array1 = array.slice(i,j);
// console.log(array1);  //новый массив

// let sum=0;
// for (let i = 0; i < array1.length; i++) {
//    sum += array1[i];
   
// } 
// console.log(sum);




//Задание 11.
// Нарисовать равнобедренный треугольник из символов ^. Высоту выбирает
// пользователь. Например: высота = 5.

// let n=prompt('enter hight of triangle', 5);

// for (let i = 1; i <= n; i++) {
//    let str = ''; 
   
//    for (let k = 1; k <=n-i; k++) {
//       str +=' ';  
//    }
   
//    for (let j = 1; j <= i+(i-1); j++) {
//       str += '*';
//    }
   
//    console.log(str);
   
// }