export class Operation
{
    date: Date;
    name: string;
    rising: number;

    constructor(date: Date, name: string, rising: number)
    {
        this.date = date;
        this.name = name;
        this.rising = rising;
    }
}