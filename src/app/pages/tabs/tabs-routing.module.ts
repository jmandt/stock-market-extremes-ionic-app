import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'winners',
        children: [
          {
            path: '',
            loadChildren: () =>
               import('../winners/winners.module').then(m => m.WinnersPageModule),
          }
        ]
      },
      {
        path: 'loosers',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../loosers/loosers.module').then(m => m.LoosersPageModule)
          }
        ]
      },
      {
        path: 'watchlist',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab3/tab3.module').then(m => m.Tab3PageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/winners',
        pathMatch: 'full'
      },
      {
        path: '**',
        redirectTo: '/tabs/winners',
      }

    ]
  },
  {
    path: '',
    redirectTo: '/tabs/winners',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
