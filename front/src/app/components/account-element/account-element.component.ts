import { Component, Input } from '@angular/core';
import { Account } from '../../models/account';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-element',
  templateUrl: './account-element.component.html',
  styleUrl: './account-element.component.scss'
})
export class AccountElementComponent
{
    @Input() account!: Account;

    constructor(private router: Router){}
    
    
    onClickAccount()
    {
        this.router.navigateByUrl(`/comptes/${ this.account.id }`);
    }
}
