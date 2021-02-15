import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TemplateService } from 'src/app/core/api/templates/templates.service';
import { SavedLocalStorageData, Template } from 'src/app/core/models';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html'
})
export class TemplateComponent implements OnInit {
  templates: SavedLocalStorageData[] = [];
  template: SavedLocalStorageData;
  templateId: number = -1;
  htmlTemplate: string = '';

  constructor(
    private readonly activateRoute: ActivatedRoute,
    private readonly templatesService: TemplateService
  ) {
    this.template = {} as SavedLocalStorageData;
  }

  async ngOnInit() {
    const id = this.activateRoute.snapshot.params['id'];
    this.templateId = id;
    this.templates = this.templatesService.getParsedTemplates();
    this.template = this.templates[this.templateId - 1];
    this.htmlTemplate = this.template.template;
  }
}
