//---------------------
// function signatures
//---------------------

type Calculator = (numOne: number, numTwo: number) => number

function addTwoNumber(a: number, b: number) {
	return a + b
}
function multiplyTwoNumbers(first: number, second: number) {
	return first * second
}
function squareNumber(num: number) {
	return num * num
}
function joinTwoNumbers(numOne: number, numTwo: number) {
	return `${numOne}${numTwo}`
}

let calcs: Calculator[] = []

calcs.push(addTwoNumber)
calcs.push(multiplyTwoNumbers)
calcs.push(squareNumber)
// calcs.push(joinTwoNumbers) --> not allowed, returns a string

//-----------------------------------
// function signatures on interfaces
//-----------------------------------

interface HasArea {
	name: string
	// calcArea: (a: number) => number
	calcArea(a: number): number
}

const shapeOne: HasArea = {
	name: 'square',
	calcArea(k: number) {
		return k * k
	},
}

const shapeTwo: HasArea = {
	name: 'circle',
	calcArea(r: number) {
		return (Math.PI * r) ^ 2
	},
}

//--------------------
// reusable interfaces
//--------------------

interface hasQuantity {
	quantity: number
}

// not allowed
// const something: hasQuantity = { title: 'hello', quantity: 50 }

// allowed
// const something: hasQuantity = { quantity: 50 }

function printQuantity(item: hasQuantity): void {
	// can only access known properties - quantity
	// console.log(`the quantity of this item is ${item.quantity}`)
	console.log(item.quantity)
}

const fruit = {
	name: 'mango',
	quantity: 50,
}
const vehicle = {
	type: 'car',
	quantity: 3,
}
const person2 = {
	name: 'mario',
	age: 30,
}

printQuantity(fruit)
printQuantity(vehicle)
// printQuantity(person2) --> not allowed

// passing object literals directly has to
// include only known interface properties
// printQuantity({ quantity: 50, title: 'something' })


type Cat = {
	meow: () => void
}

type Dog = {
	bark: () => void
}

function makeSound(animal: Cat | Dog) {
	if ("meow" in animal) {
		animal.meow()
	} else {
		animal.bark()
	}
}

// Define a cat object
const myCat: Cat = {
	meow: () => console.log("Meow! 🐱")
};

// Invoke the function
makeSound(myCat);

// Define a dog object
const myDog: Dog = {
	bark: () => console.log("Woof! 🐶")
};

// Invoke the function
makeSound(myDog);


//////////////////////////////////////////////
const aid = Symbol("aid")
const bbb = Symbol(123)

console.log(aid)
console.log(bbb)


//--------------
// type aliases
//--------------

// example 1 - tuple

type Rgb = [number, number, number]

function getRandomColor(): Rgb {
	const r = Math.floor(Math.random() * 255)
	const g = Math.floor(Math.random() * 255)
	const b = Math.floor(Math.random() * 255)

	return [r, g, b]
}

const colorOne = getRandomColor()
const colorTwo = getRandomColor()
console.log(colorOne, colorTwo)

// example 2 - object literal

type User = {
	name: string
	score: number
}

const userOne: User = { name: 'mario', score: 75 }

function formatUser(user: User): void {
	console.log(`${user.name} has a score of ${user.score}.`)
}

formatUser(userOne)
formatUser({ name: 'yoshi', score: 100 })

//------------
// interfaces
//------------

interface Author {
	name: string
	avatar: string
}

const authorOne: Author = { name: 'mario', avatar: '/img/mario.png' }
const authorTwo: Author = { name: 'Taro', avatar: '/img/doki.png' }

const time = new Date().toLocaleString()
const time2 = new Date().toLocaleDateString()
const time3 = new Date().toLocaleTimeString()
console.log(time)
console.log(time2)
console.log(time3)

interface Post {
	title: string
	body: string
	tags: string[]
	created_at: Date
	author: Author
}

const newPost: Post = {
	title: 'my first post',
	body: 'something interesting',
	tags: ['gaming', 'tech'],
	created_at: new Date(),
	author: authorOne,
}

const secondPost = {
	title: 'my second post',
	body: 'something getting worse',
	tags: ['gaming', 'tech'],
	created_at: new Date(),
	author: authorTwo,
}

//----------------------------
// as function argument types
//----------------------------

function createPost(post: Post): void {
	console.log(`created post ${post.title} by ${post.author.name}`)
}

// createPost({ title: 'a new post title' })
createPost(newPost)
createPost(secondPost)

//-------------
// with arrays
//-------------

let posts: Post[] = []

// posts.push({ title: 'some title' })
posts.push(newPost)
console.log(posts)
posts.push(secondPost)
console.log(posts)

//-----------------------
// return type inference
//-----------------------

function formatGreeting(name: string, greeting: string) {
	return `${greeting}, ${name}`
}

console.log(formatGreeting("Bundoka", "Aloha!"))

// we get inference on return types, but not on argument types
// type inference on return values does not enforce a return type


//-----------
// functions
//-----------

function addTwoNumbers(a: number, b: number): number {
	return a + b
}

const subtractTwoNumbers = (a: number, b: number): number => {
	return a - b
}

// addTwoNumbers('2', 5)
addTwoNumbers(3, 9)
subtractTwoNumbers(10, 7)

function addAllNumbers(items: number[]): void {
	const total = items.reduce((a, c) => a + c, 0)
	console.log("total:", total);
}

addAllNumbers([5, 7, 9, 11, 3, 2, 1])

//------------------------
// basic type annotations
//------------------------

let ageOne: number = 30
let firstName: string = 'Mario'
let isFictional: boolean

// age = 'hello'
ageOne = 31

// firstName = 100
firstName = 'Luigi'

// isFictional = 'false'
isFictional = false

//----------------
// type inference
//----------------

let planet = 'Earth'
let moons = 1
let isLarge = false

// planet = 10
planet = 'Saturn'

// moons = '145'
moons = 145

// isLarge = 'yes'
isLarge = true

//------------------
// null & undefined
//------------------

let something: null
let anotherThing: undefined

// something = 10
something = null

// anotherThing = 'hello, world'
anotherThing = undefined

//////////////////////////////
let height;
height = 195;
height = "TESETSD"

//--------
// arrays
//--------

let names: string[] = ['mario', 'luigi', 'peach']
let ages: number[] = [25, 28, 24]

// names.push(true)
names.push('bowser')
names.push('Bundoka')
names.push('Vetelgius')

// ages.push('35')
ages.push(30)

//----------------------------
// type inference with arrays
//----------------------------

let fruits = ['apples', 'pears', 'bananas', 'mangos']

// fruits.push(20)
fruits.push('peaches')

const f = fruits[3] // infers the type based on fruits type

let things = [1, true, 'hello']

const t = things[0] // can be any of the types initially added

//-----------------
// object literals
//-----------------

let user: { firstName: string; age: number; id: number } = {
	firstName: 'mario',
	age: 30,
	id: 1,
	// isFictional: true
}

// user.name = 25
// user.email = 'peach@netninja.dev'
user.firstName = 'peach'
user.id = 2

// destructuring from objects
const { age, id }: { age: number; id: number } = user

console.log(names)
console.log(user)
console.log(fruits)

//-------------------------------------
// type inference with object literals
//-------------------------------------

let person = {
	name: 'luigi',
	score: 35,
}

// person.name = true
// person.id = 3
person.name = 'bowser'

const score = person.score // infers number type