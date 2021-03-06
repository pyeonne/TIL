'use strict';

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['π', 'π'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[fruits.length - 1]); // λ°°μ΄μ λ§μ§λ§ Index

console.clear();
// 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
    console.log(fruit);
}

// c. forEach
// forEach() ν¨μλ μ½λ°± ν¨μλ₯Ό νΈμΆνλ€.
fruits.forEach(fruit => console.log(fruit));

// 4. Addition, deletion, copy
// push: add an item to the end
fruits.push('π', 'π');
console.log(fruits); // (4)Β ['π', 'π', 'π', 'π']

// pop: remove an item from the end
fruits.pop();
// popλ λ°μ΄ν°λ€μ λ¦¬ν΄λλ―λ‘ λ³μμ ν λΉν  μ μλ€.
const poped = fruits.pop();
console.log(fruits); // (2)Β ['π', 'π']

// unshift: add an item to the beginning
fruits.unshift('π', 'π');
console.log(fruits); // (4)Β ['π', 'π', 'π', 'π']

// shift: remove an item from the beginning
fruits.shift();
fruits.shift();
console.log(fruits); // (2)Β ['π', 'π']

// note!! shift, unshift are slower than pop, push
// shift, unshift operationμ μ μ²΄μ λ°μ΄ν°κ° μμ§μ¬μΌ νλ€.
// λ°°μ΄μ΄ κΈΈμλ‘ λ μ€λ κ±Έλ¦¬λ©° λλλ‘μ΄λ©΄ pop, pushλ₯Ό μ¬μ©νλ κ²μ΄ ν¨μ¨μ μ΄λ€.
// μ€κ°μ Indexλ₯Ό μΆκ°νκ±°λ μ­μ νλ κ²μ λΉ λ₯΄λ€.

// splice: remove an item by index position
fruits.push('π', 'π', 'π');
console.log(fruits); // (5)Β ['π', 'π', 'π', 'π', 'π']
fruits.splice(1, 1);
// μνλ κ°―μλ₯Ό μ§μ νμ§ μμΌλ©΄ μμμ λΆν° λκΉμ§ μ§μμ§λ€.
console.log(fruits); // (4)Β ['π', 'π', 'π', 'π']
// μ§μ°κ³  λμ μνλ λ°μ΄ν°λ μ½μ κ°λ₯νλ€.
fruits.splice(1, 1, 'π', 'π');
console.log(fruits); // (5)Β ['π', 'π', 'π', 'π', 'π']

// combine two arrays
const fruits2 = ['π₯­', 'π₯₯'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits); // (7)Β ['π', 'π', 'π', 'π', 'π', 'π₯­', 'π₯₯']

// 5. Searching
// indexOf: find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('π')); // 0
console.log(fruits.indexOf('π'));
// λ°°μ΄ μμ λ°μ΄ν°κ° μμΌλ©΄ -1μ μΆλ ₯νλ€.
console.log(fruits.indexOf('π₯₯')); // -1

// includes
console.log(fruits.includes('π')); // true
console.log(fruits.includes('π₯₯')); // false

// lastIndexOf
console.clear();
fruits.push('π');
// indexOfλ κ°μ₯ μ²«λ²μ§Έλ‘ μ‘΄μ¬νλ Indexμ κ°μ λ¦¬ν΄νλ€.
console.log(fruits.indexOf('π')); // 0
console.log(fruits.lastIndexOf('π')); // 5
