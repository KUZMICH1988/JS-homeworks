let Calcul = function () {

    this.get = function(){
this.a = +prompt('Введите число а');
this.b = +prompt('Введите число b');
this.oper = prompt('Введите операцию: +,-,*,/');

this.operation();
    }


    this.operation = function () {
        switch (this.oper) {
            case '+':
                 this.result=this.a+this.b
                break;
            case '-':
                 this.result=this.a-this.b
                break;
            case '*':
                 this.result=this.a*this.b
                break;
            case '/':
                 this.result=this.a/this.b
                break;
                default: this.result=0;
        }
        this.show();
    } 

    this.show = function () {
        alert(this.a + ' ' + this.oper + ' ' +this.b + '=' + this.result);
    }

    
}

let calcul = new Calcul();
// calcul.get();



// Лампочка. Возможные методы: ввод информации о лампочке (мощность, стоимость
//     электроэнергии), вкл./выкл. лампочки, получение расхода за горение лампочки,
//     счетчик горения лампочки.



let Bulb = function () {
  
    this.status = false;
    this.timeOn;

    this.options = function(){
this.power = +prompt('Введите мощность лампочки (Ватт/час)',100);
this.price = +prompt('Введите стоимость электроэнергии (1 Ватт)', 15);

    }



    this.turn = function () {
       this.status = !this.status;
        if (this.status) {
            console.log('Лампочка включена');
            let start = Date.now;
            console.log(start);
           
        }
        else {
            console.log('Лампочка выключена');
            let end = Date.now;
            console.log(end);
            // console.log('Время работы лампочки: '+ (end - start) + ' секунд.');
        // this.show();
        
       
        }

    }





    // this.time = function () {
    //   let date = Date.now();
    //   date.setSeconds(3);
    // //   setInterval(date.getSeconds, 1000);
    //   setInterval(console.log(date.getSeconds()), 1000);
        
    // }




    // this.show = function () {
        
    //     console.log('Время работы лампочки: '+ $ { end - start}+ ' секунд.');
    //     console.log('Расход электроэнергии: '+ price*12 + ' ватт.');
    // }



}


let bulb = new Bulb();
// bulb.options();
bulb.turn();
// bulb.turn();

console.log(bulb);



// let start = Date.now(); // количество миллисекунд с 1 января 1970 года

// // выполняем некоторые действия
// for (let i = 0; i < 1000000000; i++) {
//   let doSomething = i * i * i;
// }

// let end = Date.now(); // заканчиваем отсчёт времени

// console.log( `Цикл отработал за ${end - start} миллисекунд` );





