/*
    JSON
    - simplest data interchange format
    - lightweight text-based structure
    - easy to read
    - key-value pairs
    - used for serialization and transmission of data between the network the network connection
    - independent programming language and platform

    공부 포인트
    1. object를 어떻게 serialize해서 JSON으로 변환하는가?
    1. serialize된 JSON을 어떻게 deserialize해서 object로 변환하는가?
*/

'use strict';
// JSON
// JavaScript Object Notation

// 오버로딩 (Overloading)
// 함수의 이름은 동일하지만 어떤 파라미터를 전달하냐 몇 개의 파라미터를 전달하냐에 따라서
// 각각 다른 방식으로 호출이 가능하다.

// 1. Object to JSON
// stringify(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json); // ["apple","banana"]

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    // 자바스크립트에만 특별한 데이터도 JSON에 포함되지 않는다.
    // symbol: Symbol('id'),
    // jump라는 함수는 JSON에 포함되지 않는 것을 확인할 수 있는데,
    // 이 함수는 Object에 있는 데이터가 아니기 때문에 함수는 제외된다.
    jump: () => {
        console.log(`${this.name} can jump!`);
    },
};

json = JSON.stringify(rabbit);
console.log(json);

// 원하는 property만 뽑을 수 있다.
json = JSON.stringify(rabbit, ['name', 'color', 'size']);
console.log(json);

// 콜백함수를 이용해서 조금 더 세밀하게 통제할 수 있다.
json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'ellie' : value;
});
console.log(json);

// 2. JSON to Object
// parse(json)
console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
// rabbit를 JSON으로 변환했을 때 jump라는 함수는 포함되지 않았다.
// obj는 JSON으로 변환된 json을 Object 변환한 것이므로 jump라는 함수가 포함되어 있지 않아 에러가 발생했다.
//obj.jump(); // error

console.log(rabbit.birthDate.getDate());
//console.log(obj.birthData.getDate()); // error
// JSON으로 변환된 Date의 string 값이 obj에 할당되었기 에러가 발생했다.
//console.log(obj.birthData); // 2021-09-10T02:00:42.039Z

// return key === 'birthDate' ? new Date(value) : value; 라고 지정함.
console.log(obj.birthDate.getDate()); // 10
