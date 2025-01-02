import { Operation } from "./operation";

export class Compte
{
    name: string;
    operations: Operation[];
    total: number;

    constructor(name: string, operations: Operation[])
    {
        this.name = name;
        this.operations = operations;
        this.total = this.setTotal();
    }

    private setTotal(): number
    {
        let total = 0

        for(let operation of this.operations)
        {
            total = total + operation.rising;
        }

        return total;
    }
}