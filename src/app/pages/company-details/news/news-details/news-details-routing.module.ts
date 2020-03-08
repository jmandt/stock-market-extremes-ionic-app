import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsDetailsPage } from './news-details.page';

const routes: Routes = [
  {
    path: 'company/:id/news/:id',
    component: NewsDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsDetailsPageRoutingModule {}
