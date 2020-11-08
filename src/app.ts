import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

const form = document.querySelector('form') as HTMLFormElement;
const ul = document.querySelector('ul')!;

form.addEventListener('submit', (e: Event) => {
	e.preventDefault();

	const type = document.getElementById('type') as HTMLSelectElement;
	const tofrom = document.getElementById('tofrom') as HTMLInputElement;
	const details = document.getElementById('details') as HTMLInputElement;
	const amount = document.getElementById('amount') as HTMLInputElement;

	const values: [string, string, number] = [
		tofrom.value,
		details.value,
		amount.valueAsNumber,
	];

	const doc: HasFormatter =
		type.value === 'invoice' ? new Invoice(...values) : new Payment(...values);

	const list = new ListTemplate(ul);
	list.render(doc, type.value, 'end');
});
