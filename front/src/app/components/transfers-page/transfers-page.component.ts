import { Component } from '@angular/core';
import { Account } from '../../models/account';
import { AccountsService } from '../../services/accounts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transfers-page',
  templateUrl: './transfers-page.component.html',
  styleUrl: './transfers-page.component.scss'
})
export class TransfersPageComponent
{
    accountsList!: Account[];
    debitAccount!: Account;
    creditAccount!: Account;
    amount!:number;
    reference!: string;

    showAlert: boolean = false;
    alertMsg: string = "";
    isError: boolean = false;


    constructor(
        private accountsService: AccountsService,
        private router: Router
    ) { }


    ngOnInit()
    {
        this.accountsList = this.accountsService.getAllAccounts();
    }


    setDebitAccount(debitAccount: Account)
    {
        this.debitAccount = debitAccount;
    }


    setAmount(amount: number)
    {
        this.amount = amount;
    }


    setReference(reference: string)
    {
        this.reference = reference
    }


    setCreditAccount(creditAccount: Account)
    {
        this.creditAccount = creditAccount;
    }


    setShowAlert(closeAlert: boolean)
    {
        this.showAlert = closeAlert;

        if(!this.isError)
        {
            this.router.navigateByUrl("/comptes");
        }
    }



    validateTransfer()
    {
        if (this.debitAccount === undefined || this.amount === undefined || this.reference === undefined || this.creditAccount === undefined)
        {
            this.alertMsg = "Le virement n'a pas pu être effectué, les informations fournies sont incomplètes"
            this.isError = true;
            this.showAlert = true;
        }

        else if (this.amount < 1)
        {
            this.alertMsg = "Le virement n'a pas pu être effectué, le montant de l'opération ne doit pas être inférieur à 1 €"
            this.isError = true;
            this.showAlert = true;
        }

        else
        {
            this.alertMsg = `Le virement de ${this.debitAccount.name} vers ${this.creditAccount.name} à bien été effectué pour un montant de ${this.amount} €`
            this.showAlert = true;
            this.isError = false;
            this.accountsService.doTransfer(this.debitAccount, this.creditAccount, this.amount, this.reference);
        }
    }
}
