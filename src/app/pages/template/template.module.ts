import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './template.component';
import { EditableDirective } from 'src/app/shared/directives/editable.directive';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    TemplateComponent,
    EditableDirective
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class TemplateModule { }
