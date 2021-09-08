'use strict';
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key : value };
// object는 key(우리가 접근할 수 있는 변수, property)와 value(property가 가지고 있는 값)의 집합체이다.

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

// 자바스크립에서는 클래스가 없어도 괄호를 이용해 오브젝트를 바로 생성할 수 있다.
const ellie = { name: 'ellie', age: 4 };
print(ellie);

// width JavaScript magic (dynamically typed language)
// can add properties later
ellie.hasJob = true;
console.log(ellie.hasJob);

// can delete properties later
delete ellie.hasJob;
console.log(ellie.hasJob);

// 2. Computed properties
// key should be always string
// 실시간으로 키의 값을 받아오고 싶을 때 사용한다.
console.log(ellie.name);
console.log(ellie['name']);
ellie['hasJob'] = true;
console.log(ellie.hasJob);

function printValue(obj, key) {
    console.log(obj[key]);
}

printValue(ellie, 'name');
printValue(ellie, 'age');

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = makePerson('ellie', 30);
console.log(person4);
function makePerson(name, age) {
    return {
        // key와 value의 이름이 동일하다면 생락 가능하다.
        name,
        age,
    };
}

// 4. Constructor function
const person5 = new Person('hana', 30);
console.log(person5);

function Person(name, age) {
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}

// 5. in operator: property existence check (key in obj)
// in이라는 키워드를 사용해서 해당하는 object 안에 key가 있는지 확인할 수 있다.
console.log('name' in ellie);
console.log('age' in ellie);
console.log('random' in ellie); // false
console.log(ellie.random); // undefined

// 6. for..in vs for..of
// for (key in obj)
console.clear(); // 이전 로그들이 삭제된다.
for (let key in ellie) {
    console.log(key);
}

// for (value of iterable)
const array = [1, 2, 3, 4, 5];
/*
for (let i = 0; i < array.length; i++) [
    console.log(array[i]);
]
*/
// 위의 코드를 조금 더 쉽게 하는 방법은...
for (let value of array) {
    console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'ellie', age: '20' };
const user2 = user;
user2.name = 'coder';
console.log(user); // {name: "coder", age: "20"}

// old way
const user3 = {};
for (let key in user) {
    user3[key] = user[key];
}
console.clear();
console.log(user3); // {name: "coder", age: "20"}

// new way
const user4 = Object.assign({}, user);
console.log(user4); // {name: "coder", age: "20"}

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
// 가장 나중에 작성된 property가 덮어 씌워진다.
console.log(mixed.color); // blue
console.log(mixed.size); // big
