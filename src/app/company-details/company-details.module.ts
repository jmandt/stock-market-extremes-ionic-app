import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {CompanyDetailsPageRoutingModule} from './company-details-routing.module';

import {CompanyDetailsPage} from './company-details.page';
import {NewsComponent} from './news/news.component';
import {OverviewComponent} from './overview/overview.component';
import {FinancialsComponent} from './financials/financials.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CompanyDetailsPageRoutingModule,
    ],
    declarations: [
        CompanyDetailsPage,
        OverviewComponent,
        FinancialsComponent,
        NewsComponent]
})
export class CompanyDetailsPageModule {
}
