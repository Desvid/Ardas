import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TableData } from 'src/app/core/models';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  @Input() dataSource: TableData[] = [];
  @Input() displayedColumns: string[] = [];
  @Output() onCellClick = new EventEmitter<number>();

  handleCellClick(column: string, element: TableData): void {
    if (column === 'name') this.onCellClick.emit(element.id);
  }
}
