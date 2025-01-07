import { Operation } from "./operation";

export class Account
{
    id: number;
    name: string;
    type: "savings" | "bank";
    operations: Operation[];
    total: number;


    constructor(id:number, name: string, type: "savings" | "bank", operations: Operation[])
    {
        this.id = id;
        this.name = name;
        this.type = type;
        this.operations = operations;
        this.total = this.setTotal();
    }


    private setTotal(): number
    {
        let total = 0

        for(let operation of this.operations)
        {
            total = total + operation.amount;
        }

        return total;
    }
}