//---------------------
// Generic Constraints
//---------------------
class DataCollection {
    data;
    constructor(data) {
        this.data = data;
    }
    loadOne() {
        const i = Math.floor(Math.random() * this.data.length);
        return this.data[i];
    }
    loadAll() {
        return this.data;
    }
    add(val) {
        this.data.push(val);
        return this.data;
    }
    deleteOne(id) {
        this.data = this.data.filter((item) => item.id !== id);
    }
}
const users = new DataCollection([
    { name: 'shaun', score: 125, id: 1 },
    { name: 'mario', score: 100, id: 2 },
    { name: 'peach', score: 150, id: 3 },
    { name: 'ebious', score: 125, id: 4 },
    { name: 'cloret', score: 355, id: 5 },
]);
const remainder = (Math.random() * 100) % 5 + 1;
console.log(remainder);
const cutUnder = Math.floor(remainder);
console.log(cutUnder);
users.deleteOne(cutUnder);
console.log('load all - ', users.loadAll());
export {};
//# sourceMappingURL=index16.js.map