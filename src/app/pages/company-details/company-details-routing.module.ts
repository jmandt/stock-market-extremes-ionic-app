import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompanyDetailsPage } from './company-details.page';

const routes: Routes = [
  {
    path: 'company/:id',
    component: CompanyDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyDetailsPageRoutingModule {}
