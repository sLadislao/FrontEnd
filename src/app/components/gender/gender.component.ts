import { Component, OnInit } from '@angular/core';
import { IClicked, ITableConfig } from "../../core/shared/components/table/table.interface";
import { GenderService } from "../../services/gender/gender.service";
import { Gender } from "../../types/gender/gender.types";

@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.scss']
})
export class GenderComponent implements OnInit {
  tableConfig: ITableConfig = {
    displayedColumns: ['id', 'name'],
    namesColumns: ['Id', 'Name'],
    actions: []
  }
  lstGenders: any[] = []
  constructor( private readonly genderService: GenderService ) { }
  ngOnInit(): void {
    this.getGenders()
  }
  private getGenders() {
    this.genderService.getAll().subscribe(
      (response: Gender[]) => {
        this.lstGenders = this.mapToTable(response)
      });
  }
  private mapToTable(genders: Gender[]): any[] {
    return genders.map(gender => {
      return {
        ...gender,
      }
    })
  }
  selected(event: IClicked) { }
}
