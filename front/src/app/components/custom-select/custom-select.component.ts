import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Compte } from '../../models/compte';
import { ComptesService } from '../../services/comptes.service';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrl: './custom-select.component.scss',
  animations: [
    trigger('test', [
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
    @Input() comptesList!: Compte[];
    @Input() txt!: string;

    @Output() currentCompte = new EventEmitter<Compte>();

    showOptions: boolean = false;
    total: number = 0;
    totalStr: string = "";

    constructor(private comptesService: ComptesService) { }


    onClickShowOptions()
    {
        this.showOptions = !this.showOptions;
    }


    onClickCompte(compte: Compte)
    {
        this.txt = compte.name;
        this.total = compte.total;
        this.totalStr = compte.total.toString();
        this.showOptions = !this.showOptions;

        this.currentCompte.emit(compte);
    }
}
