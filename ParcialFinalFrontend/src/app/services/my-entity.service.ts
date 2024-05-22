import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MyEntity } from '../models/my-entity';

@Injectable({
  providedIn: 'root'
})
export class MyEntityService {
  private apiUrl = 'http://localhost:8080/api/entities';

  constructor(private http: HttpClient) {}

  create(entity: MyEntity): Observable<MyEntity> {
    return this.http.post<MyEntity>(this.apiUrl, entity);
  }

  getAll(): Observable<MyEntity[]> {
    return this.http.get<MyEntity[]>(this.apiUrl);
  }
}
