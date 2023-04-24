import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Http } from '../../types/http/http.types';
import { Student } from '../../types/student/student.types';
import { environment } from '../../environments/environments.dev';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private _httpClient: HttpClient) { }

  getAll(): Observable<Student[]> {
    return this._httpClient.get<Student[]>(
     `${environment.apiURL}/student`
      )
  }
  getById(id: number): Observable<Student> {
    return this._httpClient.get<Student>(
      `${environment.apiURL}/student/${id}`
    )
  }
  update(student: Student) {
    return this._httpClient.post<Student>(
      `${environment.apiURL}/student`,
      student
    )
  }
  create(student: Student) {
    return this._httpClient.put<Student>(
      `${environment.apiURL}/student`,
      student
    )
  }
  delete(id: number): Observable<boolean> {
    return this._httpClient.delete<boolean>(
      `${environment.apiURL}/student/${id}`
    )
  }
}
