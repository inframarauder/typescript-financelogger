import{ Invoice} from './classes/Invoice.js'

const form = document.querySelector('form') as HTMLFormElement;
const invoices : Invoice[] = [];

form.addEventListener('submit',(e:Event)=>{
    e.preventDefault();

    const type = document.getElementById('type') as HTMLSelectElement;
    const tofrom = document.getElementById('tofrom') as HTMLInputElement;
    const details = document.getElementById('details') as HTMLInputElement;
    const amount = document.getElementById('amount') as HTMLInputElement;
    
    if(type.value === 'invoice'){
        const newInvoice = new Invoice(tofrom.value,details.value,amount.valueAsNumber);
    }
})