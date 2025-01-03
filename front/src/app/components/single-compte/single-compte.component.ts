import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Compte } from '../../models/compte';
import { ComptesService } from '../../services/comptes.service';
import { Operation } from '../../models/operation';

@Component({
  selector: 'app-single-compte',
  templateUrl: './single-compte.component.html',
  styleUrl: './single-compte.component.scss'
})
export class SingleCompteComponent
{
    compte!: Compte | null;
    operationList!: Operation[];

    constructor(
        private route: ActivatedRoute,
        private comptesService: ComptesService,
        private router: Router
    ){}


    ngOnInit()
    {
        let compteId: number = +this.route.snapshot.params["id"];
        this.compte = this.comptesService.getCompteById(compteId);

        if(this.compte !== null)
        {
            this.operationList =this.compte.operations
            this.operationList.sort((compte1, compte2) => (compte1.date < compte2.date ? 1 : -1));
        }
    }


    onClick()
    {
        this.router.navigateByUrl('/comptes');
    }
}
