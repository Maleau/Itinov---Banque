import { Component } from '@angular/core';
import { AccountsListComponent } from "../accounts-list/accounts-list.component";
import { AccountsService } from '../../services/accounts.service';
import { Account } from '../../models/account';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-accounts-page',
  templateUrl: './accounts-page.component.html',
  styleUrl: './accounts-page.component.scss'
})
export class AccountsPageComponent
{
    bankAccountsList!: Observable<Account[]>;
    savingsAccountsList!: Observable<Account[]>;

    constructor(private accountsService: AccountsService) { }


    ngOnInit()
    {
        this.bankAccountsList = this.accountsService.getBankAccounts();
        this.savingsAccountsList = this.accountsService.getSavingsAccounts();
    }
}
