// async & await
// clear style of using promise :)

// 1. async
/*
function fetchUser() {
    // then이라는 콜백 함수만 등록해놓으면 유저의 데이터가 준비되는 데로
    // 등록한 콜백 함수를 불러 준다고 약속한 것
    return new Promise((resolve, reject) => {
        // do network request in 10 secs...
        resolve('ellie');
    });
}
*/

// async 키워드를 함수 앞에 작성하면 코드 블럭이 자동으로 Promise로 변환된다.
// Promise를 조금 더 간편하게 사용할 수 있게 해주는 Syntactic Sugar.
async function fetchUser() {
    // do network request in 10 secs...
    return 'ellie';
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(2000);
    // throw 'error';
    return '🍎';
}

async function getBanana() {
    await delay(1000);
    return '🍌';
}

/* 이것 또한 콜백 지옥을 경혐할 수 있다.
function pickFruits() {
    return getApple().then(apple => {
        getBanana().then(banana => `${apple} + ${banana}`);
    });
}

pickFruits().then(console.log);
*/

async function pickFruits() {
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
}

pickFruits().then(console.log); // 🍎 + 🍌

// 3. useful Promise APIs
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()]).then(fruits => fruits.join(' + '));
}

pickAllFruits().then(console.log); // 🍎 + 🍌

function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log); // 🍌
