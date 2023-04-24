import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student/student.component';
import { CoreModule } from '../core/core.module';
import { StudentModalComponent } from './student/components/student-modal/student-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { GenderComponent } from './gender/gender.component';
import { DegreeComponent } from './degree/degree.component';

@NgModule({
  declarations: [
    StudentComponent,
    StudentModalComponent,
    GenderComponent,
    DegreeComponent,
  ],
  exports: [
    StudentComponent
  ],
	imports: [
		CommonModule,
		CoreModule,
		ReactiveFormsModule,
		MatInputModule,
		MatDatepickerModule,
		MatButtonModule,
		MatOptionModule,
		MatSelectModule,
		MatIconModule
	]
})
export class ComponentsModule { }
