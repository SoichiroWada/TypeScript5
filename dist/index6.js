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
// explicit
const pizzaOne = new Pizza('mario special', 15);
// inferred
const pizzaTwo = new Pizza('luigi special', 10);
const pizzaThree = new Pizza('Bundoka special', 99999);
function addMushroomsToPizzas(pizzas) {
    for (const p of pizzas) {
        p.addTopping('mushrooms');
        p.selectBase('mud');
    }
}
addMushroomsToPizzas([pizzaOne, pizzaTwo, pizzaThree]);
console.log(pizzaOne, pizzaTwo, pizzaThree);
export {};
//# sourceMappingURL=index6.js.map