import { Injectable } from '@angular/core';
import { Compte } from '../models/compte';
import { Operation } from '../models/operation';

@Injectable({
	  providedIn: 'root'
})
export class ComptesService
{
    private comptesBancairesList: Compte[] = [
        new Compte(
            "Compte principal", 
            [
                new Operation(new Date(2024, 11, 27), "Salaire", 2500),
                new Operation(new Date(2024, 12, 1), "Loyer", -1486),
                new Operation(new Date(2024, 12, 6), "Fnac", -489.50),
            ]
        ),
        new Compte(
            "Compte secondaire",
            [
                new Operation(new Date(2024, 11, 28), "Virement interne", 500),
                new Operation(new Date(2024, 12, 4), "Vacances", -799.99),
            ]),
        new Compte(
            "Compte joint",
            [
                new Operation(new Date(2024, 11, 31), "Virement externe", 250),
                new Operation(new Date(2024, 11, 31), "Virement externe", 250),
                new Operation(new Date(2024, 12, 2), "Intermarché", -158.92),
            ]),
    ];


    private comptesEpargneList: Compte[] = [
        new Compte(
            "Livret A", 
            [
                new Operation(new Date(2024, 10, 28), "Virement interne", 6000),
                new Operation(new Date(2024, 11, 28), "Virement interne", 500),
                new Operation(new Date(2024, 12, 28), "Virement interne", 500),
                new Operation(new Date(2024, 12, 15), "Virement interne", -1500),
            ]
        ),
        new Compte(
            "LDDS", 
            [
                new Operation(new Date(2024, 5, 28), "Virement interne", 4000),
                new Operation(new Date(2024, 6, 28), "Virement interne", 4000),
                new Operation(new Date(2024, 7, 28), "Virement interne", 4000),
            ]
        ),
        new Compte(
            "Livret Jeune", 
            [
                new Operation(new Date(2023, 1, 28), "Virement interne", 500),
                new Operation(new Date(2023, 2, 28), "Virement interne", 500),
                new Operation(new Date(2023, 3, 28), "Virement interne", 600),
                new Operation(new Date(2023, 12, 31), "Intérêts 2023", 74.45),
            ]
        ),
    ]


    getComptesBancaires(): Compte[]
    {
        return this.comptesBancairesList;
    }


    getComptesEpargne(): Compte[]
    {
        return this.comptesEpargneList;
    }
}