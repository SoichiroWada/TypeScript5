//-----------------
// Generic Classes
//-----------------

class DataCollection<T> {
    constructor(private data: T[]) { }

    loadOne(): T | undefined {
        const randomNumber = Math.random()
        console.log('randomNumber:', randomNumber)
        console.log('this.data.length:', this.data.length)
        const i = Math.floor(randomNumber * this.data.length)
        console.log('randomNumber * this.data.length):', randomNumber * this.data.length)
        console.log('i:', i)

        return this.data[i]
    }
    loadAll(): T[] {
        return this.data
    }
    add(val: T): T[] {
        this.data.push(val)
        return this.data
    }
}

interface User {
    name: string
    score: number
}

const users = new DataCollection<User>([
    { name: 'shaun', score: 125 },
    { name: 'mario', score: 100 },
    { name: 'peach', score: 150 },
    { name: 'bundoka', score: 175 },
    { name: 'andoka', score: 95 },
])

users.add({ name: 'luigi', score: 50 })

console.log('load one - ', users.loadOne())
console.log('load all - ', users.loadAll())