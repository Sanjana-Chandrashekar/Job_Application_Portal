import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule'},
  // {path: 'tab2', loadChildren: './tab2/tab2.module#Tab2PageModule'},
  { path: 'form/:id', loadChildren: './form/form.module#FormPageModule' },
  { path: 'view/:id', loadChildren: './view/view.module#ViewPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
