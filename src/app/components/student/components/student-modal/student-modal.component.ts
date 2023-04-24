import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Student } from '../../../../types/student/student.types';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UntypedFormBuilder, UntypedFormGroup, Validators} from '@angular/forms';
import { Gender } from '../../../../types/gender/gender.types';
import { Degree } from '../../../../types/degree/degree.types';
import { GenderService } from '../../../../services/gender/gender.service';
import { DegreeService } from '../../../../services/degree/degree.service';

@Component({
  selector: 'app-student-modal',
  templateUrl: './student-modal.component.html',
  styleUrls: ['./student-modal.component.scss']
})
export class StudentModalComponent implements OnInit{
  @ViewChild('drawer') drawer: MatDrawer | undefined
  @Input() student: Student | undefined
  drawerMode: 'over' | 'side' = 'side'
  drawerOpened: boolean = true

  // @ts-ignore
  formGroup: UntypedFormGroup
  genders: Gender[] = []
  degrees: Degree[] = []
  constructor( @Inject(MAT_DIALOG_DATA) private readonly data: any,
               private readonly dialogRef: MatDialogRef <StudentModalComponent>,
               private readonly genderService: GenderService,
               private readonly degreeService: DegreeService,
               private readonly _formBuilder: UntypedFormBuilder) { }

  ngOnInit(): void {
    this.getGenders()
    this.getDegrees()
    this.formGroup = this._formBuilder.group({
      id: [0],
      name: ['', Validators.required],
      ssn: ['', Validators.required],
      birthday: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', Validators.required],
      degree: ['', Validators.required],
    })
    if(this.data) this.fillForm(this.data)
  }

  private getGenders() {
    this.genderService.getAll().subscribe(
      (response: Gender[]) => {
        this.genders = response
      }
    )
  }
  private getDegrees() {
    this.degreeService.getAll().subscribe(
      (response: Degree[]) => {
        this.degrees = response
      }
    )
  }
  private fillForm(student: Student) {
    this.formGroup.controls['id'].setValue(student.id)
    this.formGroup.controls['name'].setValue(student.name)
    this.formGroup.controls['ssn'].setValue(student.ssn)
    this.formGroup.controls['birthday'].setValue(student.birthday)
    this.formGroup.controls['phone'].setValue(student.phone)
    this.formGroup.controls['address'].setValue(student.address)
    this.formGroup.controls['email'].setValue(student.email)
  }
  save() {
    let student : Student = this.formGroup.getRawValue()
    student.birthday = this.getValidDate(student.birthday)
    this.dialogRef.close(student)
  }

  getValidDate(selectedDate: string) {
    const date = new Date(selectedDate)
    const dd = String(date.getDate()).padStart(2, '0')
    const mm = String(date.getMonth() + 1).padStart(2, '0')
    const yyyy = date.getFullYear()
    return yyyy + '-' + mm + '-' + dd
  }
}
