// 1. String concatenation
console.log('my' + 'cat');
console.log('1' + 2); // 12
console.log(`string literals: 

''''
1 + 2 = ${1 + 2}`); // 1 + 2 = 3

console.log("ellie's \n\tbook"); // \n(enter), \t(tab)
// ellie's
// 	 book
// 특수문자열 검색해서 알아보기!

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // subtract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`); // preIncrement: 3, counter: 3
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`); // preIncrement: 3, counter: 4
const preDecrement = --counter;
console.log(`preIncrement: ${preDecrement}, counter: ${counter}`); // preIncrement: 3, counter: 3
const postDecrement = counter--;
console.log(`preIncrement: ${preDecrement}, counter: ${counter}`); // preIncrement: 3, counter: 2

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; //  x = x + y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// 중요!
// 6. Logical operators: || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

// || (or), finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`);
// or 연산자는 어느 하나라도 true가 나오면 뒤에 true인 조건이 있든 상관없이 연산을 멈춘다!
// 연산을 많이 하는 함수를 호출하거나 expression같은 아이들은 제일 뒤에 두는 것이 효율적이다.

// && (and), finds the first falsy value
// 모든 조건이 true여야 true
console.log(`and: ${value1 && value2 && check()}`);

// often used to compress long if-statement
// nullableObject && nullableObject.something
/*
if (nullableObject != null) {
    nullableObject.something;
}
*/

// check라는 함수는 쓸데없는 시간을 낭비하다가 결국에는 true로 리턴한다.
function check() {
    for (let i = 0; i < 10; i++) {
        //wasting time
        console.log('😱');
    }
    return true;
}

// ! (not)
console.log(!value1);

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive); // true
console.log(stringFive != numberFive); // false

// === strict equality, no type conversion - 웬만하면 코드 검사할때 strict equality를 사용해라
console.log(stringFive === numberFive); // false
console.log(stringFive !== numberFive); // true

// object equality by reference
const ellie1 = { name: 'ellie' };
const ellie2 = { name: 'ellie' };
const ellie3 = ellie1;
console.log(ellie1 == ellie2); // false - 서로 다른 레퍼런스를 가지고 있다.
console.log(ellie1 === ellie2); // false
console.log(ellie1 === ellie3); // true

// equality - puzzler
console.log(0 == false); // true
console.log(0 === false); // false
console.log('' == false); // true
console.log('' === false); // false
console.log(null == undefined); // true
console.log(null === undefined); // false

// 8. COnditional operators: if
// if, else if, else
const name = 'df';
if (name === 'ellie') {
    console.log('Welcome, Ellie!');
} else if (name === 'coder') {
    console.log('You are amazing coder');
} else {
    console.log('unknown');
}

// 9. Ternary operator: ? - 간단할 때만 사용하기
// condition ? value1 : value2;
console.log(name === 'ellie' ? 'yes' : 'no');

// 10. Switch statement
// use for multiple if checks
// use for enum-lke value check
// use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
    case ' IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}
// while: 3
// while: 2
// while: 1

// do while loop, body code is executed first,
// then check the condition.
// {} 블럭을 먼저 실행하고 싶으면 do while, 조건문이 맞을 떄만 실행하고 싶으면 while
do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);
// do while: 0

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
    //inline variable declaration
    console.log(`inline variable for: ${i}`);
}

// nested loops - 되도록이면 피하라
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}

// break, continue
// Q1.  from 0 to 10 and print only even numbers (use continue)
for (let i = 0; i < 11; i++) {
    if (i % 3 === 0) {
        // 짝수를 출력하게 하려면 홀수를 걸러내야 한다.
        continue;
    }
    console.log(`q1. ${i}`);
}

for (let i = 0; i < 11; i++) {
    if (i % 2 === 0) {
        console.log(`q1. ${i}`);
    }
}

// Q2. iterate from 0 to 10 and print numbers until reaching 8 {use break}
for (let i = 0; i < 11; i++) {
    if (i > 8) {
        break;
    }
    console.log(`q2. ${i}`);
}

// 레이블보다 더 좋은 코드가 있기때문에 잘 사용안하는 편
