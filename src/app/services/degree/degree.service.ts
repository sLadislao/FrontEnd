import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../../types/student/student.types';
import { environment } from '../../environments/environments.dev';
import { Degree } from '../../types/degree/degree.types';

@Injectable({
  providedIn: 'root'
})
export class DegreeService {

  constructor(private _httpClient: HttpClient) { }

  getAll(): Observable<Degree[]> {
    return this._httpClient.get<Degree[]>(
      `${environment.apiURL}/degree`
    )
  }
}
