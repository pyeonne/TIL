'use strict';
class UserStorage {
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    async loginUser(id, password) {
        await this.delay(2000);
        if ((id === 'ellie' && password === 'dream') || (id === 'coder' && password === 'academy')) {
            return id;
        } else {
            throw 'not found';
        }
    }

    async getRoles(user) {
        await this.delay(1000);
        if (user === 'ellie') {
            return { name: 'ellie', role: 'admin' };
        } else {
            throw 'no access';
        }
    }
    // 이거 추가함
    async getUserWithRole(user, password) {
        const id = await this.loginUser(user, password);
        const role = await this.getRoles(id);
        return role;
    }
}
// promise chaining -> ✨ async/await ✨
const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage
    .getUserWithRole(id, password) //
    .catch(console.log)
    .then(user => alert(`Hello ${user.name}, you have a ${user.role} role`));

('use strict');

const solution = new_id => {
    const answer = new_id
        .toLowerCase()
        .replace(/[^a-z0-9-_.]/g, '')
        .replace(/\.{2,}/g, '.')
        .replace(/^\.|.$/g, '')
        .padEnd(1, 'a')
        .slice(0, 15)
        .replace(/^\.$/g, '')
        .padEnd(3, answer[answer.length - 1]);

    return answer;
};
