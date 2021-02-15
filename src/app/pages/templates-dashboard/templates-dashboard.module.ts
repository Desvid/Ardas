import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplatesDashboardComponent } from './templates-dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    TemplatesDashboardComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class TemplatesDashboardModule { }
