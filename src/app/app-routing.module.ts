import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './components/student/student.component';
import { GenderComponent } from './components/gender/gender.component';
import { DegreeComponent } from './components/degree/degree.component';

const routes: Routes = [
  { path: 'students', component: StudentComponent },
  { path: 'genders', component: GenderComponent },
  { path: 'degrees', component: DegreeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
