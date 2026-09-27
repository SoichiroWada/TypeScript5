//-----------------
// Generic Classes
//-----------------
class DataCollection {
    data;
    constructor(data) {
        this.data = data;
    }
    loadOne() {
        const randomNumber = Math.random();
        console.log('randomNumber:', randomNumber);
        console.log('this.data.length:', this.data.length);
        const i = Math.floor(randomNumber * this.data.length);
        console.log('randomNumber * this.data.length):', randomNumber * this.data.length);
        console.log('i:', i);
        return this.data[i];
    }
    loadAll() {
        return this.data;
    }
    add(val) {
        this.data.push(val);
        return this.data;
    }
}
const users = new DataCollection([
    { name: 'shaun', score: 125 },
    { name: 'mario', score: 100 },
    { name: 'peach', score: 150 },
    { name: 'bundoka', score: 175 },
    { name: 'andoka', score: 95 },
]);
users.add({ name: 'luigi', score: 50 });
console.log('load one - ', users.loadOne());
console.log('load all - ', users.loadAll());
export {};
//# sourceMappingURL=index15.js.map