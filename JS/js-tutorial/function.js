// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Funciton declaration
// function name(param1, param2) { body... return; }
// (!!!) one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS
function printHello() {
    console.log('Hello');
}
printHello();

function log(message) {
    console.log(message);
}
log('Hello@');
log(1234);
// 보다시피 자바스크립트는 어떤 타입을 파라미터로 가져오는지 정확히 명시가 되어 있지 않아서 문제가 발생할 수 있다.
// 그래서 규모가 큰 프로젝트를 할 때는 TypeScript를 사용하는 것이 좋다.
// 파라미터 값이 어떤 타입으로 가져오는지 리턴값은 어떤 타입으로 하는지 정확하게 명시되어 있다.
/*
function log(message: string): number {
    console.log(message);
    return 0;
}
*/

// 2. Parameters
// primitive parameters: passed by value
// object parameters: pased by reference
function changeName(obj) {
    obj.name = 'coder';
}
const ellie = { name: 'ellie' };
changeName(ellie);
console.log(ellie); // {name: "coder"}

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
    /* 예전 방식
    if (from === undefined) {
        from = 'unknown';
    }
    */
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// 4. Rest parameters (added in ES6)
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }

    // 위 코드를 이렇게 간단하게도 작성 가능하다.
    for (const arg of args) {
        console.log(arg);
    }

    // 더 간단하게도 작성 가능. 배열 파트에서 더 자세하게 알려 줄 예정
    args.forEach(arg => console.log(arg));
}
printAll('dream', 'coding', 'ellie');

// 5. Local scope
// 밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다.
let golobalMessage = 'global'; // global variable
function printMessage() {
    let message = 'hello'; // local vlriable
    console.log(message);
    console.log(golobalMessage);
    function printAnother() {
        console.log(message);
        let childMessage = 'hello';
    }
    // console.log(childMessage); // Error
}
printMessage();
// console.log(message); // Error

// 6. Return a value
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
// bad
function upgradeUser(user) {
    if (user.point > 10) {
        // long upgrade logic...
    }
}

// good
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }
    // long upgrade logic...
}

// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function

// 1. Function expression
// a function delaration can be called earlier than it is defiend. (hoisted)
// a function expression is created when the execution reaches it.
const print = function () {
    // anonymous function
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}
// anonymous function
const printYes = function () {
    console.log('yes!');
};

// named function
// betther debugging in debugger's stack traces
// recursions - 함수 안에서 자기자신 함수를 호출하는 것, 무한으로 호출하므로 필요할 때만 사용하기
const printNo = function print() {
    console.log('no!');
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// always anonymous
/*
const simplePrint = function () {
    console.log('simplePrint!');
};
*/

const simplePrint = () => console.log('simplePrint!');
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
    // do something more
    return a * b;
};

// IIFE: Immediately Invoked Function Expression
// 요즘은 잘 사용 안함. 확인하기위한 용도.
(function hello() {
    console.log('IIFE');
})();

// Fun quiz time
// function calclate(command, a , b)
// command: add, substract, divide, multiply, remainder

function calculate(command, a, b) {
    switch (command) {
        case 'add':
            return a + b;
        case 'substract':
            return a - b;
        case 'divide':
            return a / b;
        case 'multiply':
            return a * b;
        case 'remainder':
            return a % b;
        default:
            throw Error('unknown command');
    }
}
console.log(calculate('add', 2, 3));
