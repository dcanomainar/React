const salute = function (name) {
    return `Hi ${name}`;
}

const salute2 = (name) => {
    return `Hi ${name}`;
}

const salute3 = (name) => `Hi ${name}`;
const salute4 = () => `Hi World`;

console.log(salute3('name'));
console.log(salute4());

const getUser = () => ({
    uid: 'ABC123',
    username: 'userAbc'
});

console.log(getUser());

const getActiveUser = (name) => ({
    uid: 'ABC567',
    username: name
});

const activeUser = getActiveUser('Name');

console.log(activeUser);