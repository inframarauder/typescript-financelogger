export class Invoice{
    
    constructor(
        private client : string,
        private details : string,
        private amount : number
    ){}

    format(){
        return `${this.client} owes Rs. ${this.amount} for ${this.details}`;
    }
}
