// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) { body... return; }
// (중요) one function === one thing
// naming: doSomething, command, verb
// 함수의 이름을 짓기 어렵다면 하나의 함수에 너무 많은 동작을 하고 있는 건 아닌 지를 생각해볼 필요가 있다.
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
// TypeScript 홈페이지에 가면 Playground라는 페이지가 있는데,
// 왼쪽에 typescript로 작성하면 오른쪽에 javascript로 변환된 코드를 볼 수 있다.
/*
function log(message: string): number {
    console.log(message);
    return 0;
}
*/

// 2. Parameters
// primitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
    obj.name = 'coder';
}
const ellie = { name: 'ellie' };
changeName(ellie);
console.log(ellie); // {name: "coder"}

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
    /* 예전에는 사용자가 파리미터의 값을 전달하지 않을 경우 if문을 따로 작성해줬어야 했는데,
       지금은 파라미터에 직접 디폴트값을 설정하면 된다.
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
let globalMessage = 'global'; // global variable
function printMessage() {
    let message = 'hello'; // local variable
    console.log(message);
    console.log(globalMessage);
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
// 조건이 맞지 않는 경우를 먼저 작성하고 조건이 맞는 경우를 작성하는 것이 가독성이 좋다.
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
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it.
const print = function () {
    // anonymous function
    // 이름 없는 함수를 변수에 바로 할당할 수 있다.
    // 물론 이름 있는 함수(named function)를 변수에 할당할 수도 있다. 이건 뒤에서 더 설명해줄 것임...
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
// better debugging in debugger's stack traces
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
// function calculate(command, a , b)
// command: add, subtract, divide, multiply, remainder

function calculate(command, a, b) {
    switch (command) {
        case 'add':
            return a + b;
        case 'subtract':
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
