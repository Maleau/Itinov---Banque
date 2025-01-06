import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CurrencyPipe, NgClass, NgFor } from '@angular/common';
import { CompteElementComponent } from './components/compte-element/compte-element.component';
import { ComptesListComponent } from './components/comptes-list/comptes-list.component';
import { ComptesPageComponent } from './components/comptes-page/comptes-page.component';
import { RetraitsPageComponent } from './components/retraits-page/retraits-page.component';
import { VirementsPageComponent } from './components/virements-page/virements-page.component';
import { SingleCompteComponent } from './components/single-compte/single-compte.component';
import { CustomSelectComponent } from "./components/custom-select/custom-select.component";
import { CustomFormFieldsComponent } from "./components/custom-form-fields/custom-form-fields.component";
import { FormsModule } from '@angular/forms';
import { CustomAlertComponent } from './components/custom-alert/custom-alert.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CompteElementComponent,
    ComptesListComponent,
    ComptesPageComponent,
    RetraitsPageComponent,
    VirementsPageComponent,
    SingleCompteComponent,
    CustomSelectComponent,
    CustomFormFieldsComponent,
    CustomAlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterLink,
    RouterLinkActive,
    NgClass,
    CurrencyPipe,
    NgFor,
    FormsModule,
    BrowserAnimationsModule
],
  providers: [{ provide: LOCALE_ID, useValue: 'fr-FR'}],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {registerLocaleData(fr.default);}
}
