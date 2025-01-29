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
import { AccountElementComponent } from './components/account-element/account-element.component';
import { AccountsListComponent } from './components/accounts-list/accounts-list.component';
import { AccountsPageComponent } from './components/accounts-page/accounts-page.component';
import { WithdrawalsPageComponent } from './components/withdrawals-page/withdrawals-page.component';
import { TransfersPageComponent } from './components/transfers-page/transfers-page.component';
import { SingleAccountPageComponent } from './components/single-account-page/single-account-page.component';
import { CustomSelectComponent } from "./components/custom-select/custom-select.component";
import { CustomFormFieldsComponent } from "./components/custom-form-fields/custom-form-fields.component";
import { FormsModule } from '@angular/forms';
import { CustomAlertComponent } from './components/custom-alert/custom-alert.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AccountElementComponent,
    AccountsListComponent,
    AccountsPageComponent,
    WithdrawalsPageComponent,
    TransfersPageComponent,
    SingleAccountPageComponent,
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
    BrowserAnimationsModule,
    HttpClientModule
],
  providers: [{ provide: LOCALE_ID, useValue: 'fr-FR'}],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {registerLocaleData(fr.default);}
}
