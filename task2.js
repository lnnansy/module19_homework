/*Задание 2.

Напишите функцию, которая 
принимает в качестве аргументов строку и объект, 
а затем проверяет, есть ли у переданного объекта 
свойство с данным именем. 
Функция должна возвращать true или false.
*/


/*
const sampleObject1 = {   //создание объектов для примера
    value: "juice",
}
const sampleObject2 = Object.create(sampleObject1);
sampleObject2.color = "red";
sampleObject2.taste="sweet";
*/

function isHasPropertyThisName(name,sampleObject) { //функция, которая принимает в качестве аргументов строку и объект, а затем проверяет, есть ли у переданного объекта свойство с данным именем. Функция возвращает true или false.
    for (let key in sampleObject) {

        if ( name in sampleObject) {
    
            console.log(true); 
        
        }   else console.log(false);
    }
}
isHasPropertyThisName('color',sampleObject2);
