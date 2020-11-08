import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
const form = document.querySelector('form');
const invoices = [];
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const type = document.getElementById('type');
    const tofrom = document.getElementById('tofrom');
    const details = document.getElementById('details');
    const amount = document.getElementById('amount');
    let doc = (type.value === 'invoice') ?
        new Invoice(tofrom.value, details.value, amount.valueAsNumber)
        : new Payment(tofrom.value, details.value, amount.valueAsNumber);
    console.log(doc.format());
});
