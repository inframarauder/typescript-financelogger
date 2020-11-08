export class Payment{
    constructor(
        private recipient:string,
        private details:string,
        private amount:string
    ){}

    format(){
        return `${this.recipient} is owed Rs.${this.amount} for ${this.details}`;
    }
}