import { CSVWriter } from './index.js';
const paymentsWriter = new CSVWriter(['id', 'amount', 'to', 'notes']);
// add initial rows
paymentsWriter.addRows([
    { id: 1, amount: 30, to: 'gonta', notes: 'for plumbing work' },
    { id: 2, amount: 50, to: 'peach', notes: 'for design work' },
    { id: 3, amount: 25, to: 'yoshi', notes: 'clearing a debt' },
    { id: 4, amount: 950, to: 'Kotaro', notes: 'issuance of new shares' },
    { id: 5, amount: 9795, to: 'bundoka', notes: 'merger' },
]);
// save the file
paymentsWriter.save('data/payments.csv');
//# sourceMappingURL=PaymentWriter.js.map