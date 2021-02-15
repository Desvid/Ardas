import { AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TemplateService } from 'src/app/core/api/templates/templates.service';
import { formatTableDate } from 'src/app/core/helpers';
import { SavedLocalStorageData, TableData, Template } from 'src/app/core/models';

@Component({
  selector: 'app-templates-dashboard',
  templateUrl: './templates-dashboard.component.html'
})
export class TemplatesDashboardComponent implements OnInit {
  tableData: TableData[] = [];
  displayedTableColumns: string[];

  constructor(private readonly templatesService: TemplateService, private readonly router: Router) {
    this.displayedTableColumns = ['id', 'name', 'modified'];
  }

  async ngOnInit() {
    const test = await this.templatesService.getTemplates();
    const data = this.templatesService.getParsedTemplates();
    this.tableData = this.getTableData(data);
  }

  private getTableData(templatesData: SavedLocalStorageData[]): TableData[] {
    return templatesData.map(({ id, name, modified }) => {
      const lastModifiedDate = formatTableDate(new Date(modified));
      return Object.assign({}, { id, name, modified: lastModifiedDate } as TableData);
    });
  }

  public handleCellClick(id: number): void {
    this.router.navigate([`/template/${id}`]);
  }
}
