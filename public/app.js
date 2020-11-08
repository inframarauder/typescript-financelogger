import { Invoice } from './classes/Invoice.js';
const form = document.querySelector('form');
const invoices = [];
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const type = document.getElementById('type');
    const tofrom = document.getElementById('tofrom');
    const details = document.getElementById('details');
    const amount = document.getElementById('amount');
    if (type.value === 'invoice') {
        const newInvoice = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
        alert(newInvoice.printInvoice());
        invoices.push(newInvoice);
        console.log(invoices);
    }
});
