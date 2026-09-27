type Base = 'classic' | 'thick' | 'thin' | 'garlic' | 'pyramid' | 'mud'

class Pizza {
    constructor(private title: string, private price: number) { }

    // title: string
    // price: number
    private base: Base = 'classic'
    private toppings: string[] = []

    addTopping(topping: string): void {
        this.toppings.push(topping)
    }
    removeTopping(topping: string): void {
        this.toppings = this.toppings.filter((t) => t !== topping)
    }
    selectBase(b: Base): void {
        this.base = b
    }
}

// explicit
const pizzaOne: Pizza = new Pizza('mario special', 15)

// inferred
const pizzaTwo = new Pizza('luigi special', 10)
const pizzaThree = new Pizza('Bundoka special', 99999)

function addMushroomsToPizzas(pizzas: Pizza[]): void {
    for (const p of pizzas) {
        p.addTopping('mushrooms')
        p.selectBase('mud')
    }
}

addMushroomsToPizzas([pizzaOne, pizzaTwo, pizzaThree])

console.log(pizzaOne, pizzaTwo, pizzaThree)