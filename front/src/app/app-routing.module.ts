import { RouterModule, Routes } from '@angular/router';
import { AccountsPageComponent } from './components/accounts-page/accounts-page.component';
import { WithdrawalsPageComponent } from './components/withdrawals-page/withdrawals-page.component';
import { TransfersPageComponent } from './components/transfers-page/transfers-page.component';
import { NgModule } from '@angular/core';
import { SingleAccountPageComponent } from './components/single-account-page/single-account-page.component';

export const routes: Routes = [
    {path: "comptes", component: AccountsPageComponent},
    {path: "comptes/:id", component: SingleAccountPageComponent},
    {path: "retraits", component: WithdrawalsPageComponent},
    {path: "virements", component: TransfersPageComponent},
    {path: "**", redirectTo: "comptes"}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
    
}