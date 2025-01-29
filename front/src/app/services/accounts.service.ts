import { Injectable } from '@angular/core';
import { Account } from '../models/account';
import { Operation } from '../models/operation';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
	  providedIn: 'root'
})
export class AccountsService
{
    constructor(private http: HttpClient){}

    private url: string = "http://localhost:8080/accounts";


    getAllAccounts(): Observable<Account[]>
    {
        return this.http.get<Account[]>(this.url);
    }


    getBankAccounts(): Observable<Account[]>
    {
        return this.http.get<Account[]>(`${this.url}/bank`);
    }

    
    getSavingsAccounts(): Observable<Account[]>
    {
        return this.http.get<Account[]>(`${this.url}/savings`);
    }

    
    getAccountById(accountId: number): Observable<Account> | null
    {
        return this.http.get<Account>(`${this.url}/${accountId}`);
    }


    doWithdrawal(account: Account, amount: number, reference: string): Observable<any>
    {
        return this.http.put<any>(`${this.url}/withdrawal/${account.id}`, {
            "name": reference,
            "amount": amount
        });
    }


    doTransfer(account1: Account, account2: Account, amount: number, reference: string): Observable<any>
    {
        return this.http.put<any>(`${this.url}/transfer`, {
            "debitAccountId": account1.id,
            "creditAccountId": account2.id,
            "operation": {
                "name": reference,
                "amount": amount
            }
        });
    }
}