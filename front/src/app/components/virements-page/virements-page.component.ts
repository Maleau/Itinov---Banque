import { Component } from '@angular/core';
import { Compte } from '../../models/compte';
import { ComptesService } from '../../services/comptes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-virements-page',
  templateUrl: './virements-page.component.html',
  styleUrl: './virements-page.component.scss'
})
export class VirementsPageComponent
{
    comptesList!: Compte[];
    debitCompte!: Compte;
    creditCompte!: Compte;
    amount!:number;
    reference!: string;

    showAlert: boolean = false;
    alertMsg: string = "";
    isError: boolean = false;


    constructor(
        private comptesService: ComptesService,
        private router: Router
    ) { }


    ngOnInit()
    {
        this.comptesList = this.comptesService.getAllComptes();
    }


    setDebitCompte(debitCompte: Compte)
    {
        this.debitCompte = debitCompte;
    }


    setAmount(amount: number)
    {
        this.amount = amount;
    }


    setReference(reference: string)
    {
        this.reference = reference
    }


    setCreditCompte(creditCompte: Compte)
    {
        this.creditCompte = creditCompte;
    }


    setShowAlert(closeAlert: boolean)
    {
        this.showAlert = closeAlert;

        if(this.isError)
        {
            location.reload()
        }

        else
        {
            this.router.navigateByUrl("/comptes");
        }
    }



    onValidateVirement()
    {
        if (this.debitCompte === undefined || this.amount === undefined || this.reference === undefined || this.creditCompte === undefined)
        {
            this.alertMsg = "Le virement n'a pas pu être effectué, les informations fournies sont incomplètes"
            this.isError = true;
            this.showAlert = true;
        }

        else if (this.amount < 1)
        {
            this.alertMsg = "Le virement n'a pas pu être effectué, le montant de l'opération ne doit pas être inférieur à 1 €"
            this.isError = true;
            this.showAlert = true;
        }

        else
        {
            this.alertMsg = `le virement de ${this.debitCompte.name} vers ${this.creditCompte.name} à bien été effectué pour un montant de ${this.amount} €`
            this.showAlert = true;
            this.comptesService.doMoneyTransfer(this.debitCompte, this.creditCompte, this.amount, this.reference);
        }
    }
}
