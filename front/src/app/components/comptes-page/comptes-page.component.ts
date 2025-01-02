import { Component } from '@angular/core';
import { ComptesListComponent } from "../comptes-list/comptes-list.component";
import { ComptesService } from '../../services/comptes.service';
import { Compte } from '../../models/compte';

@Component({
  selector: 'app-comptes-page',
  templateUrl: './comptes-page.component.html',
  styleUrl: './comptes-page.component.scss'
})
export class ComptesPageComponent
{
    comptesBancairesList!: Compte[];
    comptesEpargneList!: Compte[];

    constructor(private comptesService: ComptesService) { }


    ngOnInit()
    {
        this.comptesBancairesList = this.comptesService.getComptesBancaires();
        this.comptesEpargneList = this.comptesService.getComptesEpargne();
    }
}
