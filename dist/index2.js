"use strict";
//----------------------
// extending interfaces
//----------------------
Object.defineProperty(exports, "__esModule", { value: true });
const user = {
    id: 1,
    format() {
        return `This user has an id of ${this.id}`;
    },
};
const bill = {
    id: 234518,
    amount: 50,
    server: 'mario',
    format() {
        return `Bill with id ${this.id} has £${this.amount} to pay`;
    },
};
function printFormatted(val) {
    console.log("val.format():", val.format());
}
function printBill(bill) {
    console.log('server:', bill.server);
    console.log("bill.format():", bill.format());
}
// testing the functions
printFormatted(user);
printFormatted(bill);
// printBill(user) --> not allowed
printBill(bill);
//# sourceMappingURL=index2.js.map