//-----------------------
// CSV Writer - Refactor
//-----------------------
import { appendFileSync } from 'fs';
export class CSVWriter {
    columns;
    constructor(columns) {
        this.columns = columns;
        this.csv = this.columns.join(',') + '\n';
        console.log('csv:', this.csv);
        console.log('columns:', columns);
    }
    csv;
    save(filename) {
        appendFileSync(filename, this.csv);
        this.csv = '\n';
        console.log('file saved to', filename);
    }
    addRows(values) {
        let rows = values.map((v) => this.formatRow(v));
        this.csv += rows.join('\n');
    }
    formatRow(values) {
        return this.columns.map((col) => values[col]).join(',');
    }
}
//# sourceMappingURL=index.js.map