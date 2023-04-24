import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student/student.service';
import { Student } from '../../types/student/student.types';
import { IClicked, ITableConfig } from '../../core/shared/components/table/table.interface';
import { StudentModalComponent } from './components/student-modal/student-modal.component';
import { MatDialog } from "@angular/material/dialog";
import { GenderService } from "../../services/gender/gender.service";
import { DegreeService } from "../../services/degree/degree.service";
import { DialogService } from "../../core/shared/services/dialog/dialog.service";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  tableConfig: ITableConfig = {
    displayedColumns: ['id', 'name','gender', 'degree', 'phone', 'address', 'actions'],
    namesColumns: ['Id', 'Name', 'Gender', 'Degree', 'Phone', 'Address', 'Actions'],
    actions: [
      { name: 'Edit', icon:'edit' },
      { name: 'Delete', icon:'delete' }
    ]
  }
  lstStudents: any[] = []

  constructor( private readonly studentService: StudentService,
               private readonly genderService: GenderService,
               private readonly degreeService: DegreeService,
               private readonly matDialog: MatDialog,
               private readonly dialogService: DialogService
  ) {}

  ngOnInit(): void {
    this.getStudents()
  }

  private openModal(student?: Student) {
    const dialogRef = this.matDialog.open(StudentModalComponent, {
      width: '40%',
      height: '70%',
      data: student
    });
    dialogRef.afterClosed().subscribe((result: Student) => {
      if(!result.id) this.updateStudent(result)
      else this.createStudent(result)
    });
  }
  private getStudents() {
    this.studentService.getAll().subscribe(
      (response: Student[]) => {
        this.lstStudents = this.mapToTable(response)
      });
  }
  private deleteStudent(student: Student) {
    this.dialogService.openConfirmDialog(student.name, 'student')
      .afterClosed()
      .subscribe(res => {
        if(res) {
          this.studentService.delete(student.id).subscribe(
            (response: boolean) => {
              if(response) this.getStudents()
            }
          )
        }
      })
  }
  private getStudent(id: number) {
    this.studentService.getById(id).subscribe(
      (response: Student) => {
        if(response) this.openModal(response)
      }
    )
  }
  private updateStudent(student: Student) {
    this.studentService.update(student).subscribe(
      (response: Student) => {
        this.getStudents()
      })
  }
  private createStudent(student: Student) {
    this.studentService.create(student).subscribe(
      (response: Student) => {
        this.getStudents()
      })
  }
  private mapToTable(students: Student[]): any[] {
    return students.map(student => {
      return {
        ...student,
        gender: student.gender.name,
        degree: student.degree.name
      }
    })
  }

  createUser() {
    this.openModal()
  }
  selected(event: IClicked) {
    switch (event.name) {
      case 'Delete':
        this.deleteStudent(event.item)
        break
      case 'Edit':
        this.getStudent(event.item.id)
        break
    }
  }
}
