type Base = 'classic' | 'thick' | 'thin' | 'garlic' | 'magnet' | 'wood' | 'mud' | 'stone'
type Size = 'nano' | 'micro' | 'small' | 'medium' | 'large' | 'extra large' | 'huge' | 'overwhelming'

class MenuItem {
    constructor(protected title: string, protected price: number) { }

    getExtraDetails(): string {
        return ''
    }
    get details(): string {
        return `${this.title} - £${this.price} ${this.getExtraDetails()}`
    }
}

class Pizza extends MenuItem {
    constructor(title: string, price: number, base:Base, size:Size) {
        super(title, price)
    }
    private base: Base = 'garlic'
    private size: Size = 'large'
    private toppings: string[] = []

    getExtraDetails(): string {
        return `base: ${this.base}, size: ${this.size}`
    }
    addTopping(topping: string): void {
        this.toppings.push(topping)
    }
    removeTopping(topping: string): void {
        this.toppings = this.toppings.filter((t) => t !== topping)
    }
    selectBase(b: Base): void {
        this.base = b
    }
    selectSize(s: Size): void {
        this.size = s
    }
    get details(): string {
        return `${this.title} -- base:${this.base} -- size:${this.size} -- price:£${this.price}`
    }
}

const pizzaOne = new Pizza('mario special', 15, 'stone', 'overwhelming')
const pizzaTwo = new Pizza('Hawaiian special', 50, 'magnet', 'medium')

function printMenuItem(pizza: MenuItem): void {
    console.log(pizza.details)
}

// function printPizzaDetails(pizza: Pizza, base: Base, size: Size, toppings: string): void {
//     pizza.selectBase(base)
//     pizza.selectSize(size)
//     pizza.addTopping(toppings)
//     console.log(pizza.details)
// }

printMenuItem(pizzaOne)
printMenuItem(pizzaTwo)
// printPizzaDetails(pizzaTwo, 'thick', 'large', 'pineapple')