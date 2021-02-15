import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TemplateService } from 'src/app/core/api/templates/templates.service';
import { LOCAL_STORAGE_KEY } from 'src/app/core/constans';
import { SavedLocalStorageData, StorageEditableItemConfig } from 'src/app/core/models';
import { EditTemplateDialog } from '../components/edit-template-dialog/edit-template-dialog.component';
 
@Directive({
    selector: '[editable]'
})
export class EditableDirective implements OnInit {
  configs: Array<StorageEditableItemConfig> = [];
  template: SavedLocalStorageData;
  templates: SavedLocalStorageData[] = [];
  result: string = '';
  isOpenedDialog: boolean = false;

  @Input() templateId: number = -1;
     
  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    public dialog: MatDialog,
    private templatesService: TemplateService
  ) {
    this.template = {} as SavedLocalStorageData;
  }

  ngOnInit() {
    this.templates = this.templatesService.getParsedTemplates()
    this.template = this.templates[this.templateId - 1];
    this.initialtransform();
  }

  @HostListener("mouseenter") onMouseEnter() {
    const editableElements = this.elementRef.nativeElement.querySelectorAll('.editable');
    editableElements.forEach((element: HTMLElement, id: number) => element.addEventListener('click', this.clickListener.bind(this, id, element)))
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.removeAllEventListeners();
  }

  private initialtransform(): void {
    const editableElements = this.elementRef.nativeElement.querySelectorAll('.editable');
    editableElements.forEach((element: HTMLElement, id: number) => {
      const fontSize = this.template.configs[id].fontSize;
      this.renderer.setStyle(element, "font-size", `${fontSize}px`);
    })
  }

  private removeAllEventListeners() {
    if (!this.isOpenedDialog) {
      const editableElements = this.elementRef.nativeElement.querySelectorAll('.editable');
      editableElements.forEach((element: HTMLElement) => {
        const new_element = element.cloneNode(true);
        if (element.parentNode) element.parentNode.replaceChild(new_element, element);
      })
    }
  }

  private clickListener(id: number, element: HTMLElement) {
    const config = this.template.configs[id];
    this.openDialog(element, config)
  }

  private saveUpdatedTemplate(): void {
    const templateHTML = this.elementRef.nativeElement.querySelectorAll('.template');
    this.template.template = templateHTML[0].outerHTML;
    this.templates[this.templateId - 1] = this.template;
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this.templates));
  }

  private openDialog(element: HTMLElement, config: StorageEditableItemConfig): void {
    this.isOpenedDialog = true;
    const { fontSize } = config;
    const value = element.innerText;
    const dialogRef = this.dialog.open(EditTemplateDialog, {
      width: '30%',
      data: { fontSize, value }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const { value, fontSize } = result;
        element.innerHTML = value;
        this.template.modified = +new Date();
        config.fontSize = fontSize;
        this.renderer.setStyle(element, "font-size", `${fontSize}px`);
      }
      this.isOpenedDialog = false;
      this.removeAllEventListeners();
      this.saveUpdatedTemplate();
    })
  }
}