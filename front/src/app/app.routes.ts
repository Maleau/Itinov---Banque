import { Routes } from '@angular/router';
import { ComptesPageComponent } from './comptes-page/comptes-page.component';
import { RetraitsPageComponent } from './retraits-page/retraits-page.component';
import { VirementsPageComponent } from './virements-page/virements-page.component';

export const routes: Routes = [
    {path: "comptes", component: ComptesPageComponent},
    {path: "retraits", component: RetraitsPageComponent},
    {path: "virements", component: VirementsPageComponent},
    {path: "**", redirectTo: "comptes"}
];
