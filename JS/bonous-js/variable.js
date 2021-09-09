// number, string, boolean, null, undefined
let number = 2;
let number2 = number;

console.log(number); // 2
console.log(number2); // 2

// number2는 number를 복사해 온 것이기 때문에
// number2의 값을 변경해도 number에는 영향을 주지 않는다.
number2 = 3;

console.log(number); // 2
console.log(number2); // 3

// object
const obj = {
    name: 'ellie',
    age: 5,
};
console.log(obj.name); // ellie

// obj2의 주소(reference)만 obj에 복사되어져 온다.
let obj2 = obj;
console.log(obj2.name); // ellie

obj.name = 'james';
console.log('----------');
console.log(obj.name); // james
console.log(obj2.name); // james

// 중요!
// primitive type은 값 자체가 담겨져 있어서 const로 변수를 선언했을 때 값을 변경할 수 없다.
// object type은 값 자체가 담겨져 있는 것이 아니라 어딘가 다른 공간에 담겨져 있고, 그 공간을 가리키는 reference가 담겨져 있다.
// 그래서 이 reference는 다른 object로는 변경이 불가능하지만, reference가 가리키는 값은 변경할 수 있다.
