// Создаем любой электрический прибор
// добавляем метод в сети/не в сети


const ElDevice = function() {
    
    this.condition=false;
    let amperage = true;

    this.plugIn = function(){
        this.condition = true;
        if(this.condition && amperage) {
            console.log('Напряжение есть, вилка в розетке.');
            return this.condition
        }
    }

    this.plugOut = function(){
        this.condition = false;
        if(!this.condition && amperage) {
            console.log('Напряжение есть, вилка не в розетке.');
            return this.condition
        }
    }
    
}


// Лампочка. Возможные методы: ввод информации о лампочке (мощность, стоимость
//     электроэнергии), вкл./выкл. лампочки, получение расхода за горение лампочки,
//     счетчик горения лампочки.


let Bulb = function () {

    ElDevice.apply(this,arguments);   // наследуем от электроприбора

    let start = 0;
    let end = 0;
    
  
    this.status = false;

    this.options = function(){
        this.power = +prompt('Введите мощность лампочки (Вт/сек)',10);
        console.log(`Мощность лампочки ${this.power} Вт.`)
        this.price = +prompt('Введите стоимость электроэнергии (1 Вт/копеек)', 5);
        console.log(`Стоимость электроэнергии ${this.price} копеек.`);

        if(!this.status) console.log('Лампочка выключена.');
        if (this.condition) console.log('Ток есть')

    }

    this.turn = function () {

       this.status = !this.status;

        if (this.status) {
            console.log('Лампочка включена');
            start = Date.now(); 
        }
        else {
            console.log('Лампочка выключена');
            end = Date.now();
            this.timeWork = Math.round((end - start)/1000);
            console.log('Время работы лампочки: '+ this.timeWork + ' секунд.');
            this.show();
        }

    }

    this.show = function () {
        
        console.log(`Расход электроэнергии: ${this.power*this.timeWork} Вт.`);
        console.log(`Цена электроэнергии: ${this.power*this.price*this.timeWork} копеек.`);
    }


}


let bulb = new Bulb();
console.log(bulb);
// bulb.options();


// Создаем люстру с заданным количеством лампочек

let Chandelier = function(n) {

this.bulb = n;

this.options = function(){
    this.power = +prompt('Введите мощность лампочки (Вт/сек)',10);
    console.log(`Мощность лампочки ${this.power} Вт.`)
    this.price = +prompt('Введите стоимость электроэнергии (1 Вт/копеек)', 5);
    console.log(`Стоимость электроэнергии ${this.price} копеек.`);
    console.log(`Количество лампочек: ${this.bulb}.`)

    if(!this.status) console.log(`Люстра выключена.`);

}

this.show = function() {

    console.log(`Расход электроэнергии: ${this.power*this.timeWork*this.bulb} Вт.`);
    console.log(`Цена электроэнергии: ${this.power*this.price*this.timeWork*this.bulb} копеек.`);

}
}



Chandelier.prototype = bulb;   // наследуем от объекта bulb

let chandelier = new Chandelier(5);

// chandelier.__proto__ = bulb;
console.log(chandelier);

// chandelier.options();
















