"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MenuItem {
    title;
    price;
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    getExtraDetails() {
        return '';
    }
    get details() {
        return `${this.title} - £${this.price} ${this.getExtraDetails()}`;
    }
}
class Pizza extends MenuItem {
    constructor(title, price, base, size) {
        super(title, price);
    }
    base = 'garlic';
    size = 'large';
    toppings = [];
    getExtraDetails() {
        return `base: ${this.base}, size: ${this.size}`;
    }
    addTopping(topping) {
        this.toppings.push(topping);
    }
    removeTopping(topping) {
        this.toppings = this.toppings.filter((t) => t !== topping);
    }
    selectBase(b) {
        this.base = b;
    }
    selectSize(s) {
        this.size = s;
    }
    get details() {
        return `${this.title} -- base:${this.base} -- size:${this.size} -- price:£${this.price}`;
    }
}
const pizzaOne = new Pizza('mario special', 15, 'stone', 'overwhelming');
const pizzaTwo = new Pizza('Hawaiian special', 50, 'magnet', 'medium');
function printMenuItem(pizza) {
    console.log(pizza.details);
}
// function printPizzaDetails(pizza: Pizza, base: Base, size: Size, toppings: string): void {
//     pizza.selectBase(base)
//     pizza.selectSize(size)
//     pizza.addTopping(toppings)
//     console.log(pizza.details)
// }
printMenuItem(pizzaOne);
printMenuItem(pizzaTwo);
// printPizzaDetails(pizzaTwo, 'thick', 'large', 'pineapple')
//# sourceMappingURL=index7.js.map