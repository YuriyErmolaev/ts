"use strict";
function getProperty(obj, key) {
    return obj[key];
}
const person = {
    name: "John",
    age: 30,
    email: "john@example.com",
};
const name_ = getProperty(person, "name"); // тип name: string
const age = getProperty(person, "age"); // тип age: number
const email = getProperty(person, "email"); // тип email: string
const invalid = getProperty(person, "invalid"); // Ошибка компиляции: Аргумент типа '"invalid"' не может быть назначен параметру типа 'keyof Person'
console.log(age);
