import { Injectable } from '@angular/core';
import { Compte } from '../models/compte';
import { Operation } from '../models/operation';

@Injectable({
	  providedIn: 'root'
})
export class ComptesService
{
    private comptesList: Compte[] = [
        new Compte(
            1,
            "Compte principal", 
            "bancaire",
            [
                new Operation(new Date(2024, 11, 27), "Salaire", 2500),
                new Operation(new Date(2024, 12, 1), "Loyer", -1486),
                new Operation(new Date(2024, 12, 6), "Fnac", -489.50),
            ]
        ),
        new Compte(
            2,
            "Compte secondaire",
            "bancaire",
            [
                new Operation(new Date(2024, 11, 28), "Virement interne", 500),
                new Operation(new Date(2024, 12, 4), "Vacances", -799.99),
            ]),
        new Compte(
            3,
            "Compte joint",
            "bancaire",
            [
                new Operation(new Date(2024, 11, 31), "Virement externe", 250),
                new Operation(new Date(2024, 11, 31), "Virement externe", 250),
                new Operation(new Date(2024, 12, 2), "Intermarché", -158.92),
            ]),
            new Compte(
                4,
                "Livret A",
                "epargne",
                [
                    new Operation(new Date(2024, 10, 28), "Virement interne", 6000),
                    new Operation(new Date(2024, 11, 28), "Virement interne", 500),
                    new Operation(new Date(2024, 12, 28), "Virement interne", 500),
                    new Operation(new Date(2024, 12, 15), "Virement interne", -1500),
                ]
            ),
            new Compte(
                5,
                "LDDS",
                "epargne",
                [
                    new Operation(new Date(2024, 5, 28), "Virement interne", 4000),
                    new Operation(new Date(2024, 6, 28), "Virement interne", 4000),
                    new Operation(new Date(2024, 7, 28), "Virement interne", 4000),
                ]
            ),
            new Compte(
                6,
                "Livret Jeune",
                "epargne",
                [
                    new Operation(new Date(2023, 1, 28), "Virement interne", 500),
                    new Operation(new Date(2023, 2, 28), "Virement interne", 500),
                    new Operation(new Date(2023, 3, 28), "Virement interne", 600),
                    new Operation(new Date(2023, 12, 31), "Intérêts 2023", 74.45),
                ]
            ),
    ];


    getComptesBancaires(): Compte[]
    {
        let comptesBancairesList: Compte[] = [];

        for(let compte of this.comptesList)
        {
            if(compte.type === "bancaire")
            {
                comptesBancairesList.push(compte);
            }
        }

        return comptesBancairesList;
    }

    
    getComptesEpargne(): Compte[]
    {
        let comptesEpargneList: Compte[] = [];

        for(let compte of this.comptesList)
        {
            if(compte.type === "epargne")
            {
                comptesEpargneList.push(compte);
            }
        }

        return comptesEpargneList;
    }

    
    getCompteById(compteBancaireId: number): Compte | null
    {
        let compteBancaireToReturn: Compte | null = null;

        for(let compteBancaire of this.comptesList)
        {
            if(compteBancaire.id === compteBancaireId)
            {
                compteBancaireToReturn = compteBancaire;
                break;
            }
        }

        return compteBancaireToReturn;
    }
}