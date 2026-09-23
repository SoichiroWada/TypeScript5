type Base = 'classic' | 'thick' | 'thin' | 'garlic' | 'magnet' | 'wood' | 'mud' | 'stone'
type Size = 'nano' | 'micro' | 'small' | 'medium' | 'large' | 'extra large' | 'huge' | 'overwhelming'

class MenuItem {
    constructor(protected title: string, protected price: number) { }

    get details(): string {
        return `${this.title} - £${this.price}`
    }
}

class Pizza extends MenuItem {
    private toppings: string[] = []

    constructor(title: string, price: number, private base: Base, private size: Size) {
        super(title, price)
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
        return `${this.title} -- base:${this.base} -- size:${this.size} -- price:£${this.price} --toppings:${this.toppings}`
    }
}

const pizzaOne = new Pizza('Domino Pizza', 78, 'garlic', 'medium')
const pizzaTwo = new Pizza('Hawaiian special', 1890, 'magnet', 'overwhelming')
const pizzaThree = new Pizza('Quattrro Cheese', 5849, 'stone', 'nano')

function printMenuItem(pizza: Pizza): void {
    console.log(pizza.details)
}

pizzaOne.selectBase('wood')
pizzaOne.selectSize('micro')

pizzaTwo.selectBase('mud')
pizzaTwo.selectSize('huge')

pizzaOne.addTopping('tomato')
pizzaOne.addTopping('olive')

pizzaTwo.addTopping('snake')
pizzaTwo.addTopping('mouse')

pizzaThree.addTopping('beans')

printMenuItem(pizzaOne)
printMenuItem(pizzaTwo)
printMenuItem(pizzaThree)
