// 1. Use strict
// Whole-script strict mode syntax
// JavaScript is very flexible
// flexible === dangerous
// added ECMAScript 5
// use this for Vanilla Javascript
'use strict';

// 2. Variable
// let (added in ES6)
let globalName = 'global name';
// 전역 변수는 항상 메모리에 탑재되어 있기 때문에 최소한으로 쓰는 것이 좋다.
// 가능하면 필요한 부분에서만 정의해서 사용하는 것이 좋다.
{
    let name = 'ellie';
    console.log(name);
    name = 'hello';
    console.log(name);
}
console.log(name);
console.log(globalName);

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top)
// has no block scope
// 변수를 선언하기도 전에 값을 사용할 수 있다.
// 호이스팅은 변수를 어디에 선언했느냐는 상관없이 항상 제일 위로 선언을 올려주는 것을 말한다.
// 변수를 블록 안에서 선언했음에도 불구하고 블록 밖에서 사용 가능하다.
{
    age = 4;
    var age;
}
console.log(age);

// 3. Constant, r(read only)
// use const whenever possible.
// only use let if variable needs to change.
const daysInWeek = 7;
const masNumber = 5;

// Note!
// Immutable data types: primitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes

// 4. Variable types
// primitive, single item: number, string, boolean, null, undefined, symbol
// object, box container
// primitive 타입은 값이 value로 저장되고, object는 object를 가리키는 레퍼런스가 메모리에 저장된다.
// function, first-class function
// 자바스크립트에서는 함수도 데이터 타입 중에 하나인데,
// 변수에 할당이 가능하고 함수의 인자로도 전달이 되고 return도 가능하다.

// 자바스크립트는 number라고 명시해주지 않아도 알아서 숫자로 인식한다.
const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`); // value: 17, type: number
console.log(`value: ${size}, type: ${typeof size}`); // value: 17.1, type: number

// number - special numeric values: infinity, -infinity, NaN
// 항상 연산을 할 때 유효한 값인지 확인하는 것이 중요하다.
const infinity = 1 / 0; // infinity
const negativeInfinity = -1 / 0; // -infinity
const nAn = 'not a number' / 2; // NaN
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
// 현재 크롬이나 파이어폭스에서만 지원 가능하다.
const bigInt = 12345678901234567890123456789012345678901234567890n; // over (-2**53 ~ 2*53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`); // value: hellobrendan, type: string
const helloBob = `hi ${brendan}!`; // template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`); // value: hi brendan!, type: string
console.log('value: ' + helloBob + ' type: ' + typeof helloBob); // not recommended

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`); // value: true, type: boolean
console.log(`value: ${test}, type: ${typeof test}`); // value: false, type: boolean

// null - 넌 텅텅 비어 있는 값이야
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`); // value: null, type: object

// undefined - 넌 아무것도 지정 안한 거야
let x;
console.log(`value: ${x}, type: ${typeof x}`); // value: undefined, type: undefined

// symbol, create unique identifiers for objects
// 똑같은 string으로 작성했어도 다른 symbol로 만들어지기 때문에
// 주어지는 string에 상관없이 고유한 식별자를 만들때 사용한다.
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // false
// 동일한 symbol을 만들고 싶다면...
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`); // value: id, type: symbol

// object, real-life object, data structure
// ellie는 const로 선언되어 있어서 한번 할당된 object는 다시는 변경이 불가하지만
// object 안에 있는 변수들의 값은 변경 가능하다.
const ellie = { name: 'ellie', age: 20 };
ellie.age = 21;

// 5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0)); // h
console.log(`value: ${text}, type: ${typeof text}`); // value: hello, type: string
text = 1;
console.log(`value: ${text}, type: ${typeof text}`); // value: 1, type: number
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`); // value: 75, type: string
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`); // value: 4, type: number
// 중간에 타입이 number로 변경되서 에러가 발생했다.
console.log(text.charAt(0)); // Error
