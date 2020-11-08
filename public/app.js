import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
const form = document.querySelector('form');
const ul = document.querySelector('ul');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const type = document.getElementById('type');
    const tofrom = document.getElementById('tofrom');
    const details = document.getElementById('details');
    const amount = document.getElementById('amount');
    const doc = type.value === 'invoice'
        ? new Invoice(tofrom.value, details.value, amount.valueAsNumber)
        : new Payment(tofrom.value, details.value, amount.valueAsNumber);
    const list = new ListTemplate(ul);
    list.render(doc, type.value, 'end');
});
