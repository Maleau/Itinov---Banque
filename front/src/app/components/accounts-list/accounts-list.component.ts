import { Component, Input } from '@angular/core';
import { Account } from '../../models/account';


@Component({
  selector: 'app-accounts-list',
  templateUrl: './accounts-list.component.html',
  styleUrl: './accounts-list.component.scss'
})
export class AccountsListComponent
{
    @Input() title!: string;
    @Input() accountsList!: Account[] | null;
}
