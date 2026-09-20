"use strict";
//--------------
// type aliases
//--------------
Object.defineProperty(exports, "__esModule", { value: true });
function getRandomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return [r, g, b];
}
const colorOne = getRandomColor();
const colorTwo = getRandomColor();
console.log(colorOne, colorTwo);
const userOne = { name: 'mario', score: 75 };
function formatUser(user) {
    console.log(`${user.name} has a score of ${user.score}.`);
}
formatUser(userOne);
formatUser({ name: 'yoshi', score: 100 });
const authorOne = { name: 'mario', avatar: '/img/mario.png' };
const authorTwo = { name: 'Taro', avatar: '/img/doki.png' };
const time = new Date().toLocaleString();
const time2 = new Date().toLocaleDateString();
const time3 = new Date().toLocaleTimeString();
console.log(time);
console.log(time2);
console.log(time3);
const newPost = {
    title: 'my first post',
    body: 'something interesting',
    tags: ['gaming', 'tech'],
    created_at: new Date(),
    author: authorOne,
};
const secondPost = {
    title: 'my second post',
    body: 'something getting worse',
    tags: ['gaming', 'tech'],
    created_at: new Date(),
    author: authorTwo,
};
//----------------------------
// as function argument types
//----------------------------
function createPost(post) {
    console.log(`created post ${post.title} by ${post.author.name}`);
}
// createPost({ title: 'a new post title' })
createPost(newPost);
createPost(secondPost);
//-------------
// with arrays
//-------------
let posts = [];
// posts.push({ title: 'some title' })
posts.push(newPost);
console.log(posts);
posts.push(secondPost);
console.log(posts);
//-----------------------
// return type inference
//-----------------------
function formatGreeting(name, greeting) {
    return `${greeting}, ${name}`;
}
console.log(formatGreeting("Bundoka", "Aloha!"));
// we get inference on return types, but not on argument types
// type inference on return values does not enforce a return type
//-----------
// functions
//-----------
function addTwoNumbers(a, b) {
    return a + b;
}
const subtractTwoNumbers = (a, b) => {
    return a - b;
};
// addTwoNumbers('2', 5)
addTwoNumbers(3, 9);
subtractTwoNumbers(10, 7);
function addAllNumbers(items) {
    const total = items.reduce((a, c) => a + c, 0);
    console.log("total:", total);
}
addAllNumbers([5, 7, 9, 11, 3, 2, 1]);
//------------------------
// basic type annotations
//------------------------
let ageOne = 30;
let firstName = 'Mario';
let isFictional;
// age = 'hello'
ageOne = 31;
// firstName = 100
firstName = 'Luigi';
// isFictional = 'false'
isFictional = false;
//----------------
// type inference
//----------------
let planet = 'Earth';
let moons = 1;
let isLarge = false;
// planet = 10
planet = 'Saturn';
// moons = '145'
moons = 145;
// isLarge = 'yes'
isLarge = true;
//------------------
// null & undefined
//------------------
let something;
let anotherThing;
// something = 10
something = null;
// anotherThing = 'hello, world'
anotherThing = undefined;
//////////////////////////////
let height;
height = 195;
height = "TESETSD";
//--------
// arrays
//--------
let names = ['mario', 'luigi', 'peach'];
let ages = [25, 28, 24];
// names.push(true)
names.push('bowser');
names.push('Bundoka');
names.push('Vetelgius');
// ages.push('35')
ages.push(30);
//----------------------------
// type inference with arrays
//----------------------------
let fruits = ['apples', 'pears', 'bananas', 'mangos'];
// fruits.push(20)
fruits.push('peaches');
const f = fruits[3]; // infers the type based on fruits type
let things = [1, true, 'hello'];
const t = things[0]; // can be any of the types initially added
//-----------------
// object literals
//-----------------
let user = {
    firstName: 'mario',
    age: 30,
    id: 1,
    // isFictional: true
};
// user.name = 25
// user.email = 'peach@netninja.dev'
user.firstName = 'peach';
user.id = 2;
// destructuring from objects
const { age, id } = user;
console.log(names);
console.log(user);
console.log(fruits);
//-------------------------------------
// type inference with object literals
//-------------------------------------
let person = {
    name: 'luigi',
    score: 35,
};
// person.name = true
// person.id = 3
person.name = 'bowser';
const score = person.score; // infers number type
//# sourceMappingURL=index.js.map