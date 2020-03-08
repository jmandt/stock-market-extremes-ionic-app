import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {WinnersPage} from './winners.page';
import {CompanyDetailsPageModule} from '../company-details/company-details.module';
import {SharedModule} from "../../shared/shared.module";

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild([{path: '', component: WinnersPage}]),
        CompanyDetailsPageModule,
        SharedModule,
    ],
    declarations: [WinnersPage]
})
export class WinnersPageModule {
}
