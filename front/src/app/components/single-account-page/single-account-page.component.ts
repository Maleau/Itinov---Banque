import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from '../../models/account';
import { AccountsService } from '../../services/accounts.service';
import { Operation } from '../../models/operation';

@Component({
  selector: 'app-single-account-page',
  templateUrl: './single-account-page.component.html',
  styleUrl: './single-account-page.component.scss'
})
export class SingleAccountPageComponent
{
    account!: Account | null;
    operationsList!: Operation[];

    constructor(
        private route: ActivatedRoute,
        private accountsService: AccountsService,
        private router: Router
    ){}


    ngOnInit()
    {
        let accountId: number = +this.route.snapshot.params["id"];
        this.account = this.accountsService.getAccountById(accountId);

        if(this.account !== null)
        {
            this.operationsList = this.account.operations;
            this.operationsList.sort((account1, account2) => (account1.date < account2.date ? 1 : -1));
        }
    }


    onRetun()
    {
        this.router.navigateByUrl('/comptes');
    }
}
