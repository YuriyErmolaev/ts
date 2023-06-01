const   obj = {},
        arr = ['a', 'b', 'c'];
        const value = 'value';


let currentObj: any = obj;

for (let i = 0; i < arr.length - 1; i++) {

    const key = arr[i];
    if (!currentObj[key]) {
        currentObj[key] = {};
    }
    currentObj = currentObj[key];

}
currentObj[arr[arr.length - 1]] = value;


console.log('obj: ', obj);//obj:  { a: { b: { c: 'value' } } }
console.log('currentObj: ', currentObj);//currentObj:  { c: 'value' }

// В данном коде создается вложенный объект, который состоит из нескольких уровней вложенности.
// При каждой итерации цикла создается новый объект, который является свойством предыдущего объекта.
// Таким образом, каждый объект имеет свою собственную область памяти, и ссылки на них разные.
//
// В конце цикла переменная `currentObj` указывает на последний созданный объект,
// который имеет свойство с ключом `c` и значением `value`.
// Поэтому при выводе в консоль `currentObj` выводится только этот объект.
//
// А переменная `obj` является корневым объектом, который содержит в себе все созданные объекты.
// Поэтому при выводе в консоль `obj` выводится весь созданный объект
// с вложенными объектами и свойством `c` со значением `value`.