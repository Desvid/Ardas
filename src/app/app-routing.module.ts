import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateComponent, TemplatesDashboardComponent } from './pages';

const routes: Routes = [
  {
    path: '',
    component: TemplatesDashboardComponent,
    loadChildren: () => import('./pages/templates-dashboard/templates-dashboard.module')
      .then(m => m.TemplatesDashboardModule)
  },
  {
    path: 'template/:id',
    pathMatch: 'full',
    component: TemplateComponent,
    loadChildren: () => import('./pages/template/template.module').then(m => m.TemplateModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
