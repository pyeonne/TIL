const num = 1;
const num2 = 2;
const result = num + num2;
console.log(result);

const num3 = 1;
const num4 = 2;
const result2 = num3 + num4;

function add(num1, num2) {
    return num1 + num2;
}

const sum = add(3, 4);
console.log(sum); // 7

// 함수도 object의 일종이다.
// 함수의 이름에는 함수가 정의되어 있는 공간을 가리키는 reference가 들어 있다.
const doSomething = add;

// doSomething은 add와 같은 공간을 가리키는 reference가 들어 있기 때문에 똑같이 동작한다.
const result3 = doSomething(2, 3);
console.log(result3); // 5
const result4 = add(2, 3);
console.log(result4); // 5

function print(name, age) {
    console.log(`${name} ${age}`);
}

// 아무런 인자를 받지 않는 함수는 input을 받지 않는다.
// 함수의 인자는 조금 더 의미있는 이름을 사용하는 것이 좋다.
print(8, 33);

function divide(num1, num2) {
    return num1 / num2;
}

function surprise(operator) {
    const result = operator(2, 3); // add(2, 3)
    console.log(result); // 5
}

// 함수에 다른 함수에 인자로 전달하는 것은 그 함수의 reference가 복사되어 전달되는 것이다.
surprise(add);
