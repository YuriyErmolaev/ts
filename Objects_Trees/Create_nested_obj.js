"use strict";
const obj = {};
const arr = ['a', 'b', 'c'];
const value = 'value';
let currentObj = obj;
for (let i = 0; i < arr.length - 1; i++) {
    const key = arr[i];
    if (!currentObj[key]) {
        currentObj[key] = {};
    }
    currentObj = currentObj[key];
}
currentObj[arr[arr.length - 1]] = value;
console.log('obj: ', obj);
