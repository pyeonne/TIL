// false: 0, -0, '', null, undefined
// 데이터가 없고 비어 있는 것은 false에 속한다.
// 단, 텅텅 비어져 있는 array는 object 그 자체이기 때문에 true이다.
// true: -1, 'hello', [], 'false'
let num; // undefined
if (num) {
    console.log(num);
}

// && 연산자는 앞의 구문이 true면 뒤의 구문이 실행된다.
// num이 undefined이기 때문에 뒤의 구문이 실행이 되지 않는다.
num && console.log(num);

let obj = {
    name: 'ellie',
};

if (obj) {
    console.log(obj.name);
}

// && 연산자를 사용하는 것은 위의 구문과 동일하다.
obj && console.log(obj.name);
