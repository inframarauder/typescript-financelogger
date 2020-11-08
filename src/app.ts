import{ Invoice} from './classes/Invoice.js'
import {Payment} from './classes/Payment.js'
import {HasFormatter} from './interfaces/HasFormatter.js'

const form = document.querySelector('form') as HTMLFormElement;
const invoices : Invoice[] = [];

form.addEventListener('submit',(e:Event)=>{
    e.preventDefault();

    const type = document.getElementById('type') as HTMLSelectElement;
    const tofrom = document.getElementById('tofrom') as HTMLInputElement;
    const details = document.getElementById('details') as HTMLInputElement;
    const amount = document.getElementById('amount') as HTMLInputElement;
    let doc : HasFormatter = (type.value === 'invoice')? 
                            new Invoice(tofrom.value,details.value,amount.valueAsNumber)
                            : new Payment(tofrom.value,details.value,amount.valueAsNumber);
    console.log(doc.format());
})