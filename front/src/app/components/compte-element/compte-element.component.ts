import { Component, Input } from '@angular/core';
import { Compte } from '../../models/compte';
import { CurrencyPipe, DecimalPipe, NgClass } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compte-element',
  templateUrl: './compte-element.component.html',
  styleUrl: './compte-element.component.scss'
})
export class CompteElementComponent
{
    @Input() compte!: Compte;

    constructor(private router: Router){}
    
    
    onClick()
    {
        this.router.navigateByUrl(`/comptes/${ this.compte.id }`);
    }
}
