import { CSVWriter } from './index.js';
const paymentsWriter = new CSVWriter(['amount', 'notes', 'id', 'to']);
// add initial rows
paymentsWriter.addRows([
    { id: 1, amount: 30, notes: 'payment for plumbing work', to: 'yoshi' },
    { id: 2, amount: 50, to: 'peach', notes: 'payment for design work' },
    { id: 3, amount: 25, to: 'yoshi', notes: 'clearing a debt' },
    { id: 4, amount: 95000, to: 'kurobe', notes: 'issuance of new shares' },
    { id: 5, amount: 97956000, to: 'bundoka', notes: 'merger' },
]);
// save the file
paymentsWriter.save('data/payments.csv');
//# sourceMappingURL=PaymentWriter.js.map