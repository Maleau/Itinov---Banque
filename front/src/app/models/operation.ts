export class Operation
{
    date: Date;
    name: string;
    amount: number;

    
    constructor(date: Date, name: string, amount: number)
    {
        this.date = date;
        this.name = name;
        this.amount = amount;
    }
}