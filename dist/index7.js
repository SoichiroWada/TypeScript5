"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MenuItem {
    title;
    price;
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    get details() {
        return `${this.title} - £${this.price}`;
    }
}
class Pizza extends MenuItem {
    constructor(title, price) {
        super(title, price);
    }
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
function printMenuItem(item) {
    console.log(item.details);
}
printMenuItem(pizza);
//# sourceMappingURL=index7.js.map