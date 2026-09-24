"use strict";
//--------------------
// CSV Writer Project
//--------------------
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
class CSVWriter {
    columns;
    constructor(columns) {
        this.columns = columns;
        this.csv = this.columns.join(',') + '\n';
        console.log("this.columns:", this.columns);
        console.log("this.csv:", this.csv);
    }
    csv;
    addRows(values) {
        console.log("values:", values);
        let rows = values.map((v) => this.formatRow(v));
        console.log("rows:", rows);
        this.csv += rows.join('\n');
        console.log("this.csv in addRows:", this.csv);
    }
    formatRow(object) {
        const text = this.columns.map((col) => object[col]).join(',');
        console.log("text:", text);
        return text;
        // return this.columns.map((col) => object[col]).join(',')
    }
}
const writer = new CSVWriter(['id', 'amount', 'to', 'notes']);
console.log("writer:", writer);
writer.addRows([
    { id: 1, amount: 11, to: 'yoshi', notes: 'for design work' },
    { id: 2, amount: 22, to: 'kintaro', notes: 'special minilary operation' },
    { id: 3, amount: 35, to: 'bonbigaso', notes: 'repair my car' },
]);
//# sourceMappingURL=index11.js.map