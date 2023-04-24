import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environments.dev';
import { Gender } from '../../types/gender/gender.types';

@Injectable({
  providedIn: 'root'
})
export class GenderService {

  constructor(private _httpClient: HttpClient) { }
  getAll(): Observable<Gender[]> {
    return this._httpClient.get<Gender[]>(
      `${environment.apiURL}/gender`
    )
  }
}
