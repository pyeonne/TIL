// Promise is a JavaScript object for asynchronous operation.
// State: pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// when new Promise is created, the executor runs automatically.
// promise를 만드는 순간 executor라는 콜백 함수가 바로 실행된다.
// 만약 사용자가 버튼을 눌렀을 때 네트워크 요청을 해야 되는 경우라면
// 사용자가 요구하지 않았는데 불필요한 네트워크 통신이 발생할 수 있다.
const promise = new Promise((resolve, reject) => {
    // doing some heavy work (network, read files)
    console.log('doing something...');
    setTimeout(() => {
        // resolve('ellie');
        // Error는 자바스크립트의 기본 Object
        reject(new Error('no network'));
    }, 2000);
});

// 2. Consumers: then, catch, finally
promise
    // 성공한 값 (resolve)
    .then(value => {
        console.log(value);
    })
    // 실패한 값 (reject)
    .catch(error => {
        console.log(error);
    })
    // 성공하든 실패하든 상관없이 호출됨
    .finally(() => {
        console.log('finally');
    });

// 3. Promise chaining
// 비동기적인 아이들을 묶어서 처리할 수 있다.
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
    .then(num => num * 2) // 2
    .then(num => num * 3) // 6
    .then(num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num - 1), 1000);
        });
    })
    .then(num => console.log(num)); // 5

// 4. Error Handling
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('🐔'), 1000);
    });
const getEgg = hen =>
    new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error(`${hen} => 🥚`)), 1000);
    });
const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 🍳`), 1000);
    });

getHen()
    // 받은 값을 그대로 전달하는 경우 생략 가능하다.
    // .then(hen => getEgg(hen))
    // .then(egg => cook(egg))
    // .then(meal => console.log(meal));

    // 발생하는 에러를 처리하고 싶으면 그 다음에 catch 구문을 작성하면 해결할 수 있다.
    .then(getEgg)
    .catch(error => '🥖')
    .then(cook)
    .then(console.log)
    .catch(console.log);
