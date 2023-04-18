/*
Задание 5.

Перепишите консольное приложение из предыдущего юнита на классы.

Общие требования:

Имена классов, свойств и методов должны быть информативными.
Соблюдайте best practices.
Используйте синтаксис ES6.
*/
class Technic {
    constructor(isPower, isEnable, name) {
        this.name = name;
        this.isPower = 0;
        this.isEnable = 'Off' || 'On';
    }

    getInfo() {
        if (this.isEnable == 'On') {
            return `${this.name}  is On`
        } else {
            return `${this.name}  is Off`
        }
    }

}
class KindTechnic extends Technic {
    constructor(isPower, isEnable, name) {
        super(name, isPower, isEnable);
        this.name = name;
        this.isEnable = isEnable;
        this.isPower = isPower;
    }
    
    getPower() {
        if (this.isEnable == "On") {
            console.log(`Мощность ${this.name} = ${this.isPower}.`)
            this.isPower = this.isPower;
        } else {
            console.log(`Мощность ${this.name} = ${this.isPower}. Но данный прибор выключен.`)
            this.isPower = 0;
            
        }
        return this.isPower;
    }

}
console.log('---------------------');
const computer = new KindTechnic(100, 'On', 'Сomputer');
const lampa = new KindTechnic(50, 'Off', 'Lampa');
lampa.color = function (color) {
    this.color = color;
    console.log(`Цвет лампы ${this.color}`);

};
lampa.color('желтый');
computer.cost = 100;
lampa.getPower();
computer.getPower();
console.log(computer.getInfo());
console.log(lampa.getInfo());
console.log(`Общая потребляемая мощность: ${computer.isPower}+${lampa.isPower}=${computer.isPower + lampa.isPower}`)


