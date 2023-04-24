import {AfterViewInit, Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort, Sort} from "@angular/material/sort";
import {ITableConfig, IClicked} from "./table.interface";
import {LiveAnnouncer} from "@angular/cdk/a11y";

@Component({
  selector: 'shared-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements AfterViewInit {
  @ViewChild(MatSort) sort: MatSort | undefined
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined

  @Input() set items(value: any[])
  { this.dataSource.data = value }
  @Input() set config(value: ITableConfig)
  { this.tableConfig = value }
  @Output() itemEvent = new EventEmitter<IClicked>;

  // @ts-ignore
  public tableConfig: ITableConfig
  // @ts-ignore
  public dataSource: MatTableDataSource<any[]> = new MatTableDataSource([])

  constructor(private _liveAnnouncer: LiveAnnouncer) { }

  actionEvent(item: any, name: string) {
    const event: IClicked = {
      item: item,
      name: name
    };
    this.itemEvent.emit(event)
  }

  ngAfterViewInit() {
    this.dataSource.data = this.items
    // @ts-ignore
    this.dataSource.sort = this.sort
    // @ts-ignore
    this.dataSource.paginator = this.paginator
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction)
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`).then(r => {})
    else
      this._liveAnnouncer.announce('Sorting cleared').then(r => {})
  }
}
