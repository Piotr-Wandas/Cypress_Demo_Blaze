const { faker } = require('@faker-js/faker');

function generateUser() {
    const randomNumber = Math.random().toString().slice(2, 6);
    const username = faker.internet.userName() + '_' + randomNumber;
    const password = 'haslo123456';

    return { username, password };
}

module.exports = { generateUser };