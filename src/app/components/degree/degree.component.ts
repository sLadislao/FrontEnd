import { Component, OnInit } from '@angular/core';
import { IClicked, ITableConfig } from '../../core/shared/components/table/table.interface';
import { DegreeService } from '../../services/degree/degree.service';
import { Degree } from '../../types/degree/degree.types';

@Component({
  selector: 'app-degree',
  templateUrl: './degree.component.html',
  styleUrls: ['./degree.component.scss']
})
export class DegreeComponent implements OnInit{
  tableConfig: ITableConfig = {
    displayedColumns: ['id', 'name', 'price'],
    namesColumns: ['Id', 'Name', 'Price'],
    actions: []
  }
  lstDegrees: any[] = []
  constructor( private readonly degreeService: DegreeService ) { }
  ngOnInit(): void {
    this.getDegrees()
  }
  private getDegrees() {
    this.degreeService.getAll().subscribe(
      (response: Degree[]) => {
        this.lstDegrees = this.mapToTable(response)
      });
  }

  createDegree() {

  }
  private mapToTable(degrees: Degree[]): any[] {
    return degrees.map(degree => {
      return {
        ...degree,
      }
    })
  }
  selected(event: IClicked) { }
}
