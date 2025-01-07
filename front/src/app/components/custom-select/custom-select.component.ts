import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Account } from '../../models/account';
import { AccountsService } from '../../services/accounts.service';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrl: './custom-select.component.scss',
  animations: [
    trigger('open', [
        transition('void => *', [
            style({
                height: '0',
                overflow: 'hidden'
            }),
            animate('250ms ease-out', style({
                height: '*',
            }))
        ]),
        transition('* => void', [
            style({
                height: '*',
                overflow: 'hidden'
            }),
            animate('250ms ease-out', style({
                height: '0',
            }))
        ])
    ])
  ]
})
export class CustomSelectComponent
{
    @Input() accountsList!: Account[];
    @Input() txt!: string;

    @Output() currentAccount = new EventEmitter<Account>();

    showOptions: boolean = false;
    total: number = 0;
    totalStr: string = "";


    onClickShowOptions()
    {
        this.showOptions = !this.showOptions;
    }


    selectAccount(account: Account)
    {
        this.txt = account.name;
        this.total = account.total;
        this.totalStr = account.total.toString();
        this.showOptions = !this.showOptions;

        this.currentAccount.emit(account);
    }
}
