//-------------
// classes 101
//-------------
class Pizza {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    title;
    price;
    base = 'classic';
    toppings = [];
    addTopping(topping) {
        this.toppings.push(topping);
    }
    removeTopping(topping) {
        this.toppings = this.toppings.filter((t) => t !== topping);
    }
    selectBase(b) {
        this.base = b;
    }
}
const pizza = new Pizza('cheese special', 300);
pizza.selectBase('garlic');
pizza.addTopping('mushrooms');
pizza.addTopping('olives');
pizza.addTopping('pineapples');
pizza.selectBase('square');
console.log(pizza);
export {};
//# sourceMappingURL=index4.js.map