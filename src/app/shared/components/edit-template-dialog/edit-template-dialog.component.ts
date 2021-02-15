import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

export interface DialogData {
  value: string;
  fontSize: number;
}

@Component({
  selector: 'app-edit-template-dialog',
  templateUrl: './edit-template-dialog.component.html',
  styleUrls: ['./edit-template-dialog.component.scss']
})
export class EditTemplateDialog implements OnInit, OnDestroy {
  subscriptions: Array<Subscription> = [];
  fontSizeControl: FormControl;

  constructor(
    public dialogRef: MatDialogRef<EditTemplateDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
      this.fontSizeControl = new FormControl(data.fontSize, [Validators.min(10), Validators.max(120)]);
      
    }

  ngOnInit() {
    this.subscriptions.push(
      this.fontSizeControl.valueChanges.subscribe(value => this.data.fontSize = value)
    );
  }

  ngOnDestroy() {
    this.subscriptions.map(subscribe => subscribe.unsubscribe());
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  
}
