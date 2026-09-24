//------------------
// access modifiers
//------------------
class Pizza {
    title;
    price;
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    // title: string
    // price: number
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
const pizza = new Pizza('mario special', 15);
pizza.selectBase('garlic');
pizza.addTopping('mushrooms');
pizza.addTopping('olives');
console.log(pizza);
export {};
// console.log(pizza.title, pizza.price, pizza.toppings)
//# sourceMappingURL=index5.js.map