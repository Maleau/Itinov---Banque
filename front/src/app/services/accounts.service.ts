import { Injectable } from '@angular/core';
import { Account } from '../models/account';
import { Operation } from '../models/operation';

@Injectable({
	  providedIn: 'root'
})
export class AccountsService
{
    private accountsList: Account[] = [
        new Account(
            1,
            "Compte principal", 
            "bank",
            [
                new Operation(new Date(2024, 11, 27), "Salaire", 2500),
                new Operation(new Date(2024, 12, 1), "Loyer", -1486),
                new Operation(new Date(2024, 12, 6), "Fnac", -489.50),
            ]
        ),
        new Account(
            2,
            "Compte secondaire",
            "bank",
            [
                new Operation(new Date(2024, 11, 28), "Virement interne", 500),
                new Operation(new Date(2024, 12, 4), "Vacances", -799.99),
            ]),
        new Account(
            3,
            "Compte joint",
            "bank",
            [
                new Operation(new Date(2024, 11, 31), "Virement externe", 250),
                new Operation(new Date(2024, 11, 31), "Virement externe", 250),
                new Operation(new Date(2024, 12, 2), "Intermarché", -158.92),
            ]),
            new Account(
                4,
                "Livret A",
                "savings",
                [
                    new Operation(new Date(2024, 10, 28), "Virement interne", 6000),
                    new Operation(new Date(2024, 11, 28), "Virement interne", 500),
                    new Operation(new Date(2024, 12, 28), "Virement interne", 500),
                    new Operation(new Date(2024, 12, 15), "Virement interne", -1500),
                ]
            ),
            new Account(
                5,
                "LDDS",
                "savings",
                [
                    new Operation(new Date(2024, 5, 28), "Virement interne", 4000),
                    new Operation(new Date(2024, 6, 28), "Virement interne", 4000),
                    new Operation(new Date(2024, 7, 28), "Virement interne", 4000),
                ]
            ),
            new Account(
                6,
                "Livret Jeune",
                "savings",
                [
                    new Operation(new Date(2023, 1, 28), "Virement interne", 500),
                    new Operation(new Date(2023, 2, 28), "Virement interne", 500),
                    new Operation(new Date(2023, 3, 28), "Virement interne", 600),
                    new Operation(new Date(2023, 12, 31), "Intérêts 2023", 74.45),
                ]
            ),
    ];


    getAllAccounts(): Account[]
    {
        return this.accountsList;
    }


    getBankAccounts(): Account[]
    {
        let bankAccountsList: Account[] = [];

        for(let account of this.accountsList)
        {
            if(account.type === "bank")
            {
                bankAccountsList.push(account);
            }
        }

        return bankAccountsList;
    }

    
    getSavingsAccounts(): Account[]
    {
        let savingsAccountsList: Account[] = [];

        for(let account of this.accountsList)
        {
            if(account.type === "savings")
            {
                savingsAccountsList.push(account);
            }
        }

        return savingsAccountsList;
    }

    
    getAccountById(accountId: number): Account | null
    {
        let accountToReturn: Account | null = null;

        for(let account of this.accountsList)
        {
            if(account.id === accountId)
            {
                accountToReturn = account;
                break;
            }
        }

        return accountToReturn;
    }


    doWithdrawal(account: Account, amount: number, reference: string)
    {
        let debitAccount = this.getAccountById(account.id);

        if(debitAccount !== null)
        {
            debitAccount.operations.push(new Operation(new Date(), reference, -amount));
            debitAccount.total = debitAccount.total - amount;
        }
    }


    doTransfer(account1: Account, account2: Account, amount: number, reference: string)
    {
        let debitAccount = this.getAccountById(account1.id);
        let creditAccount = this.getAccountById(account2.id);

        if (debitAccount !== null && creditAccount !== null)
        {
            debitAccount.operations.push(new Operation(new Date(), reference, -amount))
            debitAccount.total = debitAccount.total - amount;

            creditAccount.operations.push(new Operation(new Date(), reference, amount))
            creditAccount.total = creditAccount.total + amount;
        }
    }
}