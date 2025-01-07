import { Component } from '@angular/core';
import { Account } from '../../models/account';
import { AccountsService } from '../../services/accounts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-withdrawals-page',
  templateUrl: './withdrawals-page.component.html',
  styleUrl: './withdrawals-page.component.scss'
})
export class WithdrawalsPageComponent
{
    accountsList!: Account[];
    debitAccount!: Account;
    amount!: number;
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


    validateWithdrawal()
    {
        if(this.debitAccount === undefined || this.amount === undefined || this.reference === undefined)
        {
            this.alertMsg = "Le retrait n'a pas pu être effectué, les informations fournies sont incomplètes"
            this.isError = true;
            this.showAlert = true;
        }

        else if (this.amount < 1)
        {
            this.alertMsg = "Le retrait n'a pas pu être effectué, le montant de l'opération ne doit pas être inférieur à 1 €"
            this.isError = true;
            this.showAlert = true;
        }

        else
        {
            this.alertMsg = `Le retrait de ${this.amount} € depuis ${this.debitAccount.name} à bien été effectué.`
            this.isError = false;
            this.showAlert = true;
            this.accountsService.doWithdrawal(this.debitAccount, this.amount, this.reference);
        }
    }


    setShowAlert(closeAlert: boolean)
    {
        this.showAlert = closeAlert;

        if(!this.isError)
        {
            this.router.navigateByUrl("/comptes");
        }
    }
}
