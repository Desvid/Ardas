import { Component } from '@angular/core';
import { TemplateService } from './core/api/templates/templates.service';
import { DEFAULT_FONT_SIZE, LOCAL_STORAGE_KEY } from './core/constans';
import { SavedLocalStorageData, StorageEditableItemConfig } from './core/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  constructor(private readonly templatesService: TemplateService) {}

  async ngOnInit() {
    const isEmptyLocalStorage = !localStorage.getItem(LOCAL_STORAGE_KEY);
    if (isEmptyLocalStorage) {
      const data = await this.templatesService.getTemplates();
      const editableAmounts = data.map((item) => {
        return item.template.split('editable').length - 1;
      });
      const storagedEditableItems = data.map((template, id) => {
        const configs = [];
        for (let i = 0; i < editableAmounts[id]; i++) {
          configs.push(Object.assign({}, { fontSize: DEFAULT_FONT_SIZE } as StorageEditableItemConfig))
        }
        return Object.assign({}, {...template, configs } as SavedLocalStorageData)
      })
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(storagedEditableItems));
    }
  }
}
