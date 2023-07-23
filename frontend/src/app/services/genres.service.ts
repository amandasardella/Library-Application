import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Genres } from '../models/genres.model';

const baseUrl = 'http://localhost:3030/api/genre';

@Injectable({
  providedIn: 'root'
})
export class GenresService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<Genres[]> {
    return this.http.get<Genres[]>(baseUrl);
  }

  get(id: any): Observable<Genres> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByName(name: any): Observable<Genres[]> {
    return this.http.get<Genres[]>(`${baseUrl}?name=${name}`);
  }
}
