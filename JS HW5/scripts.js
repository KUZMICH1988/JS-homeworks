// Задание 1.

// function count(a,b,c) {
//     console.log((a-b)/c);
// }

// count (20,4,8)





//Задание 2.;

// function step(number) {
//     console.log(number**2);
//     console.log(number**3);
// }

// step(10);





//Задание 3.

// function minmax(a,b) {
//     if (a==b) console.log('Числа равны.')
//     else if (a<b)  console.log(a +" больше " + b); 
//     else console.log(b +" больше " + a);
// }

// minmax(10,2)








// Задание 4.

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