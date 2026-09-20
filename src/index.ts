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