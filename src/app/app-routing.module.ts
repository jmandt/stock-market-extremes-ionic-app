import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {WelcomeGuard} from './guards/welcome.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate: [WelcomeGuard],
  },
  {
    path: 'welcome',
    loadChildren: () =>
        import('./pages/welcome/welcome.module').then(m => m.WelcomePageModule),
  },
  {
    path: '**',
    redirectTo: '',
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
