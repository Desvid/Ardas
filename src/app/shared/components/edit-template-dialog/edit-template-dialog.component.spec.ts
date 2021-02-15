import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTemplateDialog } from './edit-template-dialog.component';

describe('EditTemplateDialog', () => {
  let component: EditTemplateDialog;
  let fixture: ComponentFixture<EditTemplateDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTemplateDialog ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTemplateDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
