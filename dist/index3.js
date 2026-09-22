"use strict";
//------------------------
// extending type aliases
//------------------------
Object.defineProperty(exports, "__esModule", { value: true });
const personOne = {
    id: 1,
    firstName: 'mario',
};
const personTwo = {
    id: '2',
    firstName: 'yoshi',
    email: 'yoshi@netninja.dev',
};
const personThree = {
    email: 'peach@netninja.dev',
};
function printUser(user) {
    console.log(user.id, user.email, user.firstName);
}
function printUser2(user) {
    console.log(user.id, user.firstName);
}
// printUser(personOne)// --> not allowed
printUser(personTwo);
// printUser(personThree)// --> not allowed
printUser2(personOne);
printUser2(personTwo);
// printUser2(personThree)// --> not allowed
//# sourceMappingURL=index3.js.map