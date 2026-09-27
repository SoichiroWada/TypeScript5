//---------------------
// Generic Constraints
//---------------------

interface HasId {
    id: number
}

class DataCollection<T extends HasId> {
    constructor(private data: T[]) { }

    loadOne(): T | undefined {
        const i = Math.floor(Math.random() * this.data.length)
        return this.data[i]
    }
    loadAll(): T[] {
        return this.data
    }
    add(val: T): T[] {
        this.data.push(val)
        return this.data
    }
    deleteOne(id: number): void {
        this.data = this.data.filter((item) => item.id !== id)
    }
}

interface User {
    name: string
    score: number
    id: number
}

const users = new DataCollection<User>([
    { name: 'shaun', score: 125, id: 1 },
    { name: 'mario', score: 100, id: 2 },
    { name: 'peach', score: 150, id: 3 },
    { name: 'ebious', score: 125, id: 4 },
    { name: 'cloret', score: 355, id: 5 },
])

const remainder = (Math.random()*100) % 5 + 1
console.log(remainder)
const cutUnder = Math.floor(remainder)
console.log(cutUnder)
users.deleteOne(cutUnder)
console.log('load all - ', users.loadAll())