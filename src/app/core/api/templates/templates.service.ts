import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { Template } from '../../models/api.models';
import { LOCAL_STORAGE_KEY } from '../../constans';
import { SavedLocalStorageData } from '../../models';

@Injectable({
  providedIn: 'any'
})
export class TemplateService {

  constructor(private api: ApiService) { }

  getTemplates(): Promise<Template[]> {
    return this.api.get('https://run.mocky.io/v3/f15072ac-8fb0-495a-9f89-61ac7e72c543');
  }

  getParsedTemplates(): SavedLocalStorageData[] {
    const storagedEditableItems = localStorage.getItem(LOCAL_STORAGE_KEY);
    return typeof storagedEditableItems === 'string' ? this.parseTemplates(storagedEditableItems) : [];
  }

  private parseTemplates(storagedEditableItems: string): SavedLocalStorageData[] {
    return JSON.parse(storagedEditableItems);
  }
}
