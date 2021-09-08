'use strict';

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['🍎', '🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[fruits.length - 1]); // 배열의 마지막 Index

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
// forEach() 함수는 콜백 함수를 호출한다.
fruits.forEach(fruit => console.log(fruit));

// 4. Addition, deletion, copy
// push: add an item to the end
fruits.push('🍓', '🍑');
console.log(fruits); // (4) ['🍎', '🍌', '🍓', '🍑']

// pop: remove an item from the end
fruits.pop();
// pop된 데이터들은 리턴되므로 변수에 할당할 수 있다.
const poped = fruits.pop();
console.log(fruits); // (2) ['🍎', '🍌']

// unshift: add an item to the beginning
fruits.unshift('🍓', '🍋');
console.log(fruits); // (4) ['🍓', '🍋', '🍎', '🍌']

// shift: remove an item from the beginning
fruits.shift();
fruits.shift();
console.log(fruits); // (2) ['🍎', '🍌']

// note!! shift, unshift are slower than pop, push
// shift, unshift operation은 전체의 데이터가 움직여야 한다.
// 배열이 길수록 더 오래 걸리며 되도록이면 pop, push를 사용하는 것이 효율적이다.
// 중간에 Index를 추가하거나 삭제하는 것은 빠르다.

// splice: remove an item by index position
fruits.push('🍓', '🍑', '🍋');
console.log(fruits); // (5) ['🍎', '🍌', '🍓', '🍑', '🍋']
fruits.splice(1, 1);
// 원하는 갯수를 지정하지 않으면 시작점부터 끝까지 지워진다.
console.log(fruits); // (4) ['🍎', '🍓', '🍑', '🍋']
// 지우고 나서 원하는 데이터도 삽입 가능하다.
fruits.splice(1, 1, '🍏', '🍉');
console.log(fruits); // (5) ['🍎', '🍏', '🍉', '🍑', '🍋']

// combine two arrays
const fruits2 = ['🥭', '🥥'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits); // (7) ['🍎', '🍏', '🍉', '🍑', '🍋', '🥭', '🥥']

// 5. Searching
// indexOf: find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍎')); // 0
console.log(fruits.indexOf('🍉'));
// 배열 안에 데이터가 없으면 -1을 출력한다.
console.log(fruits.indexOf('🥥')); // -1

// includes
console.log(fruits.includes('🍉')); // true
console.log(fruits.includes('🥥')); // false

// lastIndexOf
console.clear();
fruits.push('🍎');
// indexOf는 가장 첫번째로 존재하는 Index의 값을 리턴한다.
console.log(fruits.indexOf('🍎')); // 0
console.log(fruits.lastIndexOf('🍎')); // 5
