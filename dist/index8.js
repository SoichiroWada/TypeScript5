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
    base;
    size;
    toppings = [];
    constructor(title, price, base, size) {
        super(title, price);
        this.base = base;
        this.size = size;
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
        return `${this.title} -- base:${this.base} -- size:${this.size} -- price:£${this.price} --toppings:${this.toppings}`;
    }
}
const pizzaOne = new Pizza('Domino Pizza', 78, 'garlic', 'medium');
const pizzaTwo = new Pizza('Hawaiian special', 1890, 'magnet', 'overwhelming');
const pizzaThree = new Pizza('Quattrro Cheese', 5849, 'stone', 'nano');
function printMenuItem(pizza) {
    console.log(pizza.details);
}
pizzaOne.selectBase('wood');
pizzaOne.selectSize('micro');
pizzaTwo.selectBase('mud');
pizzaTwo.selectSize('huge');
pizzaOne.addTopping('tomato');
pizzaOne.addTopping('olive');
pizzaTwo.addTopping('snake');
pizzaTwo.addTopping('mouse');
pizzaThree.addTopping('beans');
printMenuItem(pizzaOne);
printMenuItem(pizzaTwo);
printMenuItem(pizzaThree);
export {};
//# sourceMappingURL=index8.js.map