function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function loginUser(id, password) {
    await delay(2000);
    if ((id === 'ellie' && password === 'dream') || (id === 'coder' && password === 'academy')) {
        return id;
    } else {
        return new Error('not found');
    }
}

async function getRoles(user) {
    await delay(1000);
    if (user === 'ellie') {
        return { name: 'ellie', role: 'admin' };
    } else {
        return new Error('no access');
    }
}

const id = prompt('enter your id');
const password = prompt('enter your password');
loginUser(id, password)
    .then(getRoles)
    .then(user => alert(`Hello ${user.name}, you have a ${user.role} role`))
    .catch(console.log);

// class UserStorage 안에 작성하면 왜 에러가 나는 걸까?
