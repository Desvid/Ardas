import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TableComponent } from './components/table/table.component';
import { EditTemplateDialog } from './components/edit-template-dialog/edit-template-dialog.component';
import { HeaderComponent } from './components/header/Header.component';


@NgModule({
  declarations: [
    TableComponent,
    EditTemplateDialog,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  exports: [
    TableComponent,
    EditTemplateDialog,
    HeaderComponent
  ]
})
export class SharedModule { }
