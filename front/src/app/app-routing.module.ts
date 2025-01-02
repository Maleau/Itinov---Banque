import { RouterModule, Routes } from '@angular/router';
import { ComptesPageComponent } from './components/comptes-page/comptes-page.component';
import { RetraitsPageComponent } from './components/retraits-page/retraits-page.component';
import { VirementsPageComponent } from './components/virements-page/virements-page.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path: "comptes", component: ComptesPageComponent},
    {path: "retraits", component: RetraitsPageComponent},
    {path: "virements", component: VirementsPageComponent},
    {path: "**", redirectTo: "comptes"}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
    
}
