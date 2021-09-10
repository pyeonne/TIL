'use strict';

// JavaScript is synchronous.
// Execute the code block in order after hoisting.
// 호이스팅된 이후부터 코드가 작성한 순서에 맞춰 하나씩 동기(자동)적으로 실행된다.
// hoisting: var, function declaration
console.log(1);
// setTimeout()과 같은 브라우저 API는 브라우저에 바로 요쳥한다.
// 1초 뒤에 브라우저가 실행해라고 명령을 해야 콜백 함수가 실행된다.
// 이것이 바로 비동기적인 실행 방법이다.
setTimeout(() => console.log(2), 1000);
console.log(3);

// 콜백에도 동기적으로 실행하는 방법이 있고, 비동기적으로 실행하는 방법이 있다.
// Synchronous callback
function printImmediately(print) {
    print();
}

printImmediately(() => console.log('hello'));

// Asynchronous callback
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}

printWithDelay(() => console.log('async callback'), 2000);

// Callback Hell example
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if ((id === 'ellie' && password === 'dream') || (id === 'coder' && password === 'academy')) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'ellie') {
                onSuccess({ name: 'ellie', role: 'admin' });
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id,
    password,
    user => {
        userStorage.getRoles(
            user,
            userWidthRole => {
                alert(`Hello ${userWidthRole.name}, you have a ${userWidthRole.role} role`);
            },
            error => {
                console.log(error);
            },
        );
    },
    error => {
        console.log(error);
    },
);

// 콜백 체인의 문제점 - 콜백지옥!
// 1. 가독성이 많이 떨어진다. 비즈니스 로직을 한 눈에 이해하기 굉장히 어렵다.
// 2. 디버깅을 하거나 문제를 분석하기도 어렵다.
// 3. 유지보수도 어렵다.
